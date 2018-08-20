import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the EditIdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-id',
  templateUrl: 'edit-id.html',
})
export class EditIdPage {
  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
  }

  idupload() {
  this.navCtrl.push('IduploadPage');
  }

  dismiss() {
   this.viewCtrl.dismiss();
 }
}
