webpackJsonp([4],{

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultPageModule", function() { return SearchResultPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_result__ = __webpack_require__(780);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchResultPageModule = /** @class */ (function () {
    function SearchResultPageModule() {
    }
    SearchResultPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_result__["a" /* SearchResultPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_result__["a" /* SearchResultPage */]),
            ],
        })
    ], SearchResultPageModule);
    return SearchResultPageModule;
}());

//# sourceMappingURL=search-result.module.js.map

/***/ }),

/***/ 780:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultPage; });
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
 * Generated class for the SearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchResultPage = /** @class */ (function () {
    function SearchResultPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    SearchResultPage.prototype.ionViewDidLoad = function () {
    };
    SearchResultPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SearchResultPage.prototype.filter = function () {
        var modal = this.modalCtrl.create('Filter');
        modal.present();
    };
    SearchResultPage.prototype.alert = function () {
        var modal = this.modalCtrl.create('Alert');
        modal.present();
    };
    SearchResultPage.prototype.searchmain = function () {
        this.navCtrl.push('SearchMainPage');
    };
    SearchResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-result',template:/*ion-inline-start:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\search-result\search-result.html"*/'<ion-header class="jr_theme_color jr_header">\n    <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="goBack()"></button>\n    <div class="jr_header_title">\n      <h4> Cape Town to Durban</h4>\n    </div>\n    <button ion-button class="jr_right jr_header_btn jr_alert_icon" (click)="alert()"></button>\n    <div class="jr_clear"></div>\n  </ion-header>\n  <ion-content>\n    <div class="jr_profile_content" style="width:90%;">\n  \n      <!-- <div class="jr_no_ride">\n        <div class="jr_profile_content">\n        <div class="jr_text_center">\n          <div class="jr_edit_row jr_text_center">\n            <br><br>\n                <h3 class="jr_margintop0">No Rides</h3>\n          <h4 class="jr_padding0 jr_margin0">matching your search</h4>\n          <hr>\n          </div>\n          <div class="jr_offer_bg">\n            <img src="assets/img/jr_noride_bg.png">\n          </div>\n          <p>Create an alert to be notified of new rides or<br> offer a rides and get co- travellers</p>\n          </div>\n        </div>\n        <div class="jr_bottom_button_bay">\n          <button ion-button class="jr_offer_ride2" (click)="alert()">Create a ride alert</button>\n        </div>\n      </div> -->\n  \n      <div class="jr_duration">\n        <div class="jr_avg_duration">\n          <p>Average Duration</p>\n          <h4>06 hrs 50 mins</h4>\n        </div>\n        <div class="jr_avg_price">\n          <p>from</p>\n          <h4><strong>₹ 495.00</strong></h4>\n        </div>\n        <div class="jr_clear"></div>\n      </div>\n      <div class="jr_search_main">\n        <h5>TODAY</h5>\n        <ul>\n          <li (click)="searchmain()">\n            <div class="jr_search_top_bay">\n              <div class="jr_search_top_bay_left">\n                <h6>09:00<strong>Cape Town</strong></h6>\n                <h6>18:00<strong>Durban</strong></h6>\n              </div>\n              <div class="jr_search_top_bay_right">\n                <h6>₹ 600</h6>\n              </div>\n              <div class="jr_clear"></div>\n            </div>\n            <div class="jr_search_bottom_bay">\n              <div class="jr_search_profile">\n                <div class="jr_search_verified"><img src="assets/img/jr_verified_prof.png"></div>\n                <img src="assets/img/e_img14.png">\n              </div>\n              <div class="jr_search_profile_detail">\n                <h6>CREZANDRA BOTHA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;37 Y/O</h6>\n                <span class="jr_star_ratting"><img src="assets/img/jr_star.png"><strong>3/5</strong>1 Rattings</span>\n                <ul>\n                  <li><span>04s</span></li>\n                  <li><span>12h</span></li>\n                </ul>\n              </div>\n              <div class="jr_clear"></div>\n            </div>\n          </li>\n        \n          <li>\n            <div class="jr_search_top_bay">\n              <div class="jr_search_top_bay_left">\n                <h6>09:00<strong>Cape Town</strong></h6>\n                <h6>18:00<strong>Durban</strong></h6>\n              </div>\n              <div class="jr_search_top_bay_right">\n                <h6>₹ 600</h6>\n              </div>\n              <div class="jr_clear"></div>\n            </div>\n            <div class="jr_search_bottom_bay">\n              <div class="jr_search_profile">\n                <div class="jr_search_verified"><img src="assets/img/jr_verified_prof.png"></div>\n                <img src="assets/img/e_img14.png">\n              </div>\n              <div class="jr_search_profile_detail">\n                <h6>MARIA JONES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;37 Y/O</h6>\n                <span class="jr_star_ratting"><img src="assets/img/jr_star.png"><strong>3/5</strong>1 Rattings</span>\n                <ul>\n                  <li><span>04s</span></li>\n                  <li><span>12h</span></li>\n                </ul>\n              </div>\n              <div class="jr_clear"></div>\n            </div>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <button ion-button class="jr_filter_icon" (click)="filter()">\n    </button>\n  </ion-content>'/*ion-inline-end:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\search-result\search-result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], SearchResultPage);
    return SearchResultPage;
}());

//# sourceMappingURL=search-result.js.map

/***/ })

});
//# sourceMappingURL=4.js.map