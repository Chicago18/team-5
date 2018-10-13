import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";
import {Validators, FormBuilder, FormGroup } from "@angular/forms";


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  private signUpForm : FormGroup;
  constructor(public nav: NavController, private formBuilder: FormBuilder) {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // register and go to home page
  register() {
    console.log('this.signUpForm', this.signUpForm.value);
  }

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
}
