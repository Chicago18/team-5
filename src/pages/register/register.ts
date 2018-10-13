import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";
import {Validators, FormBuilder, FormGroup } from "@angular/forms";
import {AuthProvider} from "../../providers/auth/auth";

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  private signUpForm : FormGroup;

  constructor(public nav: NavController, private formBuilder: FormBuilder, public authProvider: AuthProvider) {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // register and go to home page
  register() {
    const {firstName, lastName, email, password} = this.signUpForm.value;
    this.authProvider.signUpUser(email, password, firstName, lastName);
    this.nav.setRoot(LoginPage);
  }

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
}
