import {Injectable} from "@angular/core";
import {TRIPS} from "./mock-trips";

@Injectable()
export class ERGsService {
  private ERGs: any;

  constructor() {
    this.ERGs = TRIPS;
  }

  getAll() {
    return this.ERGs;
  }

  getItem(id) {
    for (var i = 0; i < this.ERGs.length; i++) {
      if (this.ERGs[i].id === parseInt(id)) {
        return this.ERGs[i];
      }
    }
    return null;
  }

  remove(item) {
    this.ERGs.splice(this.ERGs.indexOf(item), 1);
  }
}






