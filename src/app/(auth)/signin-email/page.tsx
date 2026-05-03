'use client'
import { useActionState } from 'react';
import { login } from '@/lib/actions/auth';
import FormGroup from "@/components/forms/FormGroup"

const page = () => {

  const [state, formAction, isPending] = useActionState(login, null);

  return (
    <div>
      <div style={{ marginBottom: '4rem' }}>
        <h1 style={{ fontWeight: '600', fontSize: '70px' }}>Welcome</h1>
        <p>Please log in to your account to continue.</p>
      </div>

      <div className="form-login-email">
        {/* Här kopplar vi din Server Action */}
        <form action={formAction} style={{ display: "flex", flexDirection: 'column' }}>
          
          <FormGroup 
            label="Email Address" 
            type="email" // Ändrat till email för browser-validering
            name="email"  // VIKTIGT: name måste matcha det du hämtar i Server Action
            placeholder="Type your email address" 
            id="login-email"
            defaultValue={state?.email ?? ''}
          />

          <FormGroup 
            label="Password" 
            type="password" 
            name="password" // VIKTIGT: name måste matcha
            placeholder="Type your password" 
            id="login-password" 
            defaultValue={''}

          />

          {/* Visa felmeddelande om inloggningen misslyckas */}
          {state?.error && (
            <p style={{ color: 'red', fontSize: '14px', marginBottom: '1rem' }}>
              {state.error}
            </p>
          )}

          <span style={{ alignSelf: 'flex-end', fontSize: '12px', color: 'orange', marginBottom: '3rem', textDecoration: 'underline', cursor: 'pointer' }}>
            Forgot your password?
          </span>

          <button 
            type="submit" 
            disabled={isPending} // Inaktivera knappen under laddning
            className="primary-btn btn-normal" 
            style={{ width: '100%', opacity: isPending ? 0.7 : 1 }}
          >
            {isPending ? 'Logging in...' : 'Continue'}
          </button>
        </form>
      </div>

      <div style={{ justifySelf: 'center' }}>
        <div>
          <p style={{ textAlign: 'center', margin: '2rem 0' }}>Or continue with</p>
        </div>
        <button className="secondary-btn">(windows) Work or school account</button>
      </div>
    </div>
  )
}

export default page