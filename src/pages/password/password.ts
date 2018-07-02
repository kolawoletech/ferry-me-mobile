import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';

@Component({
  selector: 'page-password',
  templateUrl: 'password.html'
})
export class Password {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
  }

  dismiss() {
   this.viewCtrl.dismiss();
 }

}
