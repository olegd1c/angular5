import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { StatusComponent } from './status/status.component';
import {SubjectEventBusService} from './bus/subject-event-bus.service';
import { CounterComponent } from './counter/counter.component';
import { BannerComponent } from './banner/banner.component';
import { BestBuyComponent } from './best-buy/best-buy.component';
import { DiscountsComponent } from './discounts/discounts.component';
import {BannerService} from './banner.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    QuotePipe,
    BookRegistrationComponent,
    StyleDirective,
    JavaScriptClassDirective,
    BooksComponent,
    SampleComponent,
    StatusComponent,
    CounterComponent,
    BannerComponent,
    BestBuyComponent,
    DiscountsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [BookService, CurrencyPipe, SubjectEventBusService, BannerService],
  bootstrap: [AppComponent],
  entryComponents: [DiscountsComponent, BestBuyComponent]
})
export class AppModule { }
