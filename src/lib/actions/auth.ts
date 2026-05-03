'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation' // Importera redirect!

export async function login(prevState: any, formData: FormData) {
  const email = formData.get('email')
  const password = formData.get('password')

  try {
    const res = await fetch('https://localhost:7000/api/auth/login', { // Din lokala .NET port
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    })

    if (!res.ok) {
      return { success: false, error: 'Inloggningen misslyckades. Kontrollera uppgifterna.' }
    }

    const data = await res.json() // Antar att din API skickar { token: "..." }

    if (data.token) {
      const cookieStore = await cookies()
      cookieStore.set('session_token', data.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24, // 1 dag
      })
    }
  } catch (error) {
    return { success: false, error: 'Kunde inte nå servern.' }
  }

  // Redirect bör ske UTANFÖR try/catch-blocket i Next.js Server Actions
  redirect('/dashboard') 
}