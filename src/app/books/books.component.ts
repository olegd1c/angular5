import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Book} from '../book/book';
import {BookService} from '../book.service';
import 'rxjs/add/observable/range';
import 'rxjs/add/operator/map';
import {SubjectEventBusService} from '../bus/subject-event-bus.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/repeat';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  randomValue: number;

  bookNumber: number;

  books: Array<Book>;

  constructor(private bookService: BookService,
              private eventBus: SubjectEventBusService,
              private cdr: ChangeDetectorRef) {
    this.refreshBooks();
    Observable.of(1).map(x => Math.random())
      .delay(5).repeat(100).subscribe(res => this.randomValue = res);
  }

  refreshBooks(): void {
    this.eventBus.sendEvent({message: 'Books loading ...', source: this});
    this.bookService.getBooks().subscribe(res => this.books = res);
    this.eventBus.sendEvent({message: 'Books loaded', source: this});

  }
  //
  // ngOnInit(): void {
  //   this.cdr.detach();
  //   setTimeout(() => {
  //     this.cdr.reattach();
  //     this.cdr.detectChanges();
  //      this.cdr.detach();
  //   }, 2000);
  // }
}
