import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SortPipe} from './sort.pipe';
import {QuotePipe} from './quote.pipe';
import {StyleDirective} from './style.directive';
import {JavaScriptClassDirective} from './java-script-class.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SortPipe,
    QuotePipe,
    StyleDirective,
    JavaScriptClassDirective],
  exports: [SortPipe]
})
export class SharedModule {
}
