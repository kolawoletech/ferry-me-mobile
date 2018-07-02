import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';

@Component({
  selector: 'page-addcar',
  templateUrl: 'addcar.html'
})
export class Addcar {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
  }
  dismiss() {
   this.viewCtrl.dismiss();
 }

}
