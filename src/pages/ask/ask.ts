import { Component } from '@angular/core';
import { NavController,ViewController,ModalController } from 'ionic-angular';

import { Ratting } from '../ratting/ratting';

import { Thanks } from '../thanks/thanks';

import { Pickup } from '../pickup/pickup';

import { Drop } from '../drop/drop';


@Component({
  selector: 'page-ask',
  templateUrl: 'ask.html'
})
export class Ask {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController,public modalCtrl: ModalController) {}

  ionViewDidLoad() {
  }

  dismiss() {
   this.viewCtrl.dismiss();
   }

   ratting() {
   let modal = this.modalCtrl.create(Ratting);
   modal.present();
   }

   thanks() {
   let modal = this.modalCtrl.create(Thanks);
   modal.present();
   }

   pickup() {
   let modal = this.modalCtrl.create(Pickup);
   modal.present();
   }

   drop() {
   let modal = this.modalCtrl.create(Drop);
   modal.present();
   }


}
