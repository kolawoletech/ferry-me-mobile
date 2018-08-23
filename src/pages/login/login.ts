import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  constructor(public navCtrl: NavController, public modalCtrl: ModalController) { }

  ionViewDidLoad() {
  }

  home() {
    this.navCtrl.push('HomePage');
  }

  goBack() {
    this.navCtrl.pop();
  }

  password() {
    let modal = this.modalCtrl.create('PasswordPage');
    modal.present();
  }

}
