import { Component } from '@angular/core';

import { NavController,ViewController,ModalController } from 'ionic-angular';

import { Secureseat } from '../secureseat/secureseat';


@Component({
  selector: 'page-bookpopup',
  templateUrl: 'bookpopup.html'
})
export class Bookpopup {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController,public modalCtrl: ModalController) {}

  ionViewDidLoad() {
  }

  secureseat() {
  let modal = this.modalCtrl.create(Secureseat);
  modal.present();
  this.viewCtrl.dismiss();
  }

}
