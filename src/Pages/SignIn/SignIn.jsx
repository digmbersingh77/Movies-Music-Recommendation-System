import React,{ useState} from 'react';
import './SignIn.css';

const SignIn = () => {
    const [signState, setSignState] = useState("Sign In")

  return (
    <div className='signin'>
        <div className="signin-form">
            <h1>{ signState }</h1>
            <form>
                { signState==="Sign Up" ? <input type="text" placeholder='Name' />:<></>}
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Password' />
                <button>{ signState }</button>
            </form>
            <div className="form-switch">
                { signState==="Sign In"?
                  <p>Don't have account <span onClick={()=> {setSignState("Sign Up")}}>Sign Up</span></p>:
                  <p>Already have account <span onClick={()=> {setSignState("Sign In")}}>Sign In</span></p>}
            </div>
        </div>
    </div>
  )
}

export default SignIn