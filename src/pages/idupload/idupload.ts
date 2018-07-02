import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';

import { Idedit } from '../idedit/idedit';


@Component({
  selector: 'page-idupload',
  templateUrl: 'idupload.html'
})
export class Idupload {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
  }

  idedit() {
  this.navCtrl.push(Idedit);
  }
  dismiss() {
   this.viewCtrl.dismiss();
 }

}
