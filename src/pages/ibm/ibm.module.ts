import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IbmPage } from './ibm';

@NgModule({
  declarations: [
    IbmPage,
  ],
  imports: [
    IonicPageModule.forChild(IbmPage),
  ],
})
export class IbmPageModule {}
