import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup} from "@angular/forms";

/**
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {
  private profileEdit: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.profileEdit = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      pronouns: [''],
      company: [''],
      twitter: [''],
      tag: [''],
      jobTitle: ['', Validators.required],
      email: [''],
      facebook: [''],
      linkedin: [''],
    });
  }

  editProfile() {
    console.log('this.profileEdit.value', this.profileEdit.value);
  }

  save() {

  }

  cancel() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

}
