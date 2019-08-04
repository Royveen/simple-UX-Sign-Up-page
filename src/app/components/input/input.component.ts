import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() inputType: String;
  @Input() inputClass: String;
  @Input() inputId: String;
  @Input() inputAria: String;
  @Input() inputPlaceholder: String;
  @Input() errorMessage: String;
  @Input() readOnly: Boolean;
  @Input() value: String;

  public showError: Boolean = false;

  @Output() sendValue = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public changeValue(event): void {
    this.showError = false;
    if (event.target.value.length > 0) {
      if (!event.target.validity.valid) {
        this.showError = true;
        this.sendValue.emit('');
      } else {
        this.sendValue.emit(event.target.value);
      }
    }
  }
}
