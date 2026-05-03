import { cookies } from 'next/headers';
import { refreshAccessToken } from './actions/auth';
import { redirect } from 'next/navigation';

export async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const cookieStore = await cookies();
  let token = cookieStore.get('session_token')?.value;

  if (!token) {
    console.log("--- AUTH: Session saknas, försöker refresha ---");
    token = await refreshAccessToken() ?? undefined;
    
    if (!token) {
      console.log("--- AUTH: Refresh misslyckades, skickar till login ---");
      redirect('/signin-email'); 
    }
    console.log("--- AUTH: Refresh lyckades! ---");
  }

  const res = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });

  // Om API:et svarar 401 trots att vi trodde vi hade en token
  if (res.status === 401) {
    console.log("--- AUTH: Token var ogiltig (401), försöker refresh en sista gång ---");
    const newToken = await refreshAccessToken();
    if (newToken) {
       // Gör om anropet med den nya tokenen
       return fetch(url, {
         ...options,
         headers: {
           ...options.headers,
           'Authorization': `Bearer ${newToken}`,
           'Content-Type': 'application/json',
         },
       });
    }
    redirect('/signin-email');
  }

  return res;
}