import {Route} from '@angular/router';
import {BooksComponent} from './book/books/books.component';
import {NewsComponent} from './news/news/news.component';

export const ROUTES: Route[] = [
  {path: ':lang/books', component: BooksComponent},
  {path: 'books', component: BooksComponent},
  {path: 'news', component: NewsComponent}];


