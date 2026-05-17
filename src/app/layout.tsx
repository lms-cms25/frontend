import type { Metadata } from "next";
import { cookies } from "next/headers";
// import Providers from "./providers";
import { AuthProvider } from "@/context/AuthContext";
import { Archivo } from "next/font/google";
import "../css/globals.css";
import "../css/theme.css";
import "../css/buttons/buttons.css";
import "../css/forms/forms.css";
import "../css/labels/labels.css";
import { fetchWithAuth } from "@/lib/api";


const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
});

export const metadata: Metadata = {
  title: "Shiko LMS",
  description: "Learning Management System",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookieStore = await cookies();
  const token = cookieStore.get('session_token')?.value;

  let user = null;

  try {
    
    const res = await fetchWithAuth(token, `${process.env.DOTNET_AUTH_URL}/api/auth/me`)
    
    // console.log(res);
    if(res?.ok){
      user = await res.json();
    }
    // console.log(user);
  } catch (error) {
    console.log(error);
    
  }
    
  return (
    <html lang="en" className={archivo.variable}>
      <AuthProvider initialUser={user}>
        <body>{children}</body>
      </AuthProvider>
    </html>
  );
}
