import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IduploadPage } from './idupload';

@NgModule({
  declarations: [
    IduploadPage,
  ],
  imports: [
    IonicPageModule.forChild(IduploadPage),
  ],
})
export class IduploadPageModule {}
