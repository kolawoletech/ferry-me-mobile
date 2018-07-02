import { Component } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';


@Component({
  selector: 'page-editphoto',
  templateUrl: 'editphoto.html'
})
export class Editphoto {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController) {}

  ionViewDidLoad() {

  }

  dismiss() {
   this.viewCtrl.dismiss();
 }


}
