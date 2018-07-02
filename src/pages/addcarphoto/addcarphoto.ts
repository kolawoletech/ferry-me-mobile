import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';

@Component({
  selector: 'page-addcarphoto',
  templateUrl: 'addcarphoto.html'
})
export class Addcarphoto {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}

  ionViewDidLoad() {
  }

  dismiss() {
   this.viewCtrl.dismiss();
 }

}
