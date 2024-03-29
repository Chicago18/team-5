import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';

import { HomePage } from "../pages/home/home";
import { LoginPage } from "../pages/login/login";
import { LocalWeatherPage } from "../pages/local-weather/local-weather";
import { ProfilePage } from "../pages/profile/profile";
<<<<<<< HEAD
import { EditProfilePage } from "../pages/edit-profile/edit-profile";
=======
import {TrainingPage} from '../pages/training/training';
import {ErgPage} from '../pages/erg/erg';
import {ErgprofilePage} from '../pages/ergprofile/ergprofile';
>>>>>>> dev

export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

<<<<<<< HEAD
  rootPage: any = EditProfilePage;
=======
  rootPage: any = LoginPage;
>>>>>>> dev

  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard
  ) {
    this.initializeApp();

    this.appMenuItems = [
      {title: 'Home', component: HomePage, icon: 'home'},
      {title: 'Resources & Trainings', component: TrainingPage, icon: 'paper'},
      {title: 'ERG Registry', component: ErgPage, icon: 'albums'},
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.

      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      //this.keyboard.disableScroll(true);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot(LoginPage);
  }

  // go to user profile
  goToProfile() {
    this.nav.setRoot(ProfilePage);
  }

  goToTrainings(){
    this.nav.setRoot(TrainingPage);
  }

}
