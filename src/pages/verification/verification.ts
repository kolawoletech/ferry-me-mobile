import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';

import {Login } from '../login/login';

@Component({
  selector: 'page-verification',
  templateUrl: 'verification.html'
})
export class Verification {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
  }

  login() {
  this.navCtrl.push(Login);
}

goBack(){
   this.navCtrl.pop();
 }

 dismiss() {
  this.viewCtrl.dismiss();
}

}
