import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = (props) => {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let url = 'http://localhost:5000/api/auth/login';

        let options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"login":"${login}","password":"${password}"}`
        };

        fetch(url, options)
        .then(res => {
            if (res.ok) {
                document.querySelector('.errorAuthLogin').classList.remove('show');
                document.querySelector('.errorAuthLogin2').classList.remove('show');
                setLoggedIn(true);
                return res.json();
            } else {
                document.querySelector('.errorAuthLogin').classList.add('show');
                document.querySelector('.errorAuthLogin2').classList.add('show');
            }
        })
        .then(() => {
            if(loggedIn)
                navigate('/animal-form'); 
            else 
                navigate('/');
        })
        .catch(err => console.error('error:' + err));
    }

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
                <form className='login-form form' onSubmit={handleSubmit}>
                    <label htmlFor="Login">Login</label>
                    <input 
                        value={login} 
                        onChange={(e) => {
                            setLogin(e.target.value);                     
                        }} 
                        type="text" 
                        placeholder="Login" 
                        id="login" 
                        name="login" 
                        className="authInput"
                        required
                    />
                    <span className="errorAuthLogin">Niepoprawny Login, lub hasło</span>
                    <label htmlFor="Password">Password</label>
                    <input 
                        value={password} 
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}  
                        type="password" 
                        placeholder="Password" 
                        id="password" 
                        name="password"
                        className="authInput"
                        required
                    />
                    <span className="errorAuthLogin2">Niepoprawny Login, lub hasło</span>
                    <button className="log-button" type="submit">Log In</button>
                </form>
                <hr/>
                <button className='switch-button' onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
                <span className='forgotPassword'>Zapomniałeś hasła? Kliknij!</span>
            </div>
        </>
    );
}
