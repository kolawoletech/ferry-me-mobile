import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';

import { Home } from '../home/home';

import { Password } from '../password/password';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {}

  ionViewDidLoad() {
  }

  home() {
  this.navCtrl.push(Home);
}

goBack(){
   this.navCtrl.pop();
 }

 password() {
 let modal = this.modalCtrl.create(Password);
 modal.present();
 }

}
