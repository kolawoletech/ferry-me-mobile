import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';

@Component({
  selector: 'page-editpreference',
  templateUrl: 'editpreference.html'
})
export class Editpreference {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
  }

  dismiss() {
   this.viewCtrl.dismiss();
 }

}
