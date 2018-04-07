import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {BannerService} from '../banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @ViewChild('parent', {read: ViewContainerRef})
  parent: ViewContainerRef;

  constructor(private bannerService: BannerService,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.bannerService.getBanner().subscribe(res => {
      const component = this.componentFactoryResolver.resolveComponentFactory(res);
      this.parent.clear();
      this.parent.createComponent(component);
    });
  }

}
