import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';

import { Idupload } from '../idupload/idupload';


@Component({
  selector: 'page-editid',
  templateUrl: 'editid.html'
})
export class Editid {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
  }

  idupload() {
  this.navCtrl.push(Idupload);
  }

  dismiss() {
   this.viewCtrl.dismiss();
 }

}
