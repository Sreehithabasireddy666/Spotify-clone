import React, { useContext} from "react";
import "./Sidebar.css";
import { FaHome,FaSignInAlt,FaSearch} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Info } from "../../Helper/helper";

const Sidebar = () => {
    const {allInf,setAllInf} = useContext(Info);
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <img src="https://th.bing.com/th/id/R.c2a12cba057711495849088844f950cc?rik=982VbYW4HE09lQ&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f08%2fSpotify-Logo.png&ehk=Gcl8lyv0FdI4gDVyKLmVCVfNf8yc1xDmAvEDyPzt8Bk%3d&risl=&pid=ImgRaw&r=0" alt="Logo" className="logo" />
                <h1 className="sidebar-title">Spotify</h1>
            </div>
            <div className="sidebar-icons">
                <Link to="/" className="link-no-underline">
                    <div className="home-icon"><FaHome /><span className="hom">Home</span></div>
                </Link>
                <Link to="/search" className="link-no-underline">
                    <div className="home-icon"><FaSearch /><span className="hom">Search</span></div>
                </Link>
                
                <div className="home-icon"><FaSignInAlt /><span className="hom"> {allInf.status ? <span><Link to= "/logout" className="link-no-underline">Logout</Link></span>
                : <span><Link to= "/login" className="link-no-underline">Login</Link></span>}</span></div>  
            </div>
            <div className="log-inf">
                {allInf.status ? <div><span className="welcome-title">Welcome {(allInf.username)}!!</span><br />Start listening to your favourite music</div> : <h2>Login for better experience</h2>}
            </div>
            <div className="bottom">
                <p>search to listen your Favourite Music</p>
            </div>
        </div>
    );
}

export default Sidebar;
