import React, { FormEvent, useEffect, useState } from "react";
import "./AddBookForm.css";
import FormInput from "../FormInput/FormInput";
import AddBookDto from "../../../application/dtos/AddBookDto";
import BookService from "../../../application/BookService";
import Book from "../../../domain/entities/Book";
interface props {
  handleRefreshed: () => void;
  messageChange: (text: string) => void;
  handleModal: () => void;
  identifier: number;
}
const AddBookForm = ({
  messageChange,
  handleRefreshed,
  handleModal,
  identifier = 0,
}: props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");
  const [isbn, setIsbn] = useState("");
  const [publisher, setPublisher] = useState("");
  const [idBook, setIdBook] = useState(0);

  useEffect(() => {
    console.log(identifier)
    if(identifier> 0){
      getUser(identifier);
    }
  }, []);
  const getUser = (identifier: number) => {
    BookService.getBook(identifier).then((res) => {
      const {
        idBook,
        title,
        author,
        publicationYear,
        genre,
        language,
        isbn,
        publisher,
      } = res.data;
      console.log(res.data)
      setIdBook(idBook);
      setTitle(title);
      setAuthor(author);
      setPublicationYear(publicationYear.toString());
      setGenre(genre);
      setLanguage(language);
      setIsbn(isbn);
      setPublisher(publisher);
    })
    .catch(error => console.log(error));
  };

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleAuthorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value);
  };

  const handlePublicationYearChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPublicationYear(event.target.value);
  };

  const handleGenreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGenre(event.target.value);
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(event.target.value);
  };

  const handleIsbnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsbn(event.target.value);
  };

  const handlePublisherChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPublisher(event.target.value);
  };

  const onNewBook = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newBook: AddBookDto = new AddBookDto(
      title,
      author,
      parseInt(publicationYear, 10),
      genre,
      language,
      isbn,
      publisher
    );
    BookService.saveBook(newBook).then((res) => {
      handleRefreshed();
      handleModal();
      messageChange("New book added");
    });
  };
  return (
    <div className="newbook-form">
      <h1 className="newbook-title">New Book</h1>
      <form onSubmit={onNewBook}>
        <FormInput
          value={title}
          label="Title"
          placeholder="Book title"
          type="text"
          onChange={handleTitleChange}
        />
        <FormInput
          value={author}
          label="Author"
          placeholder="Book author"
          type="text"
          onChange={handleAuthorChange}
        />
        <FormInput
          value={publicationYear}
          label="Publication year"
          placeholder="Book year"
          type="text"
          onChange={handlePublicationYearChange}
        />
        <FormInput
          value={genre}
          label="Genre"
          placeholder="Book genre"
          type="text"
          onChange={handleGenreChange}
        />
        <FormInput
          value={language}
          label="Language"
          placeholder="Book language"
          type="text"
          onChange={handleLanguageChange}
        />
        <FormInput
          value={isbn}
          label="ISBN"
          placeholder="Book ISBN"
          type="text"
          onChange={handleIsbnChange}
        />
        <FormInput
          value={publisher}
          label="Publisher"
          placeholder="Book publiser"
          type="text"
          onChange={handlePublisherChange}
        />
        <button type="submit" className="btn-submit-book">
          Save book
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
