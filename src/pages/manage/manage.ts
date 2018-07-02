import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

  import {Contact } from '../contact/contact';

@Component({
  selector: 'page-manage',
  templateUrl: 'manage.html'
})
export class Manage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
  }

  goBack(){
     this.navCtrl.pop();
   }

}
