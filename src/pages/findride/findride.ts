import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Searchresult } from '../searchresult/searchresult';

@Component({
  selector: 'page-findride',
  templateUrl: 'findride.html'
})
export class Findride {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
  }

  searchresult() {
  this.navCtrl.push(Searchresult);
  }


  goBack(){
     this.navCtrl.pop();
   }

}
