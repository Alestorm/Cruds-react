class AddBookDto {
  title: string;
  author: string;
  publicationYear: number;
  genre: string;
  language: string;
  isbn: string;
  publisher: string;

  constructor(
    title: string,
    author: string,
    publicationYear: number,
    genre: string,
    language: string,
    isbn: string,
    publisher: string
  ) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
    this.genre = genre;
    this.language = language;
    this.isbn = isbn;
    this.publisher = publisher;
  }
}
export default AddBookDto;
