webpackJsonp([21],{

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindRidePageModule", function() { return FindRidePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__find_ride__ = __webpack_require__(765);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FindRidePageModule = /** @class */ (function () {
    function FindRidePageModule() {
    }
    FindRidePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__find_ride__["a" /* FindRidePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__find_ride__["a" /* FindRidePage */]),
            ],
        })
    ], FindRidePageModule);
    return FindRidePageModule;
}());

//# sourceMappingURL=find-ride.module.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindRidePage; });
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
 * Generated class for the FindRidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FindRidePage = /** @class */ (function () {
    function FindRidePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FindRidePage.prototype.ionViewDidLoad = function () {
    };
    FindRidePage.prototype.searchresult = function () {
        this.navCtrl.push('SearchResultPage');
    };
    FindRidePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    FindRidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-find-ride',template:/*ion-inline-start:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\find-ride\find-ride.html"*/'<ion-header class="jr_theme_color1 jr_header">\n\n    <button menuToggle ion-button class="jr_left jr_header_btn jr_sidemenu_icon"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Find a ride</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="jr_ride_wrapper">\n\n    <h5>Looking for a Ride?</h5>\n\n    <div class="jr_offer_bg">\n\n        <img src="assets/img/jr_find_img.png">\n\n    </div>\n\n    <div class="jr_ride_form">\n\n      <input class="jr_ride_input1" placeholder="From">\n\n      <br><br>\n\n      <input class="jr_ride_input2" placeholder="To">\n\n      <div class="jr_box"></div>\n\n      <br>\n\n      <br>\n\n      <br>\n\n      <div class="jr_time_div">\n\n          <select class="jr_select">\n\n            <option>Travel date</option>\n\n          </select>\n\n        <div class="j_clear"></div>\n\n      </div>\n\n      <br>\n\n      <div class="jr_time_div">\n\n          <select class="jr_select">\n\n            <option>Leaving after</option>\n\n          </select>\n\n        <div class="j_clear"></div>\n\n      </div>\n\n      <div class="jr_seat_number">\n\n        <ul>\n\n          <span>Number of Seats</span>\n\n          <li>1</li>\n\n          <li>2</li>\n\n          <li>3</li>\n\n        </ul>\n\n      </div>\n\n    </div>\n\n    <div class="jr_bottom_button_bay">\n\n      <button ion-button class="jr_offer_ride3" (click)="searchresult()">Find a Ride</button>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\find-ride\find-ride.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], FindRidePage);
    return FindRidePage;
}());

//# sourceMappingURL=find-ride.js.map

/***/ })

});
//# sourceMappingURL=21.js.map