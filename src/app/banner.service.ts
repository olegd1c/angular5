import {Injectable, Type} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BestBuyComponent} from './best-buy/best-buy.component';
import {DiscountsComponent} from './discounts/discounts.component';

@Injectable()
export class BannerService {

  private ads: Type<any>[] = [BestBuyComponent, DiscountsComponent]

  constructor() {
  }

  getBanner(): Observable<Type<any>> {
    return Observable.of(1).map(i => Math.floor(Math.random() * 2)).map(i => this.ads[i])
      .delay(1500).repeat(100);
  }

}
