import React from 'react';
import './logout.css'; 
import { Info } from '../../Helper/helper';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    const {allInf,setAllInf} = useContext(Info);
    const handleLogout = () => {
        navigate('/');
        setAllInf(prevState => ({...prevState,username:'',email:'',status: false}));
    };

    return (
        <div className="logout-background">
            <div className="logout-container">
                <p className="confirmation-text">Are you sure you want to log out?</p>
                <button className="logout-button" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Logout;
