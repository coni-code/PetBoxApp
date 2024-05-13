import React, { useState } from 'react';
import { Login } from './Login';
import { SingUp } from './SingUp';
import '../../assets/styles/auth.css';


export const AuthScreen = () => {

    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return ( 
        <div className='auth-form-container'>
            {
                currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <SingUp onFormSwitch={toggleForm}/>
            }
        </div> 
    );
}
