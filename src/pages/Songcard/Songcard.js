import React, { useRef, useState, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import './Songcard.css';

const SongCard = ({ songLogo, songName, author, audioSrc }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    // Toggle play/pause functionality
    const togglePlayPause = () => {
        const audio = audioRef.current;

        if (!audio) return;

        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Handle time update of the audio
    const handleTimeUpdate = () => {
        const audio = audioRef.current;
        if (audio) {
            setCurrentTime(audio.currentTime);
            setDuration(audio.duration);
        }
    };

    // Handle seeking in the audio track
    const handleSeek = (e) => {
        const audio = audioRef.current;
        if (audio) {
            const seekTime = e.target.value;
            audio.currentTime = seekTime;
            setCurrentTime(seekTime);
        }
    };
    const handleEnd = () => {
        setIsPlaying(false);
        setCurrentTime(0); 
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.addEventListener('timeupdate', handleTimeUpdate);
            audio.addEventListener('ended', handleEnd);
        }
        return () => {
            if (audio) {
                audio.removeEventListener('timeupdate', handleTimeUpdate);
                audio.removeEventListener('ended', handleEnd);
            }
        };
    }, []);

    return (
        <div className="song-card">
            <div className="song-info">
                <img src={songLogo} alt="Song Logo" className="song-logo" />
                <div className="song-details">
                    <div className="song-name">{songName}</div>
                    <div className="song-author">{author}</div>
                </div>
            </div>
            <button className="play-button" onClick={togglePlayPause}>
                {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <input
                type="range"
                className="range-bar"
                min={0}
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                step={0.1}
            />
            <audio ref={audioRef} src={audioSrc} />
        </div>
    );
};

export default SongCard;
