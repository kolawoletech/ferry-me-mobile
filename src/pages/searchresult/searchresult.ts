import { Component } from '@angular/core';
import { NavController,ModalController } from 'ionic-angular';

import { Filter } from '../filter/filter';

import { Searchmain } from '../searchmain/searchmain';

import { Alert } from '../alert/alert';


@Component({
  selector: 'page-searchresult',
  templateUrl: 'searchresult.html'
})
export class Searchresult {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {}

  ionViewDidLoad() {
  }

  goBack(){
     this.navCtrl.pop();
   }

   filter() {
   let modal = this.modalCtrl.create(Filter);
   modal.present();
   }

   alert() {
   let modal = this.modalCtrl.create(Alert);
   modal.present();
   }


   searchmain() {
   this.navCtrl.push(Searchmain);
   }
}
