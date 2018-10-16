import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';

/**
 * Generated class for the TrainingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-training',
  templateUrl: 'training.html',
})
export class TrainingPage {

  public type: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private streamingMedia: StreamingMedia) {
    this.type = 'resources'
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrainingPage');
  }

  startVideoCanada(event){
    let options: StreamingVideoOptions = {
      successCallback: () => {
        console.log();
      },

      errorCallback: () => {
        console.log();
      },
      orientation: 'landscape'
    }

    this.streamingMedia.playVideo('https://youtu.be/lGJfvxW6Wuw', options);
  }

}
