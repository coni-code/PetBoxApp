import React, {useState} from 'react';

export const SingUp = (props) => {

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(login);
    }

    return ( 
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Login">Login</label>
                <input value={login} onChange={(e) => setLogin(e.target.value)} type="text" placeholder="Login" id="login" name="login"/>
                <label htmlFor='Email'>Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' name='email' id='email'/>
                <label htmlFor="Password">Password</label>
                <input value={password1} onChange={(e) => setPassword1(e.target.value)} type="password" placeholder="Password" id="password" name="password"/>
                <label htmlFor="RepeatPassword">Repeat Password</label>
                <input value={password2} onChange={(e) => setPassword2(e.target.value)} type="password" placeholder="Password" id="password" name="password"/>
                <button type="submit">Log In</button>
            </form>
            <button onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
        </>
    );
}
