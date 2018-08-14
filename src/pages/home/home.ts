
import { Component } from '@angular/core';
import { NavController,ModalController,PopoverController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab: any;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public popoverCtrl: PopoverController) { }

  ionViewDidLoad() {
    this.tab = "active";
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create('PopOverMorePage');
    popover.present({
      ev: myEvent
    });
  }

  offerride() {
    this.navCtrl.push('OfferRidePage');
  }

  findride() {
    this.navCtrl.push('FindRidePage');
  }

  profile() {
    this.navCtrl.push('ProfilePage');
  }

  tab_swap(type) {
    this.tab = type;
  }

  message() {
    this.navCtrl.push('MessagePage');
  }


}
