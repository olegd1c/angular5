import {Component, Input} from '@angular/core';
import {Book} from './book';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input()
  book: Book;

  charNumber: number;

  constructor(private currencyPipe: CurrencyPipe) {
  }

  formatPrice(price: number): string {
    return this.currencyPipe.transform(price);
  }

  displayNumber(value: any): void {
    const text = value.toString();
    this.charNumber = text.length;
  }
}
