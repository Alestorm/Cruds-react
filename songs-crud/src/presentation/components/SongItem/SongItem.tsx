import "./SongItem.css";
import Song from "../../../domain/entities/Song";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import NewSongForm from "../NewSongForm/NewSongForm";

interface props {
  song: Song;
}
const SongItem = ({ song }: props) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [refreshed, setRefreshed] = useState(false);

  const toggleEditModal = () => {
    setOpenEditModal(!openEditModal);
  };
  const handleRefresh = () => {
    setRefreshed(!refreshed);
  };
  useEffect(() => {}, []);

  return (
    <div className="song-item">
      <div className="btn-edit-song" onClick={toggleEditModal}>
        <i className="fas fa-ellipsis-vertical"></i>
      </div>
      <div className="image-container">
        <img src={song.image} />
      </div>

      <h3 className="song-title">{song.title}</h3>
      <div className="artist-container">
        <p className="song-album">{song.album}</p>
        <span className="separator">
          <i className="fas fa-circle"></i>
        </span>
        <p className="song-artist">{song.artist}</p>
      </div>
      {openEditModal && (
        <Modal toggleModal={toggleEditModal}>
          <NewSongForm
            handleRefresh={handleRefresh}
            toggleModal={toggleEditModal}
            song={song}
          />
        </Modal>
      )}
    </div>
  );
};

export default SongItem;
