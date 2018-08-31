import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FindRidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-find-ride',
  templateUrl: 'find-ride.html',
})
export class FindRidePage {


  constructor(public navCtrl: NavController) { }

  ionViewDidLoad() {
  }

  searchresult() {
    this.navCtrl.push('SearchResultPage');
  }


  goBack() {
    this.navCtrl.pop();
  }
}
