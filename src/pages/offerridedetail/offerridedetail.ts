import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';

import { Addcomment } from '../addcomment/addcomment';

import { Loginpop } from '../loginpop/loginpop';

@Component({
  selector: 'page-offerridedetail',
  templateUrl: 'offerridedetail.html'
})
export class Offerridedetail {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {}

  ionViewDidLoad() {
  }

  addcomment() {
  let modal = this.modalCtrl.create(Addcomment);
  modal.present();
}

loginpop() {
let modal = this.modalCtrl.create(Loginpop);
modal.present();
}

  goBack(){
     this.navCtrl.pop();
   }

}
