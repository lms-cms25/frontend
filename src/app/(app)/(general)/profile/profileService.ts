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