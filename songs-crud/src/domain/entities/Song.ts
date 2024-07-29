class Song {
  idSong: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  genre: string;
  year: number;
  favorite: boolean;
  image:string;

  constructor(
    idSong: number,
    title: string,
    artist: string,
    album: string,
    duration: string,
    genre: string,
    year: number,
    favorite: boolean,
    image:string
  ) {
    this.idSong = idSong;
    this.title = title;
    this.artist = artist;
    this.album = album;
    this.duration = duration;
    this.genre = genre;
    this.year = year;
    this.favorite = favorite;
    this.image = image;
  }
}
export default Song;
