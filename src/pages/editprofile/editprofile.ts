import { Component } from '@angular/core';
import { NavController,ViewController,ModalController } from 'ionic-angular';

import { Editbio } from '../editbio/editbio';

import { Editphoto } from '../editphoto/editphoto';


@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html'
})
export class Editprofile {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController,public modalCtrl: ModalController) {}

  ionViewDidLoad() {

  }


  editbio() {
  let modal = this.modalCtrl.create(Editbio);
  modal.present();
  }

  editphoto() {
  let modal = this.modalCtrl.create(Editphoto);
  modal.present();
  }

  dismiss() {
   this.viewCtrl.dismiss();
 }

}
