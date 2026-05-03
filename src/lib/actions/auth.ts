'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation' // Importera redirect!

export async function login(prevState: any, formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  let isSuccessful = false;


  try {
    const res = await fetch(`${process.env.DOTNET_AUTH_URL}/api/auth/login`, { // Din lokala .NET port
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    })

    if (!res.ok) {
      return { success: false, error: 'Inloggningen misslyckades. Kontrollera uppgifterna.', email: email, password: password }
    }

    const data = await res.json() // Antar att din API skickar { token: "..." }

    // console.log(data);


    if (data.accessToken && data.refreshToken) {
      const cookieStore = await cookies();

      // Spara Access Token
      cookieStore.set('session_token', data.accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24,
      });

      // Spara Refresh Token (behövs för logout!)
      cookieStore.set('refresh_token', data.refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 60, // Ofta längre livslängd (60 dagar i din appsettings)
      });

      isSuccessful = true;
    }
  } catch (err: unknown) {

    const error = err as { message?: string; code?: string };

    console.log("--- DEBUG START ---");
    console.log("Message:", error.message);
    console.log("Code:", error.code); // T.ex. ECONNREFUSED
    console.log("URL som anropades:", `${process.env.DOTNET_AUTH_URL}/api/auth/login`);
    console.log("--- DEBUG END ---");
    return { success: false, error: `Internt fel: ${error.code}` }
  }

  // Redirect bör ske UTANFÖR try/catch-blocket i Next.js Server Actions
  if (isSuccessful) {
    redirect('/dashboard');
  }
}

export async function logout() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get('refresh_token')?.value;

  try {
    if (refreshToken) {
      // Anropa .NET Logout för att Revoke i databasen
      await fetch(`${process.env.DOTNET_AUTH_URL}/api/auth/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken: refreshToken }),
      });
    }
  } catch (err) {
    console.error("Kunde inte nå backend för logout, rensar lokalt ändå:", err);
  }

  // Ta bort båda kakorna oavsett om API-anropet lyckades eller ej
  cookieStore.delete('session_token');
  cookieStore.delete('refresh_token');

  redirect('/signin-email');
}

export async function refreshAccessToken() {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get('refresh_token')?.value;

  if (!refreshToken) return null;

  try {
    const res = await fetch(`${process.env.DOTNET_AUTH_URL}/api/auth/refresh`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refreshToken }),
    });

    if (!res.ok) throw new Error("Refresh failed");

    const data = await res.json();

    // Uppdatera cookies med de nya värdena
    cookieStore.set('session_token', data.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24,
    });

    cookieStore.set('refresh_token', data.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 60,
    });

    return data.accessToken;
  } catch (error) {
    console.error("Refresh misslyckades, skickar till login");
    redirect('/signin-email');
  }
}