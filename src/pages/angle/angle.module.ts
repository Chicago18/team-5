import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnglePage } from './angle';

@NgModule({
  declarations: [
    AnglePage,
  ],
  imports: [
    IonicPageModule.forChild(AnglePage),
  ],
})
export class AnglePageModule {}
