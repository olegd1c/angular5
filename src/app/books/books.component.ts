import {Component} from '@angular/core';
import {Book} from '../book/book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  bookNumber: number;

  books: Array<Book>;

  constructor(private bookService: BookService) {
    this.refreshBooks();
  }

  refreshBooks(): void {
    this.books = this.bookService.getBooks();
  }
}
