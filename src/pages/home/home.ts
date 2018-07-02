import { Component } from '@angular/core';
import { NavController,ModalController,PopoverController } from 'ionic-angular';

import { Findride } from '../findride/findride';

import { Offerride } from '../offerride/offerride';

import { Profile } from '../profile/profile';

import { Message } from '../message/message';

import { Popovermore } from '../popovermore/popovermore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
tab:any;
  constructor(public navCtrl: NavController,public modalCtrl: ModalController,public popoverCtrl: PopoverController) {}

  ionViewDidLoad() {
    this.tab = "active";
  }

  presentPopover(myEvent) {
let popover = this.popoverCtrl.create(Popovermore);
popover.present({
ev: myEvent
});
}

  offerride() {
  this.navCtrl.push(Offerride);
}

findride() {
this.navCtrl.push(Findride);
}

profile() {
this.navCtrl.push(Profile);
}

tab_swap(type) {
    this.tab = type;
   }

   message() {
   this.navCtrl.push(Message);
   }

}
