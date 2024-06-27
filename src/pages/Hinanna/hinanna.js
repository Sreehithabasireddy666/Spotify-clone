import React from "react";
import "./Hinanna.css";
import SongsDisplay from "../Songcard/Songdisplay";
import Navbar from "../../components/Navbar/Navbar";

const Hinanna = () => {
    
    const title = 'hi'; 
    return (
         
        <div className="container-hinanna">
            <Navbar />
            <div className="container-hinanna-sec1">
                <div className="sec1-hinanna">
                  <img className = "hinannaimg" src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hi-nanna-et00364503-1701678655.jpg" alt="Tollywood Hits" />
                </div>
                <h1>Hi nanna</h1>
            </div>
            <SongsDisplay title={title} />
        </div>
    );
}

export default Hinanna;