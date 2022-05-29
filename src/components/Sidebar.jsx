import React, { useState, useRef } from "react";
import { Song } from "./music-player/Song";
import { Player } from "./music-player/Player";
import { Library } from "./music-player/Library";
// icons
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { IoMdArrowDown } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { IoIosHeadset } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";


// songs data
import data from "../data/datasongs";


export default function Sidebar({openSidebar, setOpenSidebar, OpenCloseSidebar}) {
  //ref
  const playedAudio = useRef(null);
  //state
  const [songs, setSong] = useState(data);
  const [navbar, setNavbar] = useState("closed-sidar");
  const [nextSong, setNextSong] = useState(0);
  const [backSong, setBackSong] = useState(0);
  const [currentSong, setCurrentSong] = useState(songs[nextSong]);
  const [isPlaying, setIsPlaying] = useState(false);


  const [songInfo, setsongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const showSideBarHandler = () => {
    if (navbar == "closed-sidar") {
      setNavbar("");
    } else {
      setNavbar("closed-sidar");
    }
  };

  const onTimeUpdateHandler = (e) => {
    setsongInfo({
      currentTime: e.target.currentTime,
      duration: e.target.duration,
    });
  };

  const changeVolume = (e) => {
    playedAudio.current.volume = e.target.value / 100;
  };


  return (
    <>
      <div className={`sidebar__wrapper ${openSidebar && 'opened'}`}>
        <label className="close" onClick={OpenCloseSidebar}><IoIosCloseCircleOutline/></label>
        <div className="sidebar__wrapper--content">
                <Song currentSong={currentSong} />
                <Player
                  setSong={setSong}
                  songs={songs}
                  songInfo={songInfo}
                  setsongInfo={setsongInfo}
                  playedAudio={playedAudio}
                  isPlaying={isPlaying}
                  setIsPlaying={setIsPlaying}
                  currentSong={currentSong}
                  setCurrentSong={setCurrentSong}
                  changeVolume={changeVolume}
                />
                <audio
                  onTimeUpdate={onTimeUpdateHandler}
                  onLoadedMetadata={onTimeUpdateHandler}
                  ref={playedAudio}
                  src={currentSong.audio}
                ></audio>



               <button
                  onClick={showSideBarHandler}
                  className="nav-btn"
                  aria-label="navbar-dots"
                >
                  <svg
                    height="15"
                    viewBox="0 0 184 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="25" cy="25" r="25" fill="white" />
                    <circle cx="159" cy="25" r="25" fill="white" />
                    <circle cx="92" cy="25" r="25" fill="white" />
                  </svg>
                </button>
                <Library
                  playedAudio={playedAudio}
                  currentSong={currentSong}
                  setCurrentSong={setCurrentSong}
                  navbar={navbar}
                  songs={songs}
                  isPlaying={isPlaying}
                  setSong={setSong}
                />
         



          <div className="sidebar__wrapper--content--numbers">
            <div className="sidebar__wrapper--content--numbers--item">US: +1 (888) 256-8312</div>
            <div className="sidebar__wrapper--content--numbers--item">EU: 1-888-452-1505</div>
            <div className="sidebar__wrapper--content--numbers--item">DUBAI: +971 12-345-6789</div>
          </div>
      
        </div>
      </div>
      <label className={`overlay-label ${openSidebar && 'opened'}`} onClick={OpenCloseSidebar}>
        <div className="overlay fade-in"></div>
      </label>
    </>
  );
}
