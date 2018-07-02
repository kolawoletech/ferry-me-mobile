import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';

import { Bookpopup } from '../bookpopup/bookpopup';

import { Ask } from '../ask/ask';

import { Contact } from '../contact/contact';

@Component({
  selector: 'page-searchmain',
  templateUrl: 'searchmain.html'
})
export class Searchmain {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {}

  ionViewDidLoad() {

  }

  goBack(){
     this.navCtrl.pop();
   }

   bookpopup() {
   let modal = this.modalCtrl.create(Bookpopup);
   modal.present();
   }

   ask() {
   let modal = this.modalCtrl.create(Ask);
   modal.present();
   }

   contact() {
   let modal = this.modalCtrl.create(Contact);
   modal.present();
   }

}
