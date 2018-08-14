import { Component,  ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides  } from 'ionic-angular';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  @ViewChild('mySlider') slider: Slides;
  showPrev: any;
  showNext: any;
  currentIndex: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.showPrev = true;
    this.showNext = false;
    this.currentIndex = 0;

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
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

/*   home() {
    this.navCtrl.push(HomePage);
  } */

  login() {
    this.navCtrl.push('LoginPage');
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }
}
