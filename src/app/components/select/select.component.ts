import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SelectOptions } from '../../interfaces/select';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})

export class SelectComponent implements OnInit {

  @Input() options: SelectOptions[];
  @Input() selectClass: String;
  @Input() selectId: String;
  @Input() errorMessage: String;

  @Output() sendValue = new EventEmitter();

  public selectValue: String = '';
  public showError: Boolean = false;
  public blank: Boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

  public changeValue(value: String): void {

    if (value === '') {
      this.blank = true;
    }else {
      this.blank = false;
    }

    this.showError = false;
    this.selectValue = value;
    this.sendValue.emit(this.selectValue);
  }

}
