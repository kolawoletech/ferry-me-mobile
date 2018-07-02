import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Offerridedetail } from '../offerridedetail/offerridedetail';

@Component({
  selector: 'page-offerride',
  templateUrl: 'offerride.html'
})
export class Offerride {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
  }

  public event = {
      month: '2016-11-01',
      timeStarts: '07:43',
      timeEnds: '2050-02-20'
    }
  goBack(){
     this.navCtrl.pop();
   }

   offerridedetail() {
   this.navCtrl.push(Offerridedetail);
 }

}
