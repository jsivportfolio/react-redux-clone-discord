import React from 'react';
import { auth, provider } from "./firebase";
import './Login.css';
import { Button } from "@material-ui/core";

function Login() {

    const functionLogin = () => {
        // Begin User Login Function
        auth.signInWithPopup(provider).catch(errorUserLogin => alert(errorUserLogin.message));
    }

    return (
        <div className="login">

            <div className="login__logo">
                {/* <img src="" alt=""></img> */}
                <h2>#ReduxChat</h2>
            </div>

            <Button onClick={functionLogin}>Login</Button>

        </div>
    )
}

export default Login
