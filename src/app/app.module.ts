import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import {BookService} from "./book.service";
import { QuotePipe } from './quote.pipe';
import {CurrencyPipe} from "@angular/common";
import { BookRegistrationComponent } from './book-registration/book-registration.component';
import { StyleDirective } from './style.directive';
import { JavaScriptClassDirective } from './java-script-class.directive';
import { BooksComponent } from './books/books.component';
import { SampleComponent } from './sample/sample.component';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    QuotePipe,
    BookRegistrationComponent,
    StyleDirective,
    JavaScriptClassDirective,
    BooksComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule
  ],
  providers: [BookService, CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
