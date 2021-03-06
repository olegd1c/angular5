import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {BookService} from './book/book.service';
import {CurrencyPipe} from '@angular/common';
import {BookRegistrationComponent} from './book/book-registration/book-registration.component';
import {BooksComponent} from './book/books/books.component';
import {SampleComponent} from './sample/sample.component';
import {SharedModule} from './shared/shared.module';
import {StatusComponent} from './status/status.component';
import {SubjectEventBusService} from './bus/subject-event-bus.service';
import {CounterComponent} from './counter/counter.component';
import {BestBuyComponent} from './banner/best-buy/best-buy.component';
import {DiscountsComponent} from './banner/discounts/discounts.component';
import {BannerService} from './banner/banner.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDialogModule, MatInputModule} from '@angular/material';
import {BannerComponent} from './banner/banner/banner.component';
import {BookComponent} from './book/book/book.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {BookModule} from './book/book.module';
import {NewsModule} from './news/news.module';
import {environment} from '../environments/environment';
import {ServiceWorkerModule} from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    StatusComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpModule,
    SharedModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES),
    BookModule,
    NewsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [CurrencyPipe, SubjectEventBusService],
  bootstrap: [AppComponent],
  entryComponents: [DiscountsComponent, BestBuyComponent,
    BookRegistrationComponent]
})
export class AppModule {
}
