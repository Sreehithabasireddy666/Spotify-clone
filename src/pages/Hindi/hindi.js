import React from "react";
import "./hindi.css";
import SongsDisplay from "../Songcard/Songdisplay";
import details from "../Songcard/details";
import Hinanna from "../Hinanna/hinanna";
import Navbar from "../../components/Navbar/Navbar";
   
const Hindi = () => {
    const title = 'hin'; 

    return (
        <div className="container-hindi">
            <Navbar />
            <div className="container-hindi-sec1">
                <div className="sec1">
                  <img className="hindiimg" src="https://th.bing.com/th/id/OIP.5cFmzR47wiXOpZfJE02MXwHaEg?rs=1&pid=ImgDetMain" alt="Tollywood Hits" />
                </div>
                <h1>Bollywood hits</h1>
            </div>
            <SongsDisplay title={title} /> {/* Pass titleFilter as prop */}
        </div>
    );
}

export default Hindi;