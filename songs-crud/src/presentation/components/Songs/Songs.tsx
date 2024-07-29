import React from "react";
import "./Songs.css";
import Song from "../../../domain/entities/Song";
import SongItem from "../SongItem/SongItem";

interface props {
  songs: Song[];
}

const Songs = ({ songs }: props) => {
  return (
    <div className="song-list">
      {songs.map((s) => (
        <SongItem key={s.idSong} song={s}/>
      ))}
    </div>
  );
};

export default Songs;
