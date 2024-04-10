import React from 'react'
import Home from '../Home'

const Login = () => {
    const userName = "fraudInstitute";
    const password = "1123";

    const userInput = window.prompt("Enter UserName");
    const userpass = window.prompt("Enter password");

    if (userName == userInput && password == userpass) {
        return (
            <home />
        )
    }
    else {
        alert("incorrect Details")
    }

    return (
        <>
        <h1> WELCOME TO LOGIN PAGE </h1>



        </>
    )
}

export default Login

// no longer required