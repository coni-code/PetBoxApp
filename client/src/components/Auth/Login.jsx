import React, {useState} from 'react';

export const Login = (props) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(login);
    }

    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Login">Login</label>
                <input value={login} onChange={(e) => setLogin(e.target.value)} type="text" placeholder="Login" id="login" name="login"/>
                <label htmlFor="Password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" id="password" name="password"/>
                <button type="submit">Log In</button>
            </form>
            <button onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </>
    );
}
