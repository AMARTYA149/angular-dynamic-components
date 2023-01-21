import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.css'],
})
export class WatchComponent implements OnInit {
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
