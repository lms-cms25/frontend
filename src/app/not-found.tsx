import Image from "next/image"
import { notFoundImg } from "./assets"
import Link from "next/link"

const NotFound = () => {
  return (
    <div style={{
      display:
        "flex",
      justifyContent: "center",
      alignItems: 'center',
      flexDirection: 'column',
      height: '100vh',
      backgroundColor: '#2C3545',
      color: 'white',
      gap: '1rem'
    }}>
      <Image src={notFoundImg} width={notFoundImg.width / 1.4} height={notFoundImg.height / 1.4} alt="" />
      <h1 style={{ fontWeight: '600', fontSize: '50px', marginTop: '1rem' }}>Page Not Found!</h1>
      <div style={{ marginBottom: '2rem', textAlign: 'center', color: 'var(--text-muted-color)' }}>
        <p>
          Sorry, the page you are looking for doesn't exist or has been removed.
        </p>
        <p>
          Keep exploring out site.
        </p>
      </div>

      <Link href={"/"} >
        <button className="primary-btn btn-normal"
          style={{ width: '250px' }}
        >
          Back to Home{" "}
          <span>&#8599;</span>
        </button>
      </Link>

    </div>
  )
}

export default NotFound