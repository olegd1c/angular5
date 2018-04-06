import {Component} from '@angular/core';
import {Book} from '../book/book';
import {BookService} from '../book.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  bookNumber: number;

  books: Array<Book>;

  constructor(private bookService: BookService) {
    Observable.range(0, 25).map(x => String.fromCharCode(x + 'a'.charCodeAt(0)))
      .subscribe(x => console.log(x));

    this.refreshBooks();
  }

  refreshBooks(): void {
    this.books = this.bookService.getBooks();
  }
}
