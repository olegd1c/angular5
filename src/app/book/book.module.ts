import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BookComponent} from './book/book.component';
import {SharedModule} from '../shared/shared.module';
import {BooksComponent} from './books/books.component';
import {BookRegistrationComponent} from './book-registration/book-registration.component';
import {BannerModule} from '../banner/banner.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatDialogModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BannerModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
  ],
  declarations: [BookComponent, BooksComponent, BookRegistrationComponent],
  exports: [BooksComponent]
})
export class BookModule {
}
