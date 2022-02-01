import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './login.css'

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || './home'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }

    return (
        <div className='login-form'>
            <div>
                <form>
                    <h1>Log In here</h1>
                    <input type="email" placeholder='Your Email' />
                    <br />
                    <input type="password" placeholder='Your Password' />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <h5>Sign in with Google</h5>
                <button onClick={handleGoogleLogin}>Google sign in</button>
                <div>
                    <p>New to Burj Al Arab? <Link to="/signup">Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;