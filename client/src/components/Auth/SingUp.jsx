import React, {useState} from 'react';

export const SingUp = (props) => {

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [emptyFields, setEmptyFields] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const emptyFieldsArray = [];
        if (login.trim() === '') {
            emptyFieldsArray.push('login');
        }
        if (email.trim() === '') {
            emptyFieldsArray.push('email');
        }
        if (password1.trim() === '') {
            emptyFieldsArray.push('password1');
        }
        if (password2.trim() === '') {
            emptyFieldsArray.push('password2');
        }
        setEmptyFields(emptyFieldsArray);

        if (emptyFieldsArray.length > 0) {
            alert("Nie wszystkie pola są uzupełnione.");
            return;
        }

        const loginRegex = /^[a-zA-Z0-9]+$/;
        if (!loginRegex.test(login)) {
            alert("Login może zawierać tylko litery i cyfry");
            return;
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
         if (!passwordRegex.test(password1)) {
             alert("Hasło musi zaczynać się dużą literą i mieć jeden znak specjalny");
            return;
        }

        if (password1 !== password2) {
            alert("Hasła się różnią");
            return;
        }
    }

    return ( 
        <>
            <div className='registration'>
                <h1 className='header'>Sing-up Page</h1>
                <form className='singup-form form' onSubmit={handleSubmit}>
                    <label htmlFor="Login">Login</label>
                    <input value={login} onChange={(e) => setLogin(e.target.value)} type="text" placeholder="Login" id="login" name="login"/>
                    <label htmlFor='Email'>Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' name='email' id='email'/>
                    <label htmlFor="Password">Password</label>
                    <input value={password1} onChange={(e) => setPassword1(e.target.value)} type="password" placeholder="Password" id="password" name="password"/>
                    <label htmlFor="RepeatPassword">Repeat Password</label>
                    <input value={password2} onChange={(e) => setPassword2(e.target.value)} type="password" placeholder="Password" id="password" name="password"/>
                    <button class="log-button" type="submit">Sing Up</button>
                </form>
                <hr/>
                <button className='switch-button' onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
            </div>
         </>
    );
}
