import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BannerComponent} from './banner/banner.component';
import {BestBuyComponent} from './best-buy/best-buy.component';
import {DiscountsComponent} from './discounts/discounts.component';
import {FormsModule} from '@angular/forms';
import {BannerService} from './banner.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [BannerComponent, BestBuyComponent, DiscountsComponent],
  exports: [BannerComponent],
  providers: [BannerService]
})
export class BannerModule {
}
