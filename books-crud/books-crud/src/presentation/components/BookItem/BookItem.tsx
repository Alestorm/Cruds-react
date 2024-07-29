import "./BookItem.css";
import Book from "../../../domain/entities/Book";
interface props {
  book: Book;
  handleModal: () => void;
}
const BookItem = ({ book, handleModal }: props) => {
  return (
    <div className="book-item">
      <div className="book-header">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">by {book.author}</p>
      </div>
      <div className="book-secondary">
        <p className="book-language">{book.language}</p>
        <p className="book-year">{book.publicationYear}</p>
      </div>
      <div className="book-actions">
        <button className="info-icon" onClick={handleModal}>
          <i className="fas fa-circle-info"></i>
        </button>
        <button className="delete-icon">
          <i className="fas fa-trash-can"></i>
        </button>
      </div>
    </div>
  );
};

export default BookItem;
