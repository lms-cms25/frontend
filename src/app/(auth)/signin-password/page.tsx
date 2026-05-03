"use client"
import VerificationInput from "@/components/forms/VerificationInput"

const page = () => {
    return (
        <>
            <div>
                <div style={{ marginBottom: '4rem' }}>
                    <h1 style={{ fontWeight: '600', fontSize: '70px' }}>Verification needed</h1>
                    <p>Please verfify your account with the verification code that has been sent to your specified email address.</p>
                </div>
                <form action="" style={{ display: "flex", flexDirection: 'column' }}>
                    <label htmlFor="">Enter verification code</label>
                    <VerificationInput length={7} onChange={(code) => console.log(code)} />
                    <div className="resend-code" style={{display: 'flex', justifyContent: 'space-between', margin: '1rem 0 2rem'}}>
                        <span style={{fontSize: '12px', color: 'gray', marginBottom: '3rem' }}>New code can be sent in 15 sec</span>
                        <span style={{fontSize: '12px', color: 'orange', marginBottom: '3rem', textDecoration: 'underline' }}>Resend verification code</span>
                    </div>
                    <button type="submit" className="primary-btn btn-normal" style={{ width: '100%' }}>Continue</button>
                </form>
            </div>
        </>
    )
}

export default page