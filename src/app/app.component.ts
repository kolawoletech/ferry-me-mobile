import { Component, ViewChild } from '@angular/core';

import { Nav, Platform, AlertController } from 'ionic-angular';

import { StatusBar } from 'ionic-native';

import { Landing } from '../pages/landing/landing';

import { Findride } from '../pages/findride/findride';

import { Offerride } from '../pages/offerride/offerride';

import { Editprofile } from '../pages/editprofile/editprofile';

import { Login } from '../pages/login/login';

import { Chat } from '../pages/chat/chat';

import { Manage } from '../pages/manage/manage';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Landing;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, private alertCtrl: AlertController) {
    this.initializeApp();



  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }


  editprofile() {
   this.nav.setRoot(Editprofile);
 }

 offerride() {
  this.nav.setRoot(Offerride);
}

findride() {
 this.nav.setRoot(Findride);
}

login() {
 this.nav.setRoot(Login);
}

showPlatform() {
  let text = 'I run on: ' + this.platform.platforms();
  let alert = this.alertCtrl.create({
    title: 'My Home',
    subTitle: text,
    buttons: ['Ok']
  });
  alert.present();
}




}
