import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
  @Input()
  label: { key: 'value'};

  getDate() {
    return new Date().toISOString();
  }

  constructor() {
  }

  ngOnInit() {
  }

}
