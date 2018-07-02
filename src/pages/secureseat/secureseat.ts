import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';

import { Request } from '../request/request';


@Component({
  selector: 'page-secureseat',
  templateUrl: 'secureseat.html'
})
export class Secureseat {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
  }

  dismiss() {
   this.viewCtrl.dismiss();
   }

   request() {
   this.navCtrl.push(Request);
   }

}
