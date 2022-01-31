import React from 'react';
import useAuth from '../../Hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <form>
            <h1>Log In here</h1>
            <input type="text" placeholder='Your Name' name="" id="" />
            <br />
            <input type="email" placeholder='Your Email' name="" id="" />
            <br />
            <input type="submit" value="Submit" />
            <h5>Sign in with Google</h5>
            <button onClick={signInUsingGoogle()}>Google</button>
        </form>
    );
};

export default Login;