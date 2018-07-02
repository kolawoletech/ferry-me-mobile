import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';
@Component({
  selector: 'page-ratting',
  templateUrl: 'ratting.html'
})
export class Ratting {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
  }


  dismiss() {
   this.viewCtrl.dismiss();
 }



}
