import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./presentation/components/SearchBar/SearchBar";
import Song from "./domain/entities/Song";
import SongService from "./application/services/SongService";
import Songs from "./presentation/components/Songs/Songs";
import Response from "./domain/entities/Response";
import Modal from "./presentation/components/Modal/Modal";
import NewSongForm from "./presentation/components/NewSongForm/NewSongForm";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [songs, setSongs] = useState<Song[]>([]);
  const [newSongDialog, setNewSongDialog] = useState(false);
  const [refreshed, setRefreshed] = useState(false);

  const searchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleRefresh = () => {
    setRefreshed(!refreshed);
  };
  const toggleModal = () => {
    setNewSongDialog(!newSongDialog);
  };

  useEffect(() => {
    const getSongs = () => {
      let songs: Song[] = [];
      SongService.getSongs()
        .then((res) => {
          const response: Response<Song[]> = res.data;
          songs = response.data;
          setSongs(songs);
        })
        .catch((error) => console.log(error));
      return songs;
    };
    getSongs();
  }, [refreshed]);

  return (
    <main>
      <div className="header">
        <button className="btn-newsong" onClick={toggleModal}>
          NEW SONG
        </button>

        <SearchBar
          value={searchInput}
          placeholder="Search songs..."
          onChange={searchInputChange}
        />
      </div>
      <Songs songs={songs} />
      {newSongDialog && (
        <Modal toggleModal={toggleModal}>
          <NewSongForm
            handleRefresh={handleRefresh}
            toggleModal={toggleModal}
          />
        </Modal>
      )}
    </main>
  );
}

export default App;
