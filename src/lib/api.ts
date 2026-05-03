import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const cookieStore = await cookies();
  const token = cookieStore.get('session_token')?.value;

  // Om ingen session finns, försök inte ens – redirecta direkt
  if (!token) {
    redirect('/signin-email');
  }

  const res = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  // Om token har gått ut (401), rensa inte kakor här, bara redirecta.
  if (res.status === 401) {
    redirect('/signin-email');
  }

  return res;
}