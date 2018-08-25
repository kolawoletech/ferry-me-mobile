webpackJsonp([12],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing__ = __webpack_require__(760);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LandingPageModule = /** @class */ (function () {
    function LandingPageModule() {
    }
    LandingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__landing__["a" /* LandingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__landing__["a" /* LandingPage */]),
            ],
        })
    ], LandingPageModule);
    return LandingPageModule;
}());

//# sourceMappingURL=landing.module.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LandingPage = /** @class */ (function () {
    function LandingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showPrev = true;
        this.showNext = false;
        this.currentIndex = 0;
    }
    LandingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LandingPage');
    };
    LandingPage.prototype.goToNextSlide = function () {
        this.slider.slideNext();
    };
    LandingPage.prototype.goToPrevSlide = function () {
        this.slider.slidePrev();
    };
    LandingPage.prototype.onSlideChanged = function () {
        this.showPrev = this.slider.isBeginning();
        this.showNext = this.slider.isEnd();
        this.currentIndex = this.slider.getActiveIndex();
    };
    /*   home() {
        this.navCtrl.push(HomePage);
      } */
    LandingPage.prototype.login = function () {
        this.navCtrl.push('LoginPage');
    };
    LandingPage.prototype.signup = function () {
        this.navCtrl.push('SignupPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('mySlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], LandingPage.prototype, "slider", void 0);
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-landing',template:/*ion-inline-start:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\landing\landing.html"*/'\n\n\n\n<ion-content class="jr_landing_bg">\n\n  <ion-slides  pager="true" #mySlider  (ionSlideDidChange)="onSlideChanged()">\n\n    <ion-slide class="jr_slide jr_landing_overlay">\n\n      <div class="jr_slider_inner">\n\n        <h4>Welcome to</h4>\n\n        <h3><strong>FerryMe</strong></h3>\n\n        <h4> Rides</h4>\n\n        <hr>\n\n        <p>instantly find a traveling partner for short and long distance trips<br> as well as connect passengers and drivers for events related trip<br> to share journeys.</p>\n\n        <div class="jr_space"></div>\n\n     </div>\n\n    </ion-slide>\n\n    <ion-slide class="jr_slide jr_landing_overlay">\n\n      <div class="jr_slider_inner">\n\n        <h4>You can</h4>\n\n        <h3><strong>Offer a Ride</strong></h3>\n\n        <hr>\n\n        <p>Share your car journey with co- travellers just like you and cover all your fuel costs!</p>\n\n        <div class="jr_space"></div>\n\n     </div>\n\n    </ion-slide>\n\n    <ion-slide class="jr_slide jr_landing_overlay">\n\n      <div class="jr_slider_inner">\n\n        <h4>or</h4>\n\n        <h3><strong>Find a Ride</strong></h3>\n\n        <hr>\n\n        <p>Joyfull and comfortable travel, share your journey with all like you</p>\n\n        <div class="jr_space"></div>\n\n     </div>\n\n    </ion-slide>\n\n    <ion-slide class="jr_slide jr_landing_overlay1 animate fadeIn">\n\n      <div class="jr_slider_inner">\n\n        <h4>Choose a trusted people</h4>\n\n        <h3><strong>to travel with you</strong></h3>\n\n        <hr>\n\n        <div class="jr_icon_bar">\n\n          <span><img src="assets/img/jr_verified.png"></span>\n\n          <span><img src="assets/img/jr_ratting.png"></span>\n\n          <span><img src="assets/img/jr_phone.png"></span>\n\n         </div>\n\n        <p>Trusted Profiles<br>\n\n        Ratting<br>\n\n      Verified Contact</p>\n\n        <div class="jr_space" style="height:200px;"></div>\n\n     </div>\n\n    </ion-slide>\n\n  </ion-slides>\n\n    <div class="jr_landing_btm">\n\n      <button ion-button class="jr_btm_btn" [hidden] ="currentIndex != 0"  (click)="goToNextSlide()">\n\n        Know how\n\n      </button>\n\n      <button ion-button class="jr_btm_btn animate fadeInLeft" style="width:40px;height:40px;border-radius:50%;padding: 10px;" [hidden]="currentIndex == 0 || currentIndex == 3"  (click)="goToNextSlide()">\n\n        <img src="assets/img/jr_arrow.png">\n\n      </button>\n\n      <div class="clear"></div>\n\n      <div class="jr_last_slide_btn_bar" [hidden] ="currentIndex != 3"  >\n\n        <!-- <button ion-button class="jr_strtd_btn" (click)="home()">GET STARTED</button> -->\n\n        <div class="jr_sign_bar">\n\n          <ul>\n\n            <li ion-button (click)="login()">LOGIN</li>\n\n            <li ion-button (click)="signup()">SIGN UP</li>\n\n          </ul>\n\n        </div>\n\n      </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\landing\landing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing.js.map

/***/ })

});
//# sourceMappingURL=12.js.map