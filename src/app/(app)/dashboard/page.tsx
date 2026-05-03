import { fetchWithAuth } from '@/lib/api';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('session_token');

  if (!token) {
    redirect('/signin-email');
  }

  // Vi tar bort try/catch här. Om fetchWithAuth gör en redirect, 
  // så kommer den inte längre "fångas" och stoppas.
  const res = await fetchWithAuth(`${process.env.DOTNET_AUTH_URL}/api/auth/me`);
  
  if (!res.ok) {
    redirect('/signin-email');
  }
  
  const userData = await res.json();

  return (
    <div className="p-8">
      <h1>Välkommen {userData.email}!</h1>
    </div>
  );
}