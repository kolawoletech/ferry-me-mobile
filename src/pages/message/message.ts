import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  tab: any;
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) { }

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
    this.navCtrl.push('ProfilePage');
  }
}
