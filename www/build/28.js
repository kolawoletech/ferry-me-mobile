webpackJsonp([28],{

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRideTypePageModule", function() { return CreateRideTypePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_ride_type__ = __webpack_require__(754);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateRideTypePageModule = /** @class */ (function () {
    function CreateRideTypePageModule() {
    }
    CreateRideTypePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_ride_type__["a" /* CreateRideTypePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_ride_type__["a" /* CreateRideTypePage */]),
            ],
        })
    ], CreateRideTypePageModule);
    return CreateRideTypePageModule;
}());

//# sourceMappingURL=create-ride-type.module.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateRideTypePage; });
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
 * Generated class for the CreateRideTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateRideTypePage = /** @class */ (function () {
    function CreateRideTypePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CreateRideTypePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateRideTypePage');
    };
    CreateRideTypePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-ride-type',template:/*ion-inline-start:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\create-ride-type\create-ride-type.html"*/'<ion-header >\n    <!-- <button menuToggle ion-button class="jr_left jr_header_btn jr_sidemenu_icon"></button> -->\n   \n    \n    <div class="jr_icon_bar_home">\n     \n      <span> <img   alt="logo" src="assets/icon/ico-trans.png"></span>\n     \n     </div>\n\n    <div class="jr_clear"></div>\n    <div class="jr_clear"></div>\n\n  </ion-header>\n  <ion-content class="jr_body_wrapper">\n    <div class="jr_home_tab_content"  [hidden]="tab==\'inactive\'">\n    <div class="jr_div_half">\n      <div class="jr_div_overlay">\n        <div class="jr_over_inner">\n        <button ion-button class="jr_offer_ride" (click)="offerride()">Offer a ride</button>\n        <p>Share your car journey with co- travellers just like you and cover all your fuel costs!</p>\n      </div>\n      </div>\n      <img src="assets/img/jr_div_half1.png">\n    </div>\n    <div class="jr_div_half">\n      <div class="jr_div_overlay">\n        <div class="jr_over_inner">\n        <button ion-button class="jr_offer_ride1" (click)="findride()"> Find a ride</button>\n        <p>Yoyfull and comfortable travel, share your journey with all like you</p>\n      </div>\n      </div>\n      <img src="assets/img/jr_div_half2.png">\n    </div>\n    <!-- <div class="jr_home_active">\n      <div class="jr_profile_content">\n        <div class="jr_home_offer_ride">\n          <ul>\n            <div class="jr_offer_ride_top">\n              Offered Ride\n            </div>\n            <li>\n              <div class="jr_home_offer_photo"><img src="assets/img/jr_car_img.png"></div>\n              <div class="jr_home_offer_detail">\n                <h5>Saturday 29, April</h5>\n                <h6>05: 00 am</h6>\n                <p>Majestic<span><img src="assets/img/jr_forward.png"></span>Christ Tower</p>\n                <div class="jr_edit_more" (click)="presentPopover($event)"><img src="assets/img/jr_more.png"></div>\n              </div>\n              <div class="jr_clear"></div>\n  \n              <div class="jr_home_btm">\n                <hr>\n                <p>Request waiting for Approval</p>\n              </div>\n            </li>\n            <li>\n              <div class="jr_home_offer_photo"><img src="assets/img/jr_car_img.png"></div>\n              <div class="jr_home_offer_detail">\n                <h5>Saturday 29, April</h5>\n                <h6>05: 00 am</h6>\n                <p>Electronic City<span><img src="assets/img/jr_forward.png"></span>Madiwala</p>\n                <div class="jr_edit_more" (click)="presentPopover($event)"><img src="assets/img/jr_more.png"></div>\n              </div>\n              <div class="jr_clear"></div>\n  \n            </li>\n          </ul>\n          <ul>\n            <div class="jr_book_ride_top">\n              Your Bookings\n            </div>\n            <li>\n              <div class="jr_home_offer_photo"><img src="assets/img/jr_car_img.png"></div>\n              <div class="jr_home_offer_detail">\n                <h5>Saturday 29, April</h5>\n                <h6>05: 00 am</h6>\n                <p>Infopark<span><img src="assets/img/jr_forward.png"></span>Piravom</p>\n                <div class="jr_edit_more" (click)="presentPopover($event)"><img src="assets/img/jr_more.png"></div>\n              </div>\n              <div class="jr_clear"></div>\n  \n              <div class="jr_home_btm">\n                <hr>\n                <p>Request waiting for Approval</p>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div> -->\n  </div>\n\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\create-ride-type\create-ride-type.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CreateRideTypePage);
    return CreateRideTypePage;
}());

//# sourceMappingURL=create-ride-type.js.map

/***/ })

});
//# sourceMappingURL=28.js.map