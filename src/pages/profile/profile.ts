import { Component } from '@angular/core';

import { NavController,PopoverController,ModalController } from 'ionic-angular';

import { Popover } from '../popover/popover';

import { Editprofile } from '../editprofile/editprofile';

import { Editphoto } from '../editphoto/editphoto';

import { Editbio } from '../editbio/editbio';

import { Editpreference } from '../editpreference/editpreference';

import { Editid } from '../editid/editid';

import { Addcar } from '../addcar/addcar';

import { Addcarphoto } from '../addcarphoto/addcarphoto';

import { Addnumber } from '../addnumber/addnumber';

import { Editcar } from '../editcar/editcar';

import { Publicprofile } from '../publicprofile/publicprofile';

import { Notification } from '../notification/notification';

import { Message } from '../message/message';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class Profile {
tab:any;
  constructor(public navCtrl: NavController,public popoverCtrl: PopoverController,public modalCtrl: ModalController) {}

  ionViewDidLoad() {
  this.tab = "active";

  }
  goBack(){
     this.navCtrl.pop();
   }

   tab_swap(type) {
       this.tab = type;
      }

      presentPopover(myEvent) {
  let popover = this.popoverCtrl.create(Popover);
  popover.present({
    ev: myEvent
  });
}

editprofile() {
let modal = this.modalCtrl.create(Editprofile);
modal.present();
}

editphoto() {
let modal = this.modalCtrl.create(Editphoto);
modal.present();
}

editbio() {
let modal = this.modalCtrl.create(Editbio);
modal.present();
}


editpreference() {
let modal = this.modalCtrl.create(Editpreference);
modal.present();
}

editid() {
let modal = this.modalCtrl.create(Editid);
modal.present();
}

addnumber() {
let modal = this.modalCtrl.create(Addnumber);
modal.present();
}

addcar() {
let modal = this.modalCtrl.create(Addcar);
modal.present();
}

addcarphoto() {
let modal = this.modalCtrl.create(Addcarphoto);
modal.present();
}

editcar() {
let modal = this.modalCtrl.create(Editcar);
modal.present();
}

publicprofile() {
let modal = this.modalCtrl.create(Publicprofile);
modal.present();
}

notification() {
let modal = this.modalCtrl.create(Notification);
modal.present();
}

message() {
this.navCtrl.push(Message);
}



}
