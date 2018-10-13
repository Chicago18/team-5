import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ErgprofilePage} from  '../ergprofile/ergprofile';

/**
 * Generated class for the ErgPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-erg',
  templateUrl: 'erg.html',
})
export class ErgPage {

  public ergArr: [
    {
      name: "Blue Pride",
      location: "Massachusettes"
      description: "Blue Pride was launched in October 2013 and membership grew to over 100 within the first year. Since then, Blue Pride has been making amazing progress. From LGBT-specific recruiting events to adding gender expression to their EEO along with sexual orientation and gender identity, Blue Pride has done in three years what has taken other ERGs decades."

  },
  {
    name: "ANGLE",
      location: "United States"
      description: "ANGLE is a leader in advancing visibility and awareness of LGBT issues both inside CIA and across the Intelligence Community. Since its formation in 1996, ANGLE has held a variety of visibility and awareness events throughout each year, especially during annual June Pride month celebrations. These efforts were amped up between 2010 and 2015 when larger societal changes and a push for greater diversity and inclusion at the CIA allowed ANGLE to advance major initiatives."
  },
  {
    name: "IBM Eagle",
      location: "Philippines"
      description: "EAGLE Philippines is one of the first LGBTQ ERGs in the Philippines. The group not only supports IBM’s global strategies in diversity and inclusion through recruitment, talent retention, talent development, and market development, but has also become an informal support group by giving LGBTQ employees and allies a sense of community."
  }

  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ErgPage');
  }
  goToProfile(){
    this.navCtrl.push(ErgprofilePage);
  }

}
