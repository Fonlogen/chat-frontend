import './App.css';
import React from 'react';
import { useEffect } from 'react';

import Login from './components/Login';

function App() {

    const [result, setResult] = React.useState(0);
    const [user, setUser] = React.useState(0);
    const [isLogged, setIsLogged] = React.useState(false);

    function tryLogin(username, password) {
        fetch('http://localhost:8055/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
            credentials: "include",
        }).then(response => response.status).then(data => {
            if (data === 200) {
                setUser(username);
                setIsLogged(true);
            }
        });
    }

    useEffect(() => {
        fetch('http://localhost:8055/').then(response => response.text()).then(data => {
            console.table(data);
            setResult(data);
        }, []);
    });

    useEffect(() => {
        fetch('http://localhost:8055/isLoggedIn', {
            credentials: "include",
        }).then(response => response).then(data => {

            /* 
            TODO:

            Problem:
            When the user is logged in, from the response we got both username
            and the status code. The problem is that the username is not being
            set to the user state, only able to retrive the status code.

            Probably the problem is that the response is not being parsed from the promise
            and the data is being returned as a promise, not as a string.

            Solution:
            Parse the response from the promise and set the username to the user state.
            
            */

            console.table(data);
            if (data.status === 200) {
                console.log(data.text());
                setUser(data.text());
                setIsLogged(true);
            }
            
        }, []);

        


    });


    return (
        <div className="App">
            { !isLogged ? <Login tryLogin={tryLogin}/> : (
                <>
                    <h1>Logged in as {user}</h1>
                    <a href='http://localhost:8055/logout'>Logout</a>
                </>
            )}
        </div>
    );
}

export default App;
