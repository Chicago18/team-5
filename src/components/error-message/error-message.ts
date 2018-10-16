import { Component } from '@angular/core';
import { NavParams} from "ionic-angular";

/**
 * Generated class for the ErrorMessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'error-message',
  templateUrl: 'error-message.html'
})
export class ErrorMessageComponent {
  constructor(public navParams: NavParams) {
    alert(this.navParams.get('errorMessage'));
  }
}
