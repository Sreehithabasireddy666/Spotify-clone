
import React from "react";
import "./telugu.css";
import SongsDisplay from "../Songcard/Songdisplay";
import details from "../Songcard/details";
import Navbar from "../../components/Navbar/Navbar";

const Telugu = () => {
    const title = 'tel'; 

    return (
        <div className="container-telugu">
            <Navbar />
            <div className="container-telugu-sec1">
                <div className="sec1-tel">
                  <img className="teluguimg" src="https://th.bing.com/th/id/OIP.E5PL4eBgPIg7OMkU7_qyzwAAAA?rs=1&pid=ImgDetMain" alt="Tollywood Hits" />
                </div>
                <h1>Tollywood hits</h1>
            </div>
            <SongsDisplay title={title} /> {/* Pass titleFilter as prop */}
        </div>
    );
}

export default Telugu;
