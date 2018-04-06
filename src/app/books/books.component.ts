import {Component} from '@angular/core';
import {Book} from '../book/book';
import {BookService} from '../book.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/map';
import {SubjectEventBusService} from '../bus/subject-event-bus.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  bookNumber: number;

  books: Array<Book>;

  constructor(private bookService: BookService,
              private eventBus: SubjectEventBusService) {
    this.refreshBooks();
  }

  refreshBooks(): void {
    this.eventBus.sendEvent({message: 'Books loading ...', source: this});
    this.books = this.bookService.getBooks();
    this.eventBus.sendEvent({message: 'Books loaded', source: this});

  }
}
