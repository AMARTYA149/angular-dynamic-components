import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css'],
})
export class LaptopComponent implements OnInit {
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
