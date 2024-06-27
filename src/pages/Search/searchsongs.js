import React, { useState } from "react";
import "./searchsongs.css";
import Navbar from "../../components/Navbar/Navbar";
import Searchcard from "../Songcard/searchcard";
import SongsDisplay from "../Songcard/Songdisplay";
import details from "../Songcard/details";
import { FaSearch } from "react-icons/fa";
const Searchpage = () => {
    const [query, setQuery] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const handleSearch = () => {
        if (query) {
            setSearchResult(query); 
        }
    };
    function countSongsByName(arr, query) {
        return arr.reduce((count, obj) => {
            if (obj.songName === query) {
                return count + 1; 
            } else {
                return count; 
            }
        }, 0); // Start with an initial count of 0
    }
    var songCount = countSongsByName(details, query);

    return (
        <div className="searchpage">
            <Navbar />
            <div className="search-bar-grp">
                <input
                className="searchbar"
                    type="text"
                    placeholder="Enter your songname..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={handleSearch} className="search-btn"><FaSearch /></button>
            </div>
            
             {query ? '' : <SongsDisplay title='hi'/>}
            {searchResult ? (songCount ? <Searchcard songName={searchResult} /> : (query && <p>Noo</p>)) :<SongsDisplay title='hin'/>} {/* Conditionally render Searchcard */}
        </div>
    );
};

export default Searchpage;
