import { authImg } from "@/app/assets"
import Image from "next/image"

type AuthLayoutProps = {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div style={{ 
            display: "flex", 
            height: '100vh',
            gap: '2rem'
        }}>
            <div style={{ padding: '1rem' }}>
                <Image src={authImg} alt="" style={{ height: '100%', width: '100%', objectFit: 'cover' }}/>
            </div>
            <div style={{ padding: '1rem', display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '700px' }}>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout