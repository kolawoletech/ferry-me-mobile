import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';

import {Manage } from '../manage/manage';

@Component({
  selector: 'page-loginpop',
  templateUrl: 'loginpop.html'
})
export class Loginpop {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
  }
  dismiss() {
   this.viewCtrl.dismiss();
 }


     manage() {
     this.navCtrl.push(Manage);
     }

}
