import React from "react";
import "./Books.css";
import Book from "../../../domain/entities/Book";
import BookItem from "../BookItem/BookItem";
interface props {
  books: Book[];
  handleModal:()=>void;
  getIdentifier:(id:number)=>void;
}
const Books = ({ books,handleModal,getIdentifier }: props) => {
  return (
    <div className="books-container">
      {books.map((b) => (
        <BookItem handleModal={handleModal}  key={b.idBook} book={b} />
      ))}
    </div>
  );
};

export default Books;
