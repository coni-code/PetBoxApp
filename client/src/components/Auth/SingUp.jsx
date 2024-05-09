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
        let url = 'http://localhost:5000/api/auth/signup';

        let options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"login":"${login}","password":"${password1}","email":"${email}"}`
        };

        fetch(url, options)
        .then(res => res.json())
        .then(json => alert(JSON.stringify(json)))
        .catch(err => console.error('error:' + err));
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
            <svg
                    width="90"
                    height="90"
                    viewBox="0 0 23.8125 23.8125"
                    version="1.1"
                    id="svg1"
                    xmlns="http://www.w3.org/2000/svg">
                    <defs id="defs1" />
                    <g id="layer1" transform="matrix(0.89779621,0,0,0.89779621,-51.310172,-32.268185)">
                        <circle
                        style={{ fill: '#feae56', fillOpacity: 1, stroke: '#d34614', strokeWidth: 0.672, strokeDasharray: 'none', strokeOpacity: 1 }}
                        id="path3"
                        cx="70.563713"
                        cy="49.294964"
                        r="12.492142"
                        />
                        <path
                        style={{ fill: '#ffffff', fillOpacity: 1, stroke: '#d34614', strokeWidth: 0.587, strokeDasharray: 'none', strokeOpacity: 1 }}
                        d="m 68.165039,50.796151 c 0,0 -3.76242,0.30404 -4.4845,1.90022 -0.73821,1.63184 -0.38005,3.07835 -0.38005,3.07835 h 14.897693 c 0,0 0.30404,-1.36816 -0.53205,-3.15436 -0.8361,-1.7862 -3.95246,-2.01423 -3.95246,-2.01423 0,0 -1.97622,1.59618 -5.548633,0.19002 z"
                        id="path2"
                        />
                        <circle
                        style={{ fill: '#ffffff', fillOpacity: 1, stroke: '#d34614', strokeWidth: 0.587, strokeDasharray: 'none', strokeOpacity: 1 }}
                        id="path1"
                        cx="70.734962"
                        cy="46.860653"
                        r="4.8909059"
                        />
                    </g>
                </svg>
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
