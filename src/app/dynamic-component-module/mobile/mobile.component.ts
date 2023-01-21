import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css'],
})
export class MobileComponent implements OnInit {
  @Input() name: string = '';
  constructor() {}
  ngOnInit(): void {}

  @Output() closed = new EventEmitter<any>();
  close() {
    this.closed.emit({
      name: this.name,
    });
  }
}
