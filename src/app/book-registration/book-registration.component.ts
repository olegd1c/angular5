import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Book} from '../book/book';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-registration',
  templateUrl: './book-registration.component.html',
  styleUrls: ['./book-registration.component.css']
})
export class BookRegistrationComponent implements OnInit {
  bookForm: FormGroup;

  constructor(formBuilder: FormBuilder, private bookService: BookService) {
    this.bookForm = formBuilder.group(
      {
        title: formBuilder.control('', [Validators.required,
          Validators.minLength(4)]),
        author: formBuilder.control('', [Validators.required,
          BookValidator.getAuthorValidator]),
        year: formBuilder.control('', []),
        pages: formBuilder.control('', []),
        description: formBuilder.control('', [])
      }
    );
  }

  isInvalid(control: string): boolean {
    return this.bookForm.get(control).touched &&
      !this.bookForm.get(control).valid;
  }

  createBook(): void {

    const book: Book = this.bookForm.value;

    this.bookService.saveBook(new Book(
      book.title, book.author, book.year, book.description, book.pages, 0));
  }

  ngOnInit() {
  }

}

export class BookValidator {

  static getAuthorValidator() {
    return function authorBookValidator(c: FormControl): { [s: string]: boolean } {
      const tokens: Array<string> = c.value.split(' ');
      if (tokens.length < 2) {
        return {invalidWordNumber: true};
      }
    };
  }
}
