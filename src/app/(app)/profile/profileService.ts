const API = "https://localhost:7250/api/profile";

export async function getProfile(userId: string) {
  // const res = await fetch(`${API}/${userId}`);
  const res = await fetch(`${API}` );

  if (!res.ok) throw new Error("Failed to fetch profile");

  return res.json();
}

export async function updateProfile(data: any) {
  const res = await fetch(API, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI3NmIxMWVmNS1hYmQyLTQxNjctYjc0OS0xNTExMTVjNzQ2M2YiLCJqdGkiOiJjZWQwYTMxYS04MTBlLTRkOTctOWUyNC1jZTRiMWQ5YzM5MzEiLCJ1c2VySWQiOiI3NmIxMWVmNS1hYmQyLTQxNjctYjc0OS0xNTExMTVjNzQ2M2YiLCJlbWFpbCI6Im1pZ3VlbC5nYXJheUBob3RtYWlsLnNlIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiQWRtaW4iLCJuYmYiOjE3NzgwNzM1MDEsImV4cCI6MTc3ODA3NDEwMSwiaXNzIjoiYXV0aC1hcGkiLCJhdWQiOiJtaWNyb3NlcnZpY2VzIn0.b96kmCtSzpL1MqifyRGj9qOnG8K2YrAu87cHViSrLRA",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to update profile");

  return res.json();
}

export async function createProfile(data: any) {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Failed to update profile");

  return res.json();
}