import { Component } from '@angular/core';
import { NavController,ViewController,ModalController  } from 'ionic-angular';

import { Dropex } from '../dropex/dropex';


@Component({
  selector: 'page-drop',
  templateUrl: 'drop.html'
})
export class Drop {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
  }

  dismiss() {
   this.viewCtrl.dismiss();
   }

   dropex() {
   let modal = this.modalCtrl.create(Dropex);
   modal.present();
   }

}
