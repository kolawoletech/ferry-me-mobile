webpackJsonp([5],{

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchMainPageModule", function() { return SearchMainPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_main__ = __webpack_require__(778);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchMainPageModule = /** @class */ (function () {
    function SearchMainPageModule() {
    }
    SearchMainPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search_main__["a" /* SearchMainPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search_main__["a" /* SearchMainPage */]),
            ],
        })
    ], SearchMainPageModule);
    return SearchMainPageModule;
}());

//# sourceMappingURL=search-main.module.js.map

/***/ }),

/***/ 778:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchMainPage; });
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
 * Generated class for the SearchMainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchMainPage = /** @class */ (function () {
    function SearchMainPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    SearchMainPage.prototype.ionViewDidLoad = function () {
    };
    SearchMainPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SearchMainPage.prototype.bookpopup = function () {
        var modal = this.modalCtrl.create('Bookpopup');
        modal.present();
    };
    SearchMainPage.prototype.ask = function () {
        var modal = this.modalCtrl.create('Ask');
        modal.present();
    };
    SearchMainPage.prototype.contact = function () {
        var modal = this.modalCtrl.create('Contact');
        modal.present();
    };
    SearchMainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search-main',template:/*ion-inline-start:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\search-main\search-main.html"*/'<ion-header class="jr_theme_color jr_header">\n    <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="goBack()"></button>\n    <div class="jr_header_title">\n      <h4>Durban to Capetown</h4>\n    </div>\n    <button ion-button class="jr_right jr_header_btn"></button>\n    <div class="jr_clear"></div>\n  </ion-header>\n  \n  \n  <ion-content padding>\n  <div class="jr_profile_content1">\n  \n    <div class="jr_search_bottom_bay">\n      <div class="jr_search_profile">\n        <div class="jr_search_verified"><img src="assets/img/jr_verified_prof.png"></div>\n        <img src="assets/img/e_img14.png">\n      </div>\n      <div class="jr_search_profile_detail">\n        <h6>CREZANDRA BOTHA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;37 Y/O</h6>\n        <span class="jr_star_ratting"><img src="assets/img/jr_star.png"><strong>3/5</strong>1 Rattings</span><br>\n        <button ion-button class="jr_bookonline" (click)="bookpopup()">Book online</button>\n      </div>\n      <div class="jr_clear"></div>\n      <hr>\n    </div>\n    <div class="jr_preference_bay">\n      <ul>\n        <li><img src="assets/img/e_pre1.png"></li>\n        <li><img src="assets/img/e_pre2.png"></li>\n        <li><img src="assets/img/e_pre3.png"></li>\n        <li><img src="assets/img/e_pre4.png"></li>\n      </ul>\n    </div>\n    <ul class="jr_verification">\n      <li class="verified">email verified</li>\n      <li class="verified">Phone number verified</li>\n    </ul>\n    <hr>\n    <ul class="jr_verification">\n      <li class="loca">5 Rides offered</li>\n      <li class="time">\n        <div class="child1">Last seen</div>\n        <div class="child2">:&nbsp;Today</div>\n        <div class="jr_clear"></div>\n      </li>\n      <li>\n        <div class="child1">Member Since</div>\n        <div class="child2">:&nbsp;Today</div>\n        <div class="jr_clear"></div>\n      </li>\n      <li class="response">50% message responce rate</li>\n    </ul>\n    <hr>\n    <div class="jr_time_schedule">\n      <h5><strong>Tommorrow,</strong>&nbsp;09:00 am</h5>\n    </div>\n    <div class="jr_from_to">\n      <li>\n        <div class="child1 from">09:00<div class="jr_box1"></div></div>\n        <div class="child2"><strong>Cape Town</strong>\n        <p>University of Cape Town<br>\n        South Africa</p></div>\n        <div class="jr_clear"></div>\n      </li>\n      <li>\n        <div class="child1 to">05:00</div>\n        <div class="child2"><strong>Durban</strong>\n        <p>UKZN<br>\n        South Africa</p></div>\n        <div class="jr_clear"></div>\n      </li>\n    </div>\n    <hr>\n    <div class="jr_available_seats">\n      <div class="jr_seats_left"><strong>3</strong> Seats Avialable</div>\n      <div class="jr_seats_right"><strong>R600/</strong> Seat</div>\n      <div class="jr_clear"></div>\n    </div>\n    <button class="jr_contact_btn" (click)="contact()">Contact the Car Owner</button>\n    <h5>COMMENTS FROM MARTIAN</h5>\n    <p>“ Should provide Govt. ID, no smoking inside the car,\n     allowed medium weight luggage”</p>\n     <hr>\n     <ul class="jr_verification">\n       <li class="loca1"><strong>300</strong> km, 06 h 30 m</li>\n       <li class="detour">Detour: max 20 min</li>\n       <li class="flex">Flexibility: On time</li>\n       <li class="seat1">Max. 2 seats in the back</li>\n     </ul>\n     <hr>\n     <h5>CAR AND CAR OWNER INFO</h5>\n     <div class="jr_car_info" (click)="ask()">\n       <div class="jr_car_info_left">\n         <div class="jr_car_info_photo"><img src="assets/img/jr_car_img.png"></div>\n         <div class="jr_car_info_detail">\n           <h6>Audi A8</h6>\n           <p>Blue<br>\n             Luxury</p>\n           </div>\n           <div class="jr_clear"></div>\n       </div>\n       <div class="jr_car_info_right">\n         <p><img src="assets/img/jr_luggage.png"><span>Small Luggage</span></p>\n       </div>\n       <div class="jr_clear"></div>\n     </div>\n     <hr>\n     <div class="jr_bottom_button_bay1">\n       <br>\n       <button ion-button class="jr_report" >Report this ride</button>\n     </div>\n  </div>\n  \n  </ion-content>'/*ion-inline-end:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\search-main\search-main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], SearchMainPage);
    return SearchMainPage;
}());

//# sourceMappingURL=search-main.js.map

/***/ })

});
//# sourceMappingURL=5.js.map