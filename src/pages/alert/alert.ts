import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';


@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html'
})
export class Alert {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}
  trip: any = { lower: 33, upper: 60 };

  ionViewDidLoad() {
  }

  dismiss() {
   this.viewCtrl.dismiss();
 }

}
