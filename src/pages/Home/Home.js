import React, { useContext } from "react";
import "./Home.css"; 
import { useNavigate } from "react-router-dom";
import { Info } from "../../Helper/helper";
const Home = () => {
    const {allInf,setAllInf} = useContext(Info);
    const navigate = useNavigate();
    const navigateTohinanna = ()=>{
        navigate('/hinanna');
    };
    const navigateTotelugu = ()=>{
        navigate('/tollywoodhits');
    };
    const navigateTohindi = ()=>{
        navigate('/bollywoodhits');
    };
    const profileStyle = {
        opacity: allInf.username ? 1 : 0,
        transition: 'opacity 0.3s'
    };
    return (
        <div className="home">
            <div>
                <div className="bar-container">
                    <div className="icons">
                      <button class="nav-button" onclick="goBack()">&#8249;</button> 
                      <button class="nav-button" onclick="goForward()">&#8250;</button> 
                    </div>
                     <button className="all">ALL</button>
                     <div className="profile-button" style={profileStyle}>
                          {allInf.username.charAt(0).toUpperCase()}
                     </div>
                </div>
                <div className="section">
                    <h1>Indias Best</h1>
                    <div className="button-group">
                        <button className="cu" id="telugu" onClick={navigateTotelugu}>Tollywood<br />Hits</button>
                        <button className="cu"id="hindi" onClick={navigateTohindi}>Bollywood<br />Hits</button>
                    </div>
                </div>
                <div className="section">
                    <h1>Recommended Playlists</h1>
                    <div className="button-group">
                        <button className="cu" id="hinanna" onClick={navigateTohinanna}></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
