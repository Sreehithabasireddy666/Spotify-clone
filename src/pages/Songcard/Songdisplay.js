import React, { useState } from 'react';
import SongCard from './Songcard'; 
import details from './details';
const SongsDisplay = ({ title }) => {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPause = (audioRef, isPlayingState) => {
        if (isPlayingState && currentSong && currentSong !== audioRef) {
            currentSong.pause();
        }
        setCurrentSong(audioRef);
        setIsPlaying(isPlayingState);
    };

    const filteredSongs = details.filter(song => song.title === title);

    return (
        <div className="songs-display">
            {filteredSongs.map((song) => (
                <SongCard
                    key={song.id}
                    songLogo={song.songLogo}
                    songName={song.songName}
                    author={song.author}
                    audioSrc={song.audioSrc}
                    onPlayPause={handlePlayPause}
                />
            ))}
        </div>
    );
};

export default SongsDisplay;

