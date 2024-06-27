import React from "react";
import "./Navbar.css"
import { useNavigate } from "react-router-dom";
import { Info } from "../../Helper/helper";
import { useContext } from "react";
const Navbar = ()=>{
    const {allInf,setAllInf} = useContext(Info);
    const navigate = useNavigate();
    const navigateTohome = ()=>{
        navigate('/');
    };
    const navigatetoLogin = () =>{
        if(allInf.status){
            navigate('/logout');
        }
        else{
            navigate('/login')
        }
        
    };
    return(
        <div className="abar-container">
           <div className="aicons">
             <button class="anav-button" onClick={navigateTohome}>&#8249;</button> 
             <button class="anav-button" onclick="goForward()">&#8250;</button> 
            </div>
           <button className="aall" onClick={navigatetoLogin}> {allInf.username ? <span>Logout</span> 
                    : <span>Login</span>}</button>
       </div>
    );
}
export default Navbar;