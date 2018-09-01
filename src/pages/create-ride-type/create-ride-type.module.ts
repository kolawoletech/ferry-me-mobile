import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateRideTypePage } from './create-ride-type';

@NgModule({
  declarations: [
    CreateRideTypePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateRideTypePage),
  ],
})
export class CreateRideTypePageModule {}
