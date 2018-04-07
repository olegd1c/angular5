import {Component, Input, OnInit} from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {Book} from '../book';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  @Input()
  book: Book;

  charNumber: number;

  constructor(private currencyPipe: CurrencyPipe,
              private route: ActivatedRoute) {
  }

  formatPrice(price: number): string {
    return this.currencyPipe.transform(price);
  }

  displayNumber(value: any): void {
    const text = value.toString();
    this.charNumber = text.length;
  }

  ngOnInit(): void {
    console.log('Language is ' + this.route.snapshot.params['lang']);
  }
}
