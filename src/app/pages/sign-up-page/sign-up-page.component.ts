import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectOptions } from '../../interfaces/select';
import { InputComponent } from '../../components/input/input.component';
import { SelectComponent } from '../../components/select/select.component';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent implements OnInit {
  @ViewChild('email') emailComponent: InputComponent;
  @ViewChild('interests') interestComponent: SelectComponent;

  public content: String;
  public thankContent: String;
  public selectOptions: SelectOptions[];
  public removeCaret: Boolean = false;
  public submitSuccess: Boolean = false;
  public submitButtonText: String;
  public thankSubHeading: String;
  public mainHeading: String = 'INTERNSHIP SIGNUP FORM';

  public signUpForm = {
    email: '',
    interest: ''
  };

  constructor() {}

  ngOnInit() {
    this.content =
      'Prepare for your career with a Project Management, Web-Development, ' +
      'Graphic design, or Digital Marketing Internship';

    this.submitButtonText = 'Sign Up Now';

    this.selectOptions = [
      {
        value: 'Development',
        label: 'Development'
      }
    ];
  }

  public setEmail(value: string): void {
    this.signUpForm.email = value;
  }

  public setInterest(value: string): void {
    this.signUpForm.interest = value;
  }

  public onSubmit(): void {
    if (this.signUpForm.email.length === 0) {
      this.emailComponent.showError = true;
      return;
    }

    console.log(this.signUpForm);
    this.submitButtonText = 'Submitting...';
    this.removeCaret = true;

    setTimeout(() => {
      this.thankSubHeading = 'Thanks for your interest!';
      this.thankContent =
        'We will review your application and contact you for additional information should your background' +
        ' and experience meet the requirements of one of our openings.';
      this.submitSuccess = true;
    }, 2000);
  }
}
