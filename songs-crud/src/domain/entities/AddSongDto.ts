import { useState } from 'react';

class AddSongDto {
  title: string;
  artist: string;
  album: string;
  duration: number;
  genre: string;
  year: number;
  image: string;

  constructor(
    title: string,
    artist: string,
    album: string,
    duration: number,
    genre: string,
    year: number,
    image: string
  ) {
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.duration = duration;
    this.genre = genre;
    this.year = year;
    this.image = image;
  }
}

const useAddSongDto = () => {
  const [title, setTitle] = useState<string>('');
  const [artist, setArtist] = useState<string>('');
  const [album, setAlbum] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [genre, setGenre] = useState<string>('');
  const [year, setYear] = useState<string>('');
  const [image, setImage] = useState<string>('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleArtistChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArtist(event.target.value);
  };

  const handleAlbumChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAlbum(event.target.value);
  };

  const handleDurationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDuration(event.target.value);
  };

  const handleGenreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenre(event.target.value);
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYear(event.target.value);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImage(event.target.value);
  };

  return {
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
    handleImageChange
  };
};

export { AddSongDto, useAddSongDto };
