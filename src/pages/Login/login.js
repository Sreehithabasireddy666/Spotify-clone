import React, { useContext, useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { Info } from '../../Helper/helper';

const Login = ( ) => {
    const navigate = useNavigate();
    const {allInf,setAllInf} = useContext(Info);
    const {username,email,status} = allInf;
    const handleChange = e =>{
        setAllInf({...allInf,[e.target.name]:e.target.value});
    }

    // const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '' || email === '') {
            setErrorMessage('Please fill in all fields before submitting.');
        } else {
            setErrorMessage('');
            navigate('/');
            setAllInf(prevState => ({...prevState,status: true}));
        }
    };

    return (
        <div className='login-background'>
            <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="username">Username:</label>
                    <input className='input' type="text" id="username" name='username' value={username} onChange={handleChange}/>
                </div>
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input className='input' type="email" id="email" name='email' value={email} onChange={handleChange} />
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button className= "login-button" type="submit">Submit</button>
            </form>
        </div>
        </div>
    );
};

export default Login;
