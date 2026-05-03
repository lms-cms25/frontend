import { fetchWithAuth } from '@/lib/api';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  let userData = null;

  try {
    const res = await fetchWithAuth(`${process.env.DOTNET_AUTH_URL}/api/auth/me`);
    
    if (!res.ok) {
       // Om vi får t.ex. 401 trots fetchWithAuth:s interna refresh
       throw new Error("Unauthorized");
    }
    
    userData = await res.json();
  } catch (err) {
    console.error("Dashboard error:", err);
    // Vi sätter inte redirect här inne!
  }

  // Gör redirect här ute istället
  if (!userData) {
    redirect('/signin-email');
  }

  return (
    <div className="p-8">
      <h1>Välkommen {userData.email}!</h1>
      <pre className="mt-4 p-4 bg-gray-100 rounded">
        {JSON.stringify(userData, null, 2)}
      </pre>
    </div>
  );
}