import {Component} from "@angular/core";
import {NavController, PopoverController} from "ionic-angular";
import {ERGsService} from "../../services/ERGs-service";
import {TripDetailPage} from "../trip-detail/trip-detail";

import {Storage} from '@ionic/storage';

import {NotificationsPage} from "../notifications/notifications";
import {SettingsPage} from "../settings/settings";
import {TripsPage} from "../trips/trips";
import {SearchLocationPage} from "../search-location/search-location";
import {PopupERGPage} from "../popupERG/popupERG";


@Component({
  selector: 'page-trips',
  templateUrl: 'ERGs.html'
})
export class ERGsPage {
  // list of trips
  public ERGs: any;

  constructor(public nav: NavController, public ergsService: ERGsService, public popoverCtrl: PopoverController) {
    // set sample data
    this.ERGs = ergsService.getAll();
  }

  // view trip detail
  viewDetail(id) {
    this.nav.push(TripDetailPage, {id: id});
  }

  filterPopup(myEvent) {
    console.log(myEvent);
    let popover = this.popoverCtrl.create(PopupERGPage);
    popover.present({
      ev: myEvent
    });
  }
}
