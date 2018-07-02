import { Component } from '@angular/core';
import { NavController,ViewController,ModalController } from 'ionic-angular';

import { Bookpopup } from '../bookpopup/bookpopup';

import {Chat } from '../chat/chat';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class Contact {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController,public modalCtrl: ModalController) {}

  ionViewDidLoad() {
  }

    bookpopup() {
   let modal = this.modalCtrl.create(Bookpopup);
   modal.present();
   }

   chat() {
  let modal = this.modalCtrl.create(Chat);
  modal.present();
  }

  dismiss() {
   this.viewCtrl.dismiss();
   }

}
