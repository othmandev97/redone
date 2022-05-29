import React, { useRef } from "react";

export const LibrarySong = ({
  playedAudio,
  song,
  currentSong,
  setCurrentSong,
  isPlaying,
  setSong,
  id,
  songs,
}) => {
  const changeSongHandler = (e) => {
    setCurrentSong(song);
    if (isPlaying) {
      const playAudio = playedAudio.current.play();
      //? promise
      if (playAudio !== undefined) {
        playAudio.then(() => {
          playedAudio.current.play();
        });
      }
    }


  };
  return (
    <div
      onClick={changeSongHandler}
      className={`song_item ${song.active ? "played-song" : ""}`}
    >
      <img
        className="song_item_image"
        src={
          song.cover
            ? song.cover
            : process.env.PUBLIC_URL + "default_song_cover.png"
        }
        alt=""
      />
      <h4 className="song_item_title">{song.name}</h4>
    </div>
  );
};