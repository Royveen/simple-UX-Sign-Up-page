import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() btnClass: String;
  @Input() btnText: String;
  @Input() disabled: Boolean;
  @Input() removeCaret: Boolean;
  @Output() submit = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public onClick() {
    this.submit.emit();
  }
}
