import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IdeditPage } from './idedit';

@NgModule({
  declarations: [
    IdeditPage,
  ],
  imports: [
    IonicPageModule.forChild(IdeditPage),
  ],
})
export class IdeditPageModule {}
