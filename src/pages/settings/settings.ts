import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";
import {AuthProvider} from '../../providers/auth/auth';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public nav: NavController, public auth: AuthProvider) {
  }

  // logout
  logout() {
    this.auth.logoutUser().then(() => {
      console.log('Successfully logged out!');
      this.nav.setRoot(LoginPage);
    }).catch((error) => console.log('Error logging out:', error));
  }
}
