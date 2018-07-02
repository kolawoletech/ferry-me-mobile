import { Component } from '@angular/core';
import { NavController,ViewController,ModalController } from 'ionic-angular';

import {Chat } from '../chat/chat';


@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html'
})
export class Summary {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController,public modalCtrl: ModalController) {}

  ionViewDidLoad() {
  }

  goBack(){
     this.navCtrl.pop();
   }

   chat() {
  let modal = this.modalCtrl.create(Chat);
  modal.present();
  }

   dismiss() {
    this.viewCtrl.dismiss();
  }

}
