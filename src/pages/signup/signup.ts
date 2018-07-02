import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';

import {Verification } from '../verification/verification';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class Signup {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {}

  ionViewDidLoad() {
  }



verification() {
let modal = this.modalCtrl.create(Verification);
modal.present();
}

goBack(){
   this.navCtrl.pop();
 }

}
