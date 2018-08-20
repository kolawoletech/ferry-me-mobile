import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the IduploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-idupload',
  templateUrl: 'idupload.html',
})
export class IduploadPage {
  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
  }

  idedit() {
  this.navCtrl.push('IdeditPage');
  }
  dismiss() {
   this.viewCtrl.dismiss();
 }

}
