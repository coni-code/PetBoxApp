import React, {useState} from 'react';

export const Login = (props) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const emptyFieldsArray = [];
        if (login.trim() === '') {
            emptyFieldsArray.push('login');
        }
        if (password.trim() === '') {
            emptyFieldsArray.push('password');
        }
        setEmptyFields(emptyFieldsArray);

        if (emptyFieldsArray.length > 0) {
            alert("Nie wszystkie pola są uzupełnione.");
            return;
        }
    }

    return ( 
        <>
            <div className='registration'>
                <h1 className='header'>Login Page</h1>
                <form className='login-form form' onSubmit={handleSubmit}>
                    <label htmlFor="Login">Login</label>
                    <input 
                        value={login} 
                        onChange={(e) => {
                            setLogin(e.target.value);
                            if (e.target.value.trim() !== '') {
                                setEmptyFields(emptyFields.filter(field => field !== 'login'));
                            }
                        }} 
                        type="text" 
                        placeholder="Login" 
                        id="login" 
                        name="login" 
                        className={emptyFields.includes('login') ? 'empty-field' : ''}
                    />
                    <label htmlFor="Password">Password</label>
                    <input 
                        value={password} 
                        onChange={(e) => {
                            setPassword(e.target.value);
                            if (e.target.value.trim() !== '') {
                                setEmptyFields(emptyFields.filter(field => field !== 'password'));
                            }
                        }}  
                        type="password" 
                        placeholder="Password" 
                        id="password" 
                        name="password"
                        className={emptyFields.includes('password') ? 'empty-field' : ''}
                    />
                    <button class="log-button" type="submit">Log In</button>
                </form>
                <hr/>
                <button className='switch-button' onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            </div>
        </>
    );
}
