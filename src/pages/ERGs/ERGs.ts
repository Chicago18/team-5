import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {ERGsService} from "../../services/ERGs-service";
import {TripDetailPage} from "../trip-detail/trip-detail";

@Component({
  selector: 'page-trips',
  templateUrl: 'ERGs.html'
})
export class ERGsPage {
  // list of trips
  public ERGs: any;

  constructor(public nav: NavController, public ergsService: ERGsService) {
    // set sample data
    this.ERGs = ergsService.getAll();
  }

  // view trip detail
  viewDetail(id) {
    this.nav.push(TripDetailPage, {id: id});
  }
}
