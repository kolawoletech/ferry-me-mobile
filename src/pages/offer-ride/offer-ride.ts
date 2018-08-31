import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OfferRidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offer-ride',
  templateUrl: 'offer-ride.html',
})
export class OfferRidePage {


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
   this.navCtrl.push('OfferRideDetailPage');
 }

}
