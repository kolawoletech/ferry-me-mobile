import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';

import { Profile } from '../profile/profile';


@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})
export class Message {
tab:any;
  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    this.tab = "active";
  }

  tab_swap(type) {
      this.tab = type;
     }



     dismiss() {
      this.viewCtrl.dismiss();
    }

    profile() {
    this.navCtrl.push(Profile);
    }

}
