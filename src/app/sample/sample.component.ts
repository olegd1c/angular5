import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  label: string;
  //
  // @ViewChild('text')
  // myLabel: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  changeLabel() {
    // this.myLabel.nativeElement.innerHTML = 'New text3';
    this.label = 'New <b>text4</b>';
  }
}
