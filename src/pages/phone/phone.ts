import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile'
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
  number: "not set"
  constructor(public navCtrl: NavController, public navParams: NavParams, public profileProvider: ProfileProvider) {
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
        console.log(phone)
        this.number =phone.phoneNumber;
        this.profileProvider.updateNumber(phone.phoneNumber);
        this.navCtrl.setRoot('TabsPage').then(
          ()=>{
            this.navCtrl.setRoot('ProfilePage')
          }
        );

      })
      }, (err) => {
        alert(err);
    })
  }
}
