import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone',
  templateUrl: 'phone.html',
})
export class PhonePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.confirmPhone();
  }
  confirmPhone() {
    (<any>window).AccountKitPlugin.loginWithPhoneNumber({
      useAccessToken: true,
	    defaultCountryCode: "ZA",
	    facebookNotificationsEnabled: true
    }, (successdata) => {
      (<any>window).AccountKitPlugin.getAccount((phone) => {
        
        this.navCtrl.push('ProfilePage');
      })
      }, (err) => {
        alert(err);
    })
  }
}
