import React, {useState} from 'react';

export const SingUp = (props) => {

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [loginFocused, setLoginFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [password1Focused, setPassword1Focused] = useState(false);
    const [password2Focused, setPassword2Focused] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleLoginFocus = () => {
        setLoginFocused(true);
    };
    
    const handleEmailFocus = () => {
        setEmailFocused(true);
    };
    
    const handlePassword1Focus = () => {
        setPassword1Focused(true);
    };
    
    const handlePassword2Focus = () => {
        setPassword2Focused(true);
    };

    return ( 
        <>
            <div className='registration'>
                <h1 className='header'>Sing-up Page</h1>
                <form className='singup-form form' onSubmit={handleSubmit}>
                    <label htmlFor="Login">Login</label>
                    <input 
                        value={login} 
                        onChange={(e) => {
                            setLogin(e.target.value);
                        }} 
                        onBlur={handleLoginFocus}
                        type="text" 
                        placeholder="Login" 
                        id="login" 
                        name="login"
                        focused={loginFocused.toString()}
                        pattern="^[A-Za-z0-9]{3,16}$"
                        required
                    />
                    <span className="error1">Login powinien mieć od 3 do 16 znaków i zawierać tylko litery i cyfry</span>
                    <label htmlFor='Email'>Email</label>
                    <input 
                        value={email} 
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        onBlur={handleEmailFocus}  
                        type='email' 
                        placeholder='Email' 
                        name='email' 
                        id='email'
                        focused={emailFocused.toString()}
                        required
                    />
                    <span className="error2">E-mail powinien zawierać małpę</span>
                    <label htmlFor="Password">Password</label>
                    <input 
                        value={password1} 
                        onChange={(e) => {
                            setPassword1(e.target.value);
                        }} 
                        onBlur={handlePassword1Focus}
                        type="password" 
                        placeholder="Password" 
                        id="password1" 
                        name="password1"
                        focused={password1Focused.toString()}
                        pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
                        required
                    />
                    <span className="error3">Hasło musi mieć 8-20 znaków i zawierać litery, 1 cyfrę, 1 znak specjalny</span>
                    <label htmlFor="RepeatPassword">Repeat Password</label>
                    <input 
                        value={password2} 
                        onChange={(e) => {
                            setPassword2(e.target.value);
                        }}  
                        onBlur={handlePassword2Focus}
                        onFocus={() => {
                            password2.name === "password2" && setPassword2Focused(true);
                        }}
                        type="password" 
                        placeholder="Password" 
                        id="password2" 
                        name="password2"
                        focused={password2Focused.toString()}
                        pattern = {password1}
                        required
                    />
                    <span className="error4">Hasła róznią się</span>
                    <button className="log-button" type="submit">Sing Up</button>
                </form>
                <hr/>
                <button className='switch-button' onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
            </div>
         </>
    );
}
