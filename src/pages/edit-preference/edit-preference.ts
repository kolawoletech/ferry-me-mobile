import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the EditPreferencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-preference',
  templateUrl: 'edit-preference.html',
})
export class EditPreferencePage {


  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
  }

  dismiss() {
   this.viewCtrl.dismiss();
 }


}
