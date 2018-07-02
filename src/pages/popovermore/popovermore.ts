import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Popovermore page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-popovermore',
  templateUrl: 'popovermore.html'
})
export class Popovermore {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Popovermore Page');
  }

}
