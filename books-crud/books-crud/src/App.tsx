import {  useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./presentation/components/SearchBar/SearchBar";
import Book from "./domain/entities/Book";
import Books from "./presentation/components/Books/Books";
import BookService from "./application/BookService";
import Modal from "./presentation/components/Modal/Modal";
import AddBookForm from "./presentation/components/AddBookForm/AddBookForm";

const getBookList = (books: any) => {
  const bookList: Book[] = [];
  books.map((b: any) => {
    bookList.push(
      new Book(
        b.idBook,
        b.title,
        b.author,
        b.publicationYear,
        b.genre,
        b.language,
        b.isbn,
        b.publiser
      )
    );
  });
  return bookList;
};

function App() {
  const [searchText, setSearchText] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [books, setBooks] = useState<Book[]>([]);
  const [refreshed, setRefreshed] = useState(false);
  const [message, setMessage] = useState("");
  const [identifier,setIdentifier] = useState(0);

  const messageChange = (text: string) => {
    setMessage(text);
  };

  const getIdentifier =(idbook:number)=>{
    setIdentifier(idbook);
  }
  const searchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    getBooksByTitle(e.target.value);
  };

  const handleRefresh = () => {
    setRefreshed(!refreshed);
  };

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const getBooksByTitle = (title: string) => {
    BookService.getBooksByTitle(title).then((res) => {
      setBooks(getBookList(res.data));
    }).catch(error => console.log(error));
  };

  useEffect(() => {
    BookService.getBooks()
      .then((res) => {
        setBooks(getBookList(res.data));
      })
      .catch((error) => console.log(error));

    let timeout: ReturnType<typeof setTimeout> | null = null;
    if (message) {
      timeout = setTimeout(() => setMessage(""), 2000);
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [refreshed, message]);

  
  return (
    <>
      <main>
        <div className="header">
          <button className="btn-newbook" onClick={handleModal}>
            Add book
          </button>
          <SearchBar
            searchText={searchText}
            placeholder="Search for a book..."
            onChange={searchTextChange}
          />
        </div>
        {message !== "" ? (
          <div className="alert-success">{message}</div>
        ) : (
          <></>
        )}
        
        {refreshed?<h1>Loading...</h1> : <Books handleModal={handleModal} books={books} />}

      </main>
      {isOpenModal && (
        <Modal toggleModal={handleModal}>
          <AddBookForm
            messageChange={messageChange}
            handleRefreshed={handleRefresh}
            handleModal={handleModal}
            identifier={identifier}
          />
        </Modal>
      )}
    </>
  );
}

export default App;
