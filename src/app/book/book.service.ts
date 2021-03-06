import {Injectable} from '@angular/core';
import {Book} from './book';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/repeat';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class BookService {

  books: Array<Book>;

  constructor(private http: HttpClient) {
    this.books = new Array<Book>();
    this.addBook(new Book('JavaScript: The Good Parts', 'Douglas Crockford', 2008,
      'This authoritative book scrapes away these bad features to reveal a subset of JavaScript that\'s more reliable, readable, and maintainable', 172, 150.344));
    this.addBook(new Book('Mastering TypeScript', 'Nathan Rozentals', 2015, 'Build enterprise-ready, industrial strength web applications using TypeScript and leading JavaScript frameworks', 364, 20));
    this.addBook(new Book('Switching to Angular 2', 'Minko Gechev', 2016, 'Start using TypeScript to supercharge your Angular 2 applications', 254, 10));
  }

  getBooks(): Observable<Array<Book>> {
    // const headers: HttpHeaders = new HttpHeaders()
    //   .set('my_header', '1')
    //   .set('new_header', '2');
    return this.http.get<Array<Book>>('/books.json');
  }

  shuffleArray(array: Array<any>) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  private addBook(book: Book): void {
    this.books.push(book);
  }

  saveBook(book: Book): void {
    this.addBook(book);
  }

}
