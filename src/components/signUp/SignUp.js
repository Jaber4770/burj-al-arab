import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const SignUp = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className='login-form'>
            <div>
                <form>
                    <h1>Sign In here</h1>
                    <input type="text" placeholder='Your Name' />
                    <br />
                    <input type="email" placeholder='Your Email' />
                    <br />
                    <input type="password" placeholder='Your Password' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <h5>Sign in with Google</h5>
                <button onClick={signInUsingGoogle}>Google sign in</button>
                <div>
                    <p>Already have a Burj Al Arab account? <Link to="/login">Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;