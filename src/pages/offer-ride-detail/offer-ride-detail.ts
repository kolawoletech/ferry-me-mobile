import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';

/**
 * Generated class for the OfferRideDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offer-ride-detail',
  templateUrl: 'offer-ride-detail.html',
})
export class OfferRideDetailPage {
  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {}

  ionViewDidLoad() {
  }

  addcomment() {
  let modal = this.modalCtrl.create('Addcomment');
  modal.present();
}

loginpop() {
let modal = this.modalCtrl.create('Loginpop');
modal.present();
}

  goBack(){
     this.navCtrl.pop();
   }

}
