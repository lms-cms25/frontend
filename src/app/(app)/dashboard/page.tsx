"use client"

import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {

  const { user, isAuthenticated } = useAuth();


  

  return (
    <div className="p-8">
      {/* <h1>Välkommen {userData.email}!</h1> */}
      <h1>Välkommen till dashboard, {user?.email}</h1>
      <p>Dina roller:
        <ul>
          {user?.roles.map(role => <li>{role}</li>)}
        </ul>
      </p>
    </div>
  );
}