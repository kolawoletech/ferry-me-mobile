import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the SearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-result',
  templateUrl: 'search-result.html',
})
export class SearchResultPage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) { }

  ionViewDidLoad() {
  }

  goBack() {
    this.navCtrl.pop();
  }

  filter() {
    let modal = this.modalCtrl.create('Filter');
    modal.present();
  }

  alert() {
    let modal = this.modalCtrl.create('Alert');
    modal.present();
  }


  searchmain() {
    this.navCtrl.push('SearchMainPage');
  }
}


