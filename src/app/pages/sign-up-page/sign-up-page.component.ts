import { Component, OnInit } from '@angular/core';
import { SelectOptions } from '../../interfaces/select';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {

  public content: String;
  public selectOptions: SelectOptions[] = [
    {
      value: 'Development',
      label: 'Development',
    }
  ];

  public buttonDisable: Boolean = false;

  public signUpForm = {
    email: '',
    interest: '',
  };

  constructor() { }

  ngOnInit() {

    this.content = 'Prepare for your career with a Project Management, Web-Development, '
    + 'Graphic design, or Digital Marketing Internship at Northern';

  }

  public setEmail(value: string): void {
    console.log(!(this.signUpForm.email.length > 0) && !(this.signUpForm.interest.length > 0));
    this.signUpForm.email = value;
  }

  public setInterest(value: string): void {
    console.log(!(this.signUpForm.email.length > 0) && !(this.signUpForm.interest.length > 0));
    this.signUpForm.interest = value;
  }

}
