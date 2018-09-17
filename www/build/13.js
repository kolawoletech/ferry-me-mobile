webpackJsonp([13],{

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferRidePageModule", function() { return OfferRidePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offer_ride__ = __webpack_require__(771);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OfferRidePageModule = /** @class */ (function () {
    function OfferRidePageModule() {
    }
    OfferRidePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__offer_ride__["a" /* OfferRidePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__offer_ride__["a" /* OfferRidePage */]),
            ],
        })
    ], OfferRidePageModule);
    return OfferRidePageModule;
}());

//# sourceMappingURL=offer-ride.module.js.map

/***/ }),

/***/ 771:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferRidePage; });
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
 * Generated class for the OfferRidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OfferRidePage = /** @class */ (function () {
    function OfferRidePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.event = {
            month: '2016-11-01',
            timeStarts: '07:43',
            timeEnds: '2050-02-20'
        };
    }
    OfferRidePage.prototype.ionViewDidLoad = function () {
    };
    OfferRidePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    OfferRidePage.prototype.offerridedetail = function () {
        this.navCtrl.push('OfferRideDetailPage');
    };
    OfferRidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offer-ride',template:/*ion-inline-start:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\offer-ride\offer-ride.html"*/'<ion-header class="jr_theme_color jr_header">\n    <button menuToggle ion-button class="jr_left jr_header_btn jr_sidemenu_icon"></button>\n  <div class="jr_header_title">\n    <h4>Offer a ride</h4>\n  </div>\n  <button ion-button class="jr_right jr_header_btn"></button>\n  <div class="jr_clear"></div>\n</ion-header>\n<ion-content>\n  <div class="jr_ride_wrapper">\n    <h5>Wanna Offer a Ride ?</h5>\n    <div class="jr_offer_bg">\n        <img src="assets/img/jr_offer_img.png">\n    </div>\n    <div class="jr_ride_form">\n      <input class="jr_ride_input1" placeholder="From">\n      <br><br>\n      <input class="jr_ride_input2" placeholder="To">\n      <div class="jr_box"></div>\n      <div class="jr_custom">\n          <input id="check1" type="checkbox" name="check" value="check1">\n          <label for="check1">Round Trip</label>\n      </div>\n      <div class="jr_time_div">\n        <div class="jr_date">\n          <!-- <input class="jr_input3" placeholder="Departure Date"> -->\n          <ion-item class="jr_input3">\n            <ion-datetime placeholder="Departure Date"  displayFormat="MMM DD YYYY" [(ngModel)]="event.month"></ion-datetime>\n          </ion-item>\n          <div class="jr_clear"></div>\n        </div>\n        <div class="jr_time">\n          <select class="jr_select">\n            <option>Time</option>\n          </select>\n        </div>\n        <div class="j_clear"></div>\n      </div>\n\n    </div>\n    <div class="jr_bottom_button_bay">\n      <button ion-button class="jr_offer_ride2" (click)="offerridedetail()">Continue</button>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\offer-ride\offer-ride.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], OfferRidePage);
    return OfferRidePage;
}());

//# sourceMappingURL=offer-ride.js.map

/***/ })

});
//# sourceMappingURL=13.js.map