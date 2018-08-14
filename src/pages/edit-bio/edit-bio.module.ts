import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditBioPage } from './edit-bio';

@NgModule({
  declarations: [
    EditBioPage,
  ],
  imports: [
    IonicPageModule.forChild(EditBioPage),
  ],
})
export class EditBioPageModule {}
