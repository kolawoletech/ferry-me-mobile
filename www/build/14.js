webpackJsonp([14],{

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferRideDetailPageModule", function() { return OfferRideDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offer_ride_detail__ = __webpack_require__(774);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OfferRideDetailPageModule = /** @class */ (function () {
    function OfferRideDetailPageModule() {
    }
    OfferRideDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__offer_ride_detail__["a" /* OfferRideDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__offer_ride_detail__["a" /* OfferRideDetailPage */]),
            ],
        })
    ], OfferRideDetailPageModule);
    return OfferRideDetailPageModule;
}());

//# sourceMappingURL=offer-ride-detail.module.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferRideDetailPage; });
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
 * Generated class for the OfferRideDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OfferRideDetailPage = /** @class */ (function () {
    function OfferRideDetailPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    OfferRideDetailPage.prototype.ionViewDidLoad = function () {
    };
    OfferRideDetailPage.prototype.addcomment = function () {
        var modal = this.modalCtrl.create('Addcomment');
        modal.present();
    };
    OfferRideDetailPage.prototype.loginpop = function () {
        var modal = this.modalCtrl.create('Loginpop');
        modal.present();
    };
    OfferRideDetailPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    OfferRideDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offer-ride-detail',template:/*ion-inline-start:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\offer-ride-detail\offer-ride-detail.html"*/'<ion-header class="jr_theme_color jr_header">\n    <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="goBack()"></button>\n    <div class="jr_header_title">\n      <h4>Offer a ride</h4>\n    </div>\n    <button ion-button class="jr_right jr_header_btn"></button>\n    <div class="jr_clear"></div>\n  </ion-header>\n  <ion-content>\n    <div class="jr_offerride_details">\n      <ul>\n        <li>\n          <h4>R Price</h4>\n          <div class="jr_offerride_detail_content">\n            <div class="jr_offerride_detail_content_left">\n              <div class="jr_destination">\n                <span><img src="assets/img/jr_departure.png">Durban</span><br>\n                <span><img src="assets/img/jr_arrival.png">Cape Town</span>\n              </div>\n            </div>\n            <div class="jr_offerride_detail_content_right">\n              <div class="jr_offerride_price_tag">\n                <span><img src="assets/img/jr_sub.png"></span>\n                <span class="jr_offer_price">60</span>\n                <span><img src="assets/img/jr_add.png"></span>\n              </div>\n            </div>\n            <div class="jr_clear"></div>\n          </div>\n        </li>\n        <li>\n          <div class="jr_offerride_detail_content">\n            <div class="jr_offerride_detail_content_left">\n              <h4><img src="assets/img/jr_seat.png">Avialable Seats</h4>\n            </div>\n            <div class="jr_offerride_detail_content_right">\n              <div class="jr_offerride_price_tag">\n                <span><img src="assets/img/jr_sub.png"></span>\n                <span class="jr_offer_price" style="color:#717171;">04</span>\n                <span><img src="assets/img/jr_add.png"></span>\n              </div>\n            </div>\n            <div class="jr_clear"></div>\n          </div>\n        </li>\n        <li>\n          <h4><img src="assets/img/jr_comment.png">Ride Comments</h4>\n          <h5>Write your ride  comments here</h5>\n          <p>Please add further details about your ride. It will save you answering lots of questions from co- travellers<br>\n            <button ion-button class="jr_addcomment_btn" (click)="addcomment()">Add Comments</button>\n          </p>\n        </li>\n        <li>\n          <div>\n          <h4 class="jr_left"><img src="assets/img/jr_seat.png">Max. 2 in the back seat</h4>\n          <div class="jr_custom jr_right jr_padding0" style="position: relative;top: 19px;">\n            <input id="check1" name="check" type="checkbox" value="check1">\n            <label for="check1"></label>\n          </div>\n          <div class="jr_clear"></div>\n          </div>\n          <p>Guarantee max. 2 people in the back of the car</p>\n        </li>\n        <li>\n          <h4><img src="assets/img/jr_detail.png">Details</h4>\n          <p class="jr_marginbtm0">Max. Luggage</p>\n          <div class="jr_select_offer_outter">\n          <select class="jr_select_offer">\n            <option>Medium</option>\n          </select>\n          </div>\n          <p class="jr_marginbtm0">Pickup flexibility</p>\n          <div class="jr_select_offer_outter">\n          <select class="jr_select_offer">\n            <option>Right on time</option>\n          </select>\n          </div>\n          <p class="jr_marginbtm0">Detour</p>\n          <div class="jr_select_offer_outter">\n          <select class="jr_select_offer">\n            <option>15 Minutes Detour max.</option>\n          </select>\n          </div>\n          <div class="jr_custom">\n              <input id="check1" type="checkbox" name="check" value="check1">\n              <label for="check1">I accept the T&Cs and Privacy Policy.</label>\n          </div>\n        </li>\n      </ul>\n      <div class="jr_bottom_button_bay">\n        <button ion-button class="jr_offer_ride2" (click)="loginpop()">Publish</button>\n      </div>\n    </div>\n  </ion-content>'/*ion-inline-end:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\offer-ride-detail\offer-ride-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], OfferRideDetailPage);
    return OfferRideDetailPage;
}());

//# sourceMappingURL=offer-ride-detail.js.map

/***/ })

});
//# sourceMappingURL=14.js.map