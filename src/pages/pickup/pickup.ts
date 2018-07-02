import { Component } from '@angular/core';
import { NavController,ViewController,ModalController } from 'ionic-angular';

import { Pickex } from '../pickex/pickex';


@Component({
  selector: 'page-pickup',
  templateUrl: 'pickup.html'
})
export class Pickup {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController,public modalCtrl: ModalController) {}

  ionViewDidLoad() {
  }

  dismiss() {
   this.viewCtrl.dismiss();
   }


      pickex() {
      let modal = this.modalCtrl.create(Pickex);
      modal.present();
      }

}
