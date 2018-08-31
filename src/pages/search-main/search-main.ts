import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the SearchMainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-main',
  templateUrl: 'search-main.html',
})
export class SearchMainPage {
  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {}

  ionViewDidLoad() {

  }

  goBack(){
     this.navCtrl.pop();
   }

   bookpopup() {
   let modal = this.modalCtrl.create('Bookpopup');
   modal.present();
   }

   ask() {
   let modal = this.modalCtrl.create('Ask');
   modal.present();
   }

   contact() {
   let modal = this.modalCtrl.create('Contact');
   modal.present();
   }

}
