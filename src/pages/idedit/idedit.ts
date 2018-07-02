import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';


@Component({
  selector: 'page-idedit',
  templateUrl: 'idedit.html'
})
export class Idedit {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
  }


  dismiss() {
   this.viewCtrl.dismiss();
 }

}
