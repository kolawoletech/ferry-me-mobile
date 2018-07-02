import { Component } from '@angular/core';
import { NavController,ViewController,ModalController } from 'ionic-angular';

import { Editprofile } from '../editprofile/editprofile';

import { Editphoto } from '../editphoto/editphoto';



@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html'
})
export class Popover {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController,public modalCtrl: ModalController) {}


  close() {
    this.viewCtrl.dismiss();
  }

  editprofile() {
  let modal = this.modalCtrl.create(Editprofile);
  modal.present();
  }

  editphoto() {
  let modal = this.modalCtrl.create(Editphoto);
  modal.present();
  }





}
