import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, ModalController, MenuController, NavParams} from "ionic-angular";
import {RegisterPage} from "../register/register";
import {Validators, FormBuilder, FormGroup } from "@angular/forms";
import {AuthProvider} from "../../providers/auth/auth";
import { ErrorMessageComponent } from '../../components/error-message/error-message';
// eslint-disable-line
import {ERGsPage} from "../ERGs/ERGs";
import { HomePage } from "../home/home";


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public loginForm: FormGroup;
  public error: boolean;
  constructor(public modalCtrl: ModalController, public nav: NavController, public navParams: NavParams, public forgotCtrl: AlertController, private formBuilder: FormBuilder, public menu: MenuController, public toastCtrl: ToastController, public authProvider: AuthProvider) {
    const code = this.navParams.get('error') ? this.navParams.get('error').code : null;
    if (code === 'auth/wrong-password') {
      this.error = true;
    } else {
      this.error = false;
    }

    this.menu.swipeEnable(false);
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  presentWrongUserNameOrPasswordModal(message) {
    let errorModal = this.modalCtrl.create(ErrorMessageComponent, { errorMessage: message });
    errorModal.present();
  }

  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login() {
    const {email, password} = this.loginForm.value;
    this.authProvider.loginUser(email, password).then(() => this.nav.setRoot(HomePage))
      .catch((error) => {
        console.log('error', error);
        this.nav.setRoot(LoginPage, {error: error});
      });
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter your email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
