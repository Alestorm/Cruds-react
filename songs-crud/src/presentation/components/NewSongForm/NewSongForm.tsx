import React, { FormEvent, useEffect } from "react";
import { AddSongDto, useAddSongDto } from "../../../domain/entities/AddSongDto";
import FormInput from "../FormInput/FormInput";
import "./NewSongForm.css";
import SongService from "../../../application/services/SongService";
import Response from "../../../domain/entities/Response";
import Song from "../../../domain/entities/Song";

interface props {
  handleRefresh: () => void;
  toggleModal: () => void;
  song?: Song;
}

const NewSongForm = ({ handleRefresh, toggleModal, song }: props) => {
  
  const {
    title,
    artist,
    album,
    duration,
    genre,
    year,
    image,
    handleTitleChange,
    handleArtistChange,
    handleAlbumChange,
    handleDurationChange,
    handleGenreChange,
    handleYearChange,
    handleImageChange,
  } = useAddSongDto();

  
  const onAddSong = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newSong: AddSongDto = new AddSongDto(
      title,
      artist,
      album,
      parseInt(duration),
      genre,
      parseInt(year),
      image
    );
    SongService.saveSong(newSong)
      .then((res) => {
        const response: Response<Song> = res.data;
        handleRefresh();
        toggleModal();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="newsong-form">
      <h1>New song</h1>
      <form onSubmit={onAddSong}>
        <FormInput
          value={title}
          placeholder="Title..."
          onChange={handleTitleChange}
        />
        <FormInput
          value={artist}
          placeholder="Artist..."
          onChange={handleArtistChange}
        />
        <FormInput
          value={album}
          placeholder="Album..."
          onChange={handleAlbumChange}
        />
        <FormInput
          value={duration + ""}
          placeholder="Duration..."
          onChange={handleDurationChange}
        />
        <FormInput
          value={genre}
          placeholder="Genre..."
          onChange={handleGenreChange}
        />
        <FormInput
          value={year + ""}
          placeholder="Year..."
          onChange={handleYearChange}
        />
        <FormInput
          value={image}
          placeholder="Image URL..."
          onChange={handleImageChange}
        />
        <button className="btn-submit-song">Save song</button>
      </form>
    </div>
  );
};

export default NewSongForm;
