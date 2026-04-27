import FormGroup from "@/components/forms/FormGroup"

const page = () => {
  return (
    <div>
      <div style={{ marginBottom: '4rem' }}>
        <h1 style={{fontWeight: '600', fontSize: '70px'}}>Welcome</h1>
        <p>Please log in to your account to continue.</p>
      </div>
      <div className="form-login-email" >
        <form action="" style={{ display: "flex", flexDirection: 'column' }}>
          <FormGroup label="Email Address" type="text" placeholder="Type your email address" id="login-email" />
          <span style={{ alignSelf: 'flex-end', fontSize: '12px', color: 'orange', marginBottom: '3rem', textDecoration: 'underline' }}>Forgot your email address?</span>
          <button type="submit" className="primary-btn btn-normal" style={{width: '100%'}}>Continue</button>
        </form>
      </div>
      <div style={{justifySelf: 'center'}}>
        <div>
          <p style={{textAlign: 'center', margin: '2rem 0'}}>Or continue with</p>
        </div>
        <button>(windows) Work or school account</button>
      </div>
    </div>
  )
}

export default page