import { Component, ViewChild } from '@angular/core';


import { NavController, Slides } from 'ionic-angular';

import { Home } from '../home/home';

import { Login } from '../login/login';

import { Signup } from '../signup/signup';


@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class Landing {
  @ViewChild('mySlider') slider: Slides;
  showPrev: any;
  showNext: any;
  currentIndex: any;
  constructor(public navCtrl: NavController) {
    this.showPrev = true;
    this.showNext = false;
    this.currentIndex = 0;

  }

  goToNextSlide() {
    this.slider.slideNext();
  }
  goToPrevSlide() {
    this.slider.slidePrev();
  }
  onSlideChanged() {
    this.showPrev = this.slider.isBeginning();
    this.showNext = this.slider.isEnd();
    this.currentIndex = this.slider.getActiveIndex();
  }

  home() {
    this.navCtrl.push(Home);
  }

  login() {
    this.navCtrl.push(Login);
  }

  signup() {
    this.navCtrl.push(Signup);
  }
}
