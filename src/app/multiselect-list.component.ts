import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiselect-list',
  templateUrl: './multiselect-list.component.html'
})
export class MultiselectListComponent {
  @Output() scrollingFinished = new EventEmitter<void>();
  @Input() categories: Array<string> = [];

  constructor() {}

  onScrollingFinished() {
    this.scrollingFinished.emit();
  }
}