import React, { useState } from 'react';
import { Login } from './Login';
import { SingUp } from './SingUp';

export const AuthScreen = () => {

    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return ( 
        <div className='registrationView'>
            {
                currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <SingUp onFormSwitch={toggleForm}/>
            }
        </div> 
    );
}
