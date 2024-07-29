import axios from "axios";
import AddBookDto from "./dtos/AddBookDto";

class BookService {
  private BASE_URL: string = "http://localhost:8080/api";
  private ENDPOINT: string = "/books";

  getBooks() {
    const url = this.BASE_URL + this.ENDPOINT;
    return axios.get(url);
  }
  saveBook(newBook: AddBookDto) {
    const url = this.BASE_URL + this.ENDPOINT;
    return axios.post(url, newBook);
  }
  getBooksByTitle(title: string) {
    const url = this.BASE_URL + this.ENDPOINT+"/search";
    return axios.get(url, { params: { title } });
  }
  getBook(idBook:number){
    const url = this.BASE_URL + this.ENDPOINT+"/"+idBook;
    return axios.get(url);
  }
}
export default new BookService();
