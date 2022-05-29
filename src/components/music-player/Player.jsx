import React, { useRef, useState, useEffect } from "react";
// icons
import { IoIosPlay } from "react-icons/io";
import { IoMdSkipForward } from "react-icons/io";
import { IoMdSkipBackward } from "react-icons/io";
import { IoIosPause } from "react-icons/io";




export const Player = ({
  playedAudio,
  currentSong,
  isPlaying,
  setIsPlaying,
  songInfo,
  setsongInfo,
  songs,
  setCurrentSong,
  setSong,
  changeVolume,
}) => {
  // const playedAudio = useRef(null);
  const IconPlayPause = useRef(null);
  const aud = useRef(null);
  const [visibleVolume, setvisibleVolume] = useState("");

  useEffect(() => {
    window.addEventListener("keydown", (event) => {
      // playSongHandler();
      //! make the song play auto when it ends
    });
    // aud.current.onended = () => {
    //   alert("ended");
    // };

    // console.log(currentSong);
    // if (isPlaying) {
    //   if (songInfo.duration == songInfo.currentTime) {
    //     console.log("salat");
    //   }
    // }

    // if (songInfo.duration === songInfo.currentTime) {
    //   console.log("salat");
    // }

    //add active state
    const newSong = songs.map((song) => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    setSong(newSong);
  }, [currentSong]);

  const playSongHandler = () => {
    if (isPlaying) {
      playedAudio.current.pause();
      setIsPlaying(false);
    } else {
      playedAudio.current.play();
      setIsPlaying(true);
    }
  };

  const dragHandler = (e) => {
    playedAudio.current.currentTime = e.target.value;
    setsongInfo({ ...songInfo, currentTime: e.target.value });
  };

  const formatTime = (time) => {
    return (
      // Math.floor(time / 60) + ":" + (time < 10 ? "0" : "") + Math.floor(time % 60)
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).substr(-2)
    );
  };

  const skipHandler = (type) => {
    let indexOfSong = songs.findIndex((song) => song.id === currentSong.id);

    if (type === "next") {
      setCurrentSong(songs[(indexOfSong + 1) % songs.length]);
    } else {
      if (indexOfSong == 1) {
        setCurrentSong(songs[0]);
      }
      if (indexOfSong > 1) {
        setCurrentSong(songs[(indexOfSong - 1) % (songs.length - 1)]);
      }
    }

    if (isPlaying) {
      const playAudio = playedAudio.current.play();
      //? promise
      if (playAudio !== undefined) {
        playAudio.then(() => {
          playedAudio.current.play();
        });
      }

      // if (songInfo.duration === songInfo.currentTime) {
      //   skipHandler("skip");
      // }
    }
  };

  const showVolumeHandler = () => {
    if (visibleVolume === "") {
      setvisibleVolume("make_volume_visible");
    } else {
      setvisibleVolume("");
    }
  };

  return (
    <div className="player">
      <div className="player_control">
        <div className="player_control_back">
          {/* <FontAwesomeIcon
            onClick={() => skipHandler("back")}
            icon={faChevronLeft}
            size="2x"
          /> */}
          <IoMdSkipBackward onClick={() => skipHandler("back")}/>

        </div>
        <div className="player_control_play" ref={IconPlayPause}>
          {/* <FontAwesomeIcon
            onClick={playSongHandler}
            icon={isPlaying ? faPause : faPlay}
            size="2x"
          /> */}
          {
              isPlaying ? ( <IoIosPause onClick={playSongHandler}/> ) : (   <IoIosPlay onClick={playSongHandler}/> )
          }
        </div>
        <div className="player_control_next">
          {/* <FontAwesomeIcon
            onClick={() => skipHandler("next")}
            icon={faChevronRight}
            size="2x"
          /> */}
          <IoMdSkipForward  onClick={() => skipHandler("next")}/>

        </div>
      </div>
      <div className="player_info">
        <label htmlFor="range"></label>
        <input
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currentTime}
          type="range"
          onChange={dragHandler}
          name="range"
          id="range"
          className="inputSong"
          ref={aud}
        />
        <div className="player_info--numbertracker">
            <p>{formatTime(songInfo.currentTime)}</p>
            <div className="player_info--numbertracker--seperator"> / </div>
            <p>{formatTime(songInfo.duration)}</p>
        </div>
      </div>
    </div>
  );
};