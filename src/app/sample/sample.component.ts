import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Renderer3} from '@angular/core/src/render3/renderer';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  // label: string;

  @ViewChild('text')
  myLabel: ElementRef;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  changeLabel(elem: ElementRef) {
    // this.myLabel.nativeElement.innerHTML = 'New text3';
    // this.label = 'New <b>text4</b>';
    // elem.nativeElement.innerHTML = 'New Text5';
    this.renderer.setProperty(this.myLabel.nativeElement,
      'innerHTML', 'New text6');
  }
}
