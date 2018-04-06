import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  label: string;

  constructor() {
  }

  ngOnInit() {
  }

  changeLabel() {
    this.label = 'New text2';
  }
}
