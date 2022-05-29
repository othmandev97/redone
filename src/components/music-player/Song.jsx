import React from "react";

export const Song = ({ currentSong }) => {
  return (
    <div className="song">
      <div className="song_image">
        <img
          src={
            currentSong.cover
              ? currentSong.cover
              : process.env.PUBLIC_URL + "default_song_cover.png"
          }
          alt=""
        />
      </div>
      <div className="song_description">
        <p className="song_description--title">{currentSong.name}</p>
        <p className="song_description--artistName">{currentSong.nameArtists}</p>
      </div>
    </div>
  );
};