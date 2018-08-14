import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddCarPhotoPage } from './add-car-photo';

@NgModule({
  declarations: [
    AddCarPhotoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddCarPhotoPage),
  ],
})
export class AddCarPhotoPageModule {}
