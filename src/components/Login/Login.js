import React from "react";
import "./Login.css";

function Login(params) {
    const [route, setRoute] = React.useState("login");

    return (
        <div className="LoginPanel">
            <div className="LoginPanel__left">
                <div className="LoginPanel__left__title">
                    <h1>
                        Hi there, <span className="red">GUEST</span>!
                    </h1>
                    <h3>
                        The freedom you're searching is here! Would you like to
                        experience it for free?
                    </h3>
                </div>
                <div
                    className="LoginPanel__left__background"
                    id="LoginPanel__left__background"
                ></div>
            </div>
            <div className="LoginPanel__right">
                {(
                route === "login"
                ? <LoginForm tryLogin={params.tryLogin} />
                : <RegisterForm tryRegister={params.tryRegister}/>
                )}
            </div>
        </div>
        
    )
}

export default Login;

function LoginForm( params ) {
    return (
        <>
        <div className="LoginPanel__right__title">
            <h2>Sign in</h2>
        </div>
        <form className="LoginPanel__right__form">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />

            <input
                type="button"
                value="Sign In"
                onClick={() => {
                    params.tryLogin(
                        document.getElementById("username").value,
                        document.getElementById("password").value
                    );
                }}
            ></input>

            <div className="LoginPanel__right__form__input__forgot">
                <h3> Can't login?</h3>
                <a href="#">Request a password reset</a>

                <a href="#">Create a new account</a>
            </div>
        </form>
        </>
    )
}

function RegisterForm( params ) {
    return (
        <h1>Register XD</h1>
    )
}