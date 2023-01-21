import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-over',
  templateUrl: './over.component.html',
  styleUrls: ['./over.component.css'],
})
export class OverComponent implements OnInit {
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
