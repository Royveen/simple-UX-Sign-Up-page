import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() btnClass: String;
  @Input() btnText: String;
  @Input() disabled: Boolean;

  constructor() { }

  ngOnInit() {
  }

}
