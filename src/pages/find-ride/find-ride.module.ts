import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindRidePage } from './find-ride';

@NgModule({
  declarations: [
    FindRidePage,
  ],
  imports: [
    IonicPageModule.forChild(FindRidePage),
  ],
})
export class FindRidePageModule {}
