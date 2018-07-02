import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';

import { Summary } from '../summary/summary';


@Component({
  selector: 'page-request',
  templateUrl: 'request.html'
})
export class Request {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {}

  ionViewDidLoad() {
  }

  goBack(){
     this.navCtrl.pop();
   }



   summary() {
   let modal = this.modalCtrl.create(Summary);
   modal.present();
   }
}
