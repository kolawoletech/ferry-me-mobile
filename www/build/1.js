webpackJsonp([1],{

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicProfilePageModule", function() { return PublicProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__public_profile__ = __webpack_require__(775);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PublicProfilePageModule = /** @class */ (function () {
    function PublicProfilePageModule() {
    }
    PublicProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__public_profile__["a" /* PublicProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__public_profile__["a" /* PublicProfilePage */]),
            ],
        })
    ], PublicProfilePageModule);
    return PublicProfilePageModule;
}());

//# sourceMappingURL=public-profile.module.js.map

/***/ }),

/***/ 775:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(93);
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
 * Generated class for the PublicProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PublicProfilePage = /** @class */ (function () {
    function PublicProfilePage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    PublicProfilePage.prototype.ionViewDidLoad = function () {
    };
    PublicProfilePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PublicProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-public-profile',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\public-profile\public-profile.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>My public profile</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn jr_mail_icon"></button>\n\n  <button ion-button class="jr_right jr_header_btn jr_profile_icon"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="jr_profile_wrapper">\n\n    <div class="jr_profile_banner1">\n\n      <div class="jr_profile_photo1">\n\n        <img src="assets/img/e_img14.png">\n\n      </div>\n\n    </div>\n\n    <div class="jr_profile_content">\n\n      <h4>Lisa Roberts</h4>\n\n      <p class="jr_age1">23 y/o</p>\n\n      <hr>\n\n\n\n    <div class="jr_profile_tab_content">\n\n      <div class="jr_edit_row">\n\n      <h4>ABOUT YOU</h4>\n\n      <p>\n\n        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered\n\n      </p>\n\n\n\n    <h4>VERIFICATION</h4>\n\n    <ul>\n\n      <li class="verified">Email</li>\n\n      <li class="verified">Phone Verified</li>\n\n    </ul>\n\n    <h4>LAST SEEN</h4>\n\n    <ul>\n\n      <li class="jr_bg_none">Last Seen&nbsp;:&nbsp;Today</li>\n\n      <li class="jr_bg_none">Member Since&nbsp;:&nbsp;April 2016</li>\n\n    </ul>\n\n    </div>\n\n    </div>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\public-profile\public-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], PublicProfilePage);
    return PublicProfilePage;
}());

//# sourceMappingURL=public-profile.js.map

/***/ })

});
//# sourceMappingURL=1.js.map