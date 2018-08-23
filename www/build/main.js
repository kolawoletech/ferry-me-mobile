webpackJsonp([0],{

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Editprofile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editbio_editbio__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editphoto_editphoto__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Editprofile = (function () {
    function Editprofile(navCtrl, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
    }
    Editprofile.prototype.ionViewDidLoad = function () {
    };
    Editprofile.prototype.editbio = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__editbio_editbio__["a" /* Editbio */]);
        modal.present();
    };
    Editprofile.prototype.editphoto = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__editphoto_editphoto__["a" /* Editphoto */]);
        modal.present();
    };
    Editprofile.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Editprofile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-editprofile',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\editprofile\editprofile.html"*/'<ion-header class="jr_theme_color jr_header">\n\n<button menuToggle ion-button class="jr_left jr_header_btn jr_sidemenu_icon"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Edit Profile</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="jr_profile_wrapper">\n\n    <div class="jr_profile_banner">\n\n      <div class="jr_profile_photo">\n\n        <div class="jr_profile_photo_edit" (click)="editphoto()">\n\n          <img src="assets/img/jr_edit.png">\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="jr_profile_content">\n\n      <h4>Mosa Tsoai </h4>\n\n      <hr>\n\n      <br>\n\n      <div class="jr_profile_tab_content">\n\n        <h4>ABOUT YOU</h4>\n\n        <div class="jr_edit_row">\n\n            <span>\n\n              <h5>GENDER\n\n              <select class="jr_edit_select">\n\n                <option>MALE</option>\n\n                <option>FEMALE</option>\n\n              </select>\n\n              </h5>\n\n            </span>\n\n        </div>\n\n        <div class="jr_edit_row">\n\n          <h5>FIRST NAME</h5>\n\n          <input class="jr_edit_profile_input" placeholder="FIRST NAME">\n\n        </div>\n\n        <div class="jr_edit_row">\n\n          <h5>LAST NAME</h5>\n\n          <input class="jr_edit_profile_input" placeholder="LAST NAME">\n\n        </div>\n\n        <div class="jr_edit_row">\n\n          <h5>DATE OF BIRTH</h5>\n\n          <div>\n\n            <div class="jr_width25">\n\n              <select class="jr_edit_select1">\n\n                <option>dd</option>\n\n              </select>\n\n            </div>\n\n            <div class="jr_width5">&nbsp;</div>\n\n            <div class="jr_width25">\n\n              <select class="jr_edit_select1">\n\n                <option>mm</option>\n\n              </select>\n\n            </div>\n\n            <div class="jr_width5">&nbsp;</div>\n\n            <div class="jr_width40">\n\n              <select class="jr_edit_select1">\n\n                <option>yyyy</option>\n\n              </select>\n\n            </div>\n\n            <div class="jr_clear"></div>\n\n          </div>\n\n        </div>\n\n        <div class="jr_edit_row jr_padding0">\n\n          <h4>YOUR BIOGRAPHY</h4>\n\n          <p>Contrary to popular belief, Lorem Ipsum is not simply random text.\n\n             It has roots in a piece of classical Latin literature from 45 BC,\n\n              making it over 2000 years old. Richard McClintock,\n\n               a Latin professor at Hampden-Sydney College in Virginia,\n\n             looked up one of the more obscure Latin words, consectetur,\n\n             from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered</p>\n\n             <button ion-button class="jr_addcomment_btn" (click)="editbio()">edit biography</button>\n\n        </div>\n\n        <div class="jr_edit_row jr_padding0" >\n\n          <h4>EMAIL</h4>\n\n          <input class="jr_edit_profile_input verified" placeholder="email@dummy.com">\n\n        </div>\n\n        <div class="jr_edit_row jr_padding0">\n\n          <h4>PHONE NUMBER</h4>\n\n          <div>\n\n            <div class="jr_width30">\n\n              <select class="jr_edit_select1">\n\n                <option>+91</option>\n\n              </select>\n\n            </div>\n\n            <div class="jr_width70">\n\n              <input class="jr_edit_profile_input" placeholder="9961531199">\n\n            </div>\n\n            <div class="jr_clear"></div>\n\n          </div>\n\n        </div>\n\n        <div class="jr_edit_row jr_padding0">\n\n          <div class="jr_custom">\n\n              <input id="check1" type="checkbox" name="check" value="check1">\n\n              <label for="check1">Don’t display my phone number to anyone</label>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="jr_bottom_button_bay">\n\n      <button ion-button class="jr_offer_ride2">Save</button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\editprofile\editprofile.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], Editprofile);
    return Editprofile;
}());
//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Editphoto; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Editphoto = (function () {
    function Editphoto(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    Editphoto.prototype.ionViewDidLoad = function () {
    };
    Editphoto.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Editphoto = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-editphoto',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\editphoto\editphoto.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Edit Photo</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="jr_profile_wrapper">\n\n    <div class="jr_profile_banner">\n\n      <div class="jr_profile_photo">\n\n        <div class="jr_profile_photo_edit">\n\n          <img src="assets/img/jr_edit.png">\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="jr_profile_content">\n\n      <br>\n\n      <div class="jr_text_center">\n\n          <button ion-button class="jr_addcomment_btn">Choose Photo</button>\n\n      </div>\n\n <br>\n\n      <hr>\n\n      <div class="jr_text_center">\n\n        <div class="jr_edit_row jr_text_center">\n\n          <br>\n\n        <h3>Tips</h3>\n\n        <h4 class="jr_padding0 jr_margin0">to Take Better Photos</h4>\n\n      </div>\n\n        <div class="jr_edit_row ">\n\n        <p class="jr_text_center">\n\n          No sunglasses<br>\n\nFacing the camera<br>\n\nYou alone<br>\n\nClear and bright<br>\n\n\n\n\n\n        </p>\n\n      </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\editphoto\editphoto.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Editphoto);
    return Editphoto;
}());
//# sourceMappingURL=editphoto.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__password_password__ = __webpack_require__(483);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Login = (function () {
    function Login(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    Login.prototype.ionViewDidLoad = function () {
    };
    Login.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* Home */]);
    };
    Login.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Login.prototype.password = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__password_password__["a" /* Password */]);
        modal.present();
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\login\login.html"*/'\n\n<ion-content class="jr_login_bg">\n\n  <div class="jr_profile_content">\n\n    <div class="jr_login_wrapper">\n\n      <div class="jr_logo">\n\n        <img src="assets/img/jr_logo2.png">\n\n      </div>\n\n      <div class="jr_login_detail">\n\n        <h5>Are you</h5>\n\n        <h4>ready to begin ?</h4>\n\n        <p>Share your car journey with co- travellers just<br> like you and cover all your fuel costs!</p>\n\n        <hr>\n\n        <input class="jr_login_input" placeholder="Username">\n\n        <input class="jr_login_input" placeholder="Password">\n\n        <button ion-button class="jr_offer_ride2" (click)="home()">LOGIN</button>\n\n        <p (click)="password()"><i>Forgot Password ?</i></p>\n\n      </div>\n\n      <div class="jr_landing_btm">\n\n        <button ion-button class="jr_btm_btn1" (click)="goBack()">\n\n          <img src="assets/img/jr_arrow1.png">\n\n        </button>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\login\login.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], Login);
    return Login;
}());
//# sourceMappingURL=login.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__findride_findride__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__offerride_offerride__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__message_message__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popovermore_popovermore__ = __webpack_require__(482);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Home = (function () {
    function Home(navCtrl, modalCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
    }
    Home.prototype.ionViewDidLoad = function () {
        this.tab = "active";
    };
    Home.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_6__popovermore_popovermore__["a" /* Popovermore */]);
        popover.present({
            ev: myEvent
        });
    };
    Home.prototype.offerride = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__offerride_offerride__["a" /* Offerride */]);
    };
    Home.prototype.findride = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__findride_findride__["a" /* Findride */]);
    };
    Home.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* Profile */]);
    };
    Home.prototype.tab_swap = function (type) {
        this.tab = type;
    };
    Home.prototype.message = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__message_message__["a" /* Message */]);
    };
    Home = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\home\home.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button menuToggle ion-button class="jr_left jr_header_btn jr_sidemenu_icon"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Your rides</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn jr_mail_icon" (click)="message()"></button>\n\n  <button ion-button class="jr_right jr_header_btn jr_profile_icon" (click)="profile()"></button>\n\n  <div class="jr_clear"></div>\n\n  <div class="jr_home_tab_bay">\n\n    <ul>\n\n      <li [class.active]="tab==\'active\'" (click)="tab_swap(\'active\')">Current</li>\n\n      <li [class.active]="tab==\'inactive\'" (click)="tab_swap(\'inactive\')">History</li>\n\n    </ul>\n\n  </div>\n\n</ion-header>\n\n<ion-content class="jr_body_wrapper">\n\n  <div class="jr_home_tab_content"  [hidden]="tab==\'inactive\'">\n\n  <div class="jr_div_half">\n\n    <div class="jr_div_overlay">\n\n      <div class="jr_over_inner">\n\n      <button ion-button class="jr_offer_ride" (click)="offerride()">Offer a ride</button>\n\n      <p>Share your car journey with co- travellers just like you and cover all your fuel costs!</p>\n\n    </div>\n\n    </div>\n\n    <img src="assets/img/jr_div_half1.png">\n\n  </div>\n\n  <div class="jr_div_half">\n\n    <div class="jr_div_overlay">\n\n      <div class="jr_over_inner">\n\n      <button ion-button class="jr_offer_ride1" (click)="findride()"> Find a ride</button>\n\n      <p>Yoyfull and comfortable travel, share your journey with all like you</p>\n\n    </div>\n\n    </div>\n\n    <img src="assets/img/jr_div_half2.png">\n\n  </div>\n\n  <!-- <div class="jr_home_active">\n\n    <div class="jr_profile_content">\n\n      <div class="jr_home_offer_ride">\n\n        <ul>\n\n          <div class="jr_offer_ride_top">\n\n            Offered Ride\n\n          </div>\n\n          <li>\n\n            <div class="jr_home_offer_photo"><img src="assets/img/jr_car_img.png"></div>\n\n            <div class="jr_home_offer_detail">\n\n              <h5>Saturday 29, April</h5>\n\n              <h6>05: 00 am</h6>\n\n              <p>Majestic<span><img src="assets/img/jr_forward.png"></span>Christ Tower</p>\n\n              <div class="jr_edit_more" (click)="presentPopover($event)"><img src="assets/img/jr_more.png"></div>\n\n            </div>\n\n            <div class="jr_clear"></div>\n\n\n\n            <div class="jr_home_btm">\n\n              <hr>\n\n              <p>Request waiting for Approval</p>\n\n            </div>\n\n          </li>\n\n          <li>\n\n            <div class="jr_home_offer_photo"><img src="assets/img/jr_car_img.png"></div>\n\n            <div class="jr_home_offer_detail">\n\n              <h5>Saturday 29, April</h5>\n\n              <h6>05: 00 am</h6>\n\n              <p>Electronic City<span><img src="assets/img/jr_forward.png"></span>Madiwala</p>\n\n              <div class="jr_edit_more" (click)="presentPopover($event)"><img src="assets/img/jr_more.png"></div>\n\n            </div>\n\n            <div class="jr_clear"></div>\n\n\n\n          </li>\n\n        </ul>\n\n        <ul>\n\n          <div class="jr_book_ride_top">\n\n            Your Bookings\n\n          </div>\n\n          <li>\n\n            <div class="jr_home_offer_photo"><img src="assets/img/jr_car_img.png"></div>\n\n            <div class="jr_home_offer_detail">\n\n              <h5>Saturday 29, April</h5>\n\n              <h6>05: 00 am</h6>\n\n              <p>Infopark<span><img src="assets/img/jr_forward.png"></span>Piravom</p>\n\n              <div class="jr_edit_more" (click)="presentPopover($event)"><img src="assets/img/jr_more.png"></div>\n\n            </div>\n\n            <div class="jr_clear"></div>\n\n\n\n            <div class="jr_home_btm">\n\n              <hr>\n\n              <p>Request waiting for Approval</p>\n\n            </div>\n\n          </li>\n\n        </ul>\n\n      </div>\n\n    </div>\n\n  </div> -->\n\n</div>\n\n<div class="jr_home_tab_content jr_theme_color jr_text_center" [hidden]="tab==\'active\'" >\n\n  <div class="jr_ride_wrapper">\n\n    <br><br>\n\n    <img src="assets/img/jr_history.png">\n\n    <p>You have no recent rides. They are auto-<br>matically archived after 10 days.</p>\n\n    <button ion-button class="jr_archive_btn">See archived rides</button>\n\n  </div>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\home\home.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* PopoverController */]])
    ], Home);
    return Home;
}());
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Findride; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__searchresult_searchresult__ = __webpack_require__(452);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Findride = (function () {
    function Findride(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Findride.prototype.ionViewDidLoad = function () {
    };
    Findride.prototype.searchresult = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__searchresult_searchresult__["a" /* Searchresult */]);
    };
    Findride.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Findride = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-findride',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\findride\findride.html"*/'<ion-header class="jr_theme_color1 jr_header">\n\n    <button menuToggle ion-button class="jr_left jr_header_btn jr_sidemenu_icon"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Find a ride</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="jr_ride_wrapper">\n\n    <h5>Looking for a Ride?</h5>\n\n    <div class="jr_offer_bg">\n\n        <img src="assets/img/jr_find_img.png">\n\n    </div>\n\n    <div class="jr_ride_form">\n\n      <input class="jr_ride_input1" placeholder="From">\n\n      <br><br>\n\n      <input class="jr_ride_input2" placeholder="To">\n\n      <div class="jr_box"></div>\n\n      <br>\n\n      <br>\n\n      <br>\n\n      <div class="jr_time_div">\n\n          <select class="jr_select">\n\n            <option>Travel date</option>\n\n          </select>\n\n        <div class="j_clear"></div>\n\n      </div>\n\n      <br>\n\n      <div class="jr_time_div">\n\n          <select class="jr_select">\n\n            <option>Leaving after</option>\n\n          </select>\n\n        <div class="j_clear"></div>\n\n      </div>\n\n      <div class="jr_seat_number">\n\n        <ul>\n\n          <span>Number of Seats</span>\n\n          <li>1</li>\n\n          <li>2</li>\n\n          <li>3</li>\n\n        </ul>\n\n      </div>\n\n    </div>\n\n    <div class="jr_bottom_button_bay">\n\n      <button ion-button class="jr_offer_ride3" (click)="searchresult()">Find a Ride</button>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\findride\findride.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], Findride);
    return Findride;
}());
//# sourceMappingURL=findride.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bookpopup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__secureseat_secureseat__ = __webpack_require__(455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Bookpopup = (function () {
    function Bookpopup(navCtrl, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
    }
    Bookpopup.prototype.ionViewDidLoad = function () {
    };
    Bookpopup.prototype.secureseat = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__secureseat_secureseat__["a" /* Secureseat */]);
        modal.present();
        this.viewCtrl.dismiss();
    };
    Bookpopup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-bookpopup',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\bookpopup\bookpopup.html"*/'<ion-content class="jr_transparent jr_text_center">\n\n  <div class="jr_book_pop_up_wrapper">\n\n    <h4 class="jr_padding0 jr_margin0">No of seats to</h4>\n\n    <h3 class="jr_margintop0">Book</h3>\n\n    <hr>\n\n    <div class="jr_counter">\n\n      <span class="jr_count_item"><img src="assets/img/jr_sub.png"></span>\n\n      <span class="jr_count">4</span>\n\n      <span class="jr_count_item"><img src="assets/img/jr_add.png"></span>\n\n    </div>\n\n    <div class="jr_custom">\n\n            <input id="check1" name="check" type="checkbox" value="check1">\n\n            <label for="check1">I accept the T&Cs and\n\nPrivacy Policy</label>\n\n        </div>\n\n        <button ion-button class="jr_bookonline" (click)="secureseat()">Book online</button>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\bookpopup\bookpopup.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], Bookpopup);
    return Bookpopup;
}());
//# sourceMappingURL=bookpopup.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Chat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Chat = (function () {
    function Chat(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    Chat.prototype.ionViewDidLoad = function () {
        console.log('Hello Chat Page');
    };
    Chat.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Chat = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\chat\chat.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Rebacca Lopez</h4>\n\n  </div>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div class="jr_chat_div">\n\n    <ul>\n\n      <li class="jr_sender">\n\n        <div class="jr_search_profile">\n\n          <div class="jr_search_verified"><img src="assets/img/jr_verified_prof.png"></div>\n\n          <img src="assets/img/e_img14.png">\n\n        </div>\n\n        <div class="jr_chat_detail">\n\n          <div class="jr_chat_top"><strong>YOU</strong><span>22/06/2017, 05:15 am</span>\n\n          <div class="jr_clear"></div>\n\n        </div>\n\n          <div class="jr_message">\n\n            Hello is there anyone?\n\n            <div class="chat_i"></div>\n\n          </div>\n\n        </div>\n\n        <div class="jr_clear"></div>\n\n      </li>\n\n\n\n\n\n\n\n      <li class="jr_receiver">\n\n        <div class="jr_search_profile">\n\n          <div class="jr_search_verified"><img src="assets/img/jr_verified_prof.png"></div>\n\n          <img src="assets/img/e_img14.png">\n\n        </div>\n\n        <div class="jr_chat_detail">\n\n          <div class="jr_chat_top"><strong>YOU</strong><span>22/06/2017, 05:15 am</span>\n\n            <div class="jr_clear"></div>\n\n          </div>\n\n          <div class="jr_message">\n\n            How can i help you?\n\n            <div class="chat_i"></div>\n\n          </div>\n\n        </div>\n\n        <div class="jr_clear"></div>\n\n      </li>\n\n    </ul>\n\n    <div class="jr_bottom_button_bay">\n\n      <div class="jr_text_msg" style="margin-bottom:10px;">\n\n        <input class="jr_send_msg" placeholder="Type your message here">\n\n        <div class="jr_attch">\n\n          <span><img src="assets/img/jr_attch_loc.png"></span>\n\n          <span><img src="assets/img/jr_attch_smile.png"></span>\n\n        </div>\n\n      </div>\n\n      <button ion-button class="jr_bottom_send">Send<span><img src="assets/img/jr_send_arw.png"></span></button>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\chat\chat.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Chat);
    return Chat;
}());
//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Offerride; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offerridedetail_offerridedetail__ = __webpack_require__(467);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Offerride = (function () {
    function Offerride(navCtrl) {
        this.navCtrl = navCtrl;
        this.event = {
            month: '2016-11-01',
            timeStarts: '07:43',
            timeEnds: '2050-02-20'
        };
    }
    Offerride.prototype.ionViewDidLoad = function () {
    };
    Offerride.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Offerride.prototype.offerridedetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__offerridedetail_offerridedetail__["a" /* Offerridedetail */]);
    };
    Offerride = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-offerride',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\offerride\offerride.html"*/'<ion-header class="jr_theme_color jr_header">\n    <button menuToggle ion-button class="jr_left jr_header_btn jr_sidemenu_icon"></button>\n  <div class="jr_header_title">\n    <h4>Offer a ride</h4>\n  </div>\n  <button ion-button class="jr_right jr_header_btn"></button>\n  <div class="jr_clear"></div>\n</ion-header>\n<ion-content>\n  <div class="jr_ride_wrapper">\n    <h5>Wanna Offer a Ride ?</h5>\n    <div class="jr_offer_bg">\n        <img src="assets/img/jr_offer_img.png">\n    </div>\n    <div class="jr_ride_form">\n      <input class="jr_ride_input1" placeholder="From">\n      <br><br>\n      <input class="jr_ride_input2" placeholder="To">\n      <div class="jr_box"></div>\n      <div class="jr_custom">\n          <input id="check1" type="checkbox" name="check" value="check1">\n          <label for="check1">Round Trip</label>\n      </div>\n      <div class="jr_time_div">\n        <div class="jr_date">\n          <!-- <input class="jr_input3" placeholder="Departure Date"> -->\n          <ion-item class="jr_input3">\n            <ion-datetime placeholder="Departure Date"  displayFormat="MMM DD YYYY" [(ngModel)]="event.month"></ion-datetime>\n          </ion-item>\n\n          <div class="jr_clear"></div>\n\n        </div>\n        <div class="jr_time">\n          <select class="jr_select">\n            <option>Time</option>\n          </select>\n        </div>\n        <div class="j_clear"></div>\n      </div>\n\n    </div>\n    <div class="jr_bottom_button_bay">\n      <button ion-button class="jr_offer_ride2" (click)="offerridedetail()">Continue</button>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\offerride\offerride.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], Offerride);
    return Offerride;
}());
//# sourceMappingURL=offerride.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popover_popover__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editprofile_editprofile__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editphoto_editphoto__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__editbio_editbio__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__editpreference_editpreference__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__editid_editid__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__addcar_addcar__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__addcarphoto_addcarphoto__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__addnumber_addnumber__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__editcar_editcar__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__publicprofile_publicprofile__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__notification_notification__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__message_message__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var Profile = (function () {
    function Profile(navCtrl, popoverCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.modalCtrl = modalCtrl;
    }
    Profile.prototype.ionViewDidLoad = function () {
        this.tab = "active";
    };
    Profile.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Profile.prototype.tab_swap = function (type) {
        this.tab = type;
    };
    Profile.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__popover_popover__["a" /* Popover */]);
        popover.present({
            ev: myEvent
        });
    };
    Profile.prototype.editprofile = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__editprofile_editprofile__["a" /* Editprofile */]);
        modal.present();
    };
    Profile.prototype.editphoto = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__editphoto_editphoto__["a" /* Editphoto */]);
        modal.present();
    };
    Profile.prototype.editbio = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__editbio_editbio__["a" /* Editbio */]);
        modal.present();
    };
    Profile.prototype.editpreference = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__editpreference_editpreference__["a" /* Editpreference */]);
        modal.present();
    };
    Profile.prototype.editid = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__editid_editid__["a" /* Editid */]);
        modal.present();
    };
    Profile.prototype.addnumber = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__addnumber_addnumber__["a" /* Addnumber */]);
        modal.present();
    };
    Profile.prototype.addcar = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_8__addcar_addcar__["a" /* Addcar */]);
        modal.present();
    };
    Profile.prototype.addcarphoto = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__addcarphoto_addcarphoto__["a" /* Addcarphoto */]);
        modal.present();
    };
    Profile.prototype.editcar = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_11__editcar_editcar__["a" /* Editcar */]);
        modal.present();
    };
    Profile.prototype.publicprofile = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_12__publicprofile_publicprofile__["a" /* Publicprofile */]);
        modal.present();
    };
    Profile.prototype.notification = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__notification_notification__["a" /* Notification */]);
        modal.present();
    };
    Profile.prototype.message = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_14__message_message__["a" /* Message */]);
    };
    Profile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\profile\profile.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="goBack()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Profile</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn jr_mail_icon" (click)="message()"></button>\n\n  <button ion-button class="jr_right jr_header_btn jr_profile_icon"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="jr_profile_wrapper">\n\n    <button class="jr_more_pop_up" (click)="presentPopover($event)"><img src="assets/img/jr_more.png"></button>\n\n    <div class="jr_profile_banner">\n\n      <div class="jr_profile_photo">\n\n        <div class="jr_profile_photo_edit" (click)="editphoto()">\n\n          <img src="assets/img/jr_edit.png">\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="jr_profile_content">\n\n      <h4>Mosa Tsoai</h4>\n\n      <hr>\n\n      <br>\n\n      <div class="jr_profile_tab_bay">\n\n        <li [class.active]="tab==\'active\'" (click)="tab_swap(\'active\')">Details</li>\n\n        <li [class.active]="tab==\'inactive\'" (click)="tab_swap(\'inactive\')">Accounts</li>\n\n        <div class="jr_clear"></div>\n\n      </div>\n\n      <div class="jr_profile_tab_content" [hidden]="tab==\'inactive\'">\n\n        <h4>ABOUT YOU</h4>\n\n        <ul>\n\n          <li (click)="editbio()">Write my Biography</li>\n\n          <li (click)="editpreference()">Add my Preferences</li>\n\n        </ul>\n\n        <hr>\n\n        <h4>VERIFICATION</h4>\n\n        <ul>\n\n          <li (click)="editid()">Verify my ID</li>\n\n          <li (click)="addnumber()">Add my Phone</li>\n\n          <li class="verified">email@dummymail.com</li>\n\n          <li class="verified">Facebook Verified</li>\n\n        </ul>\n\n        <hr>\n\n        <h4>CAR</h4>\n\n        <ul>\n\n          <li (click)="addcar()">Add my Car</li>\n\n          <br>\n\n          <li>\n\n            <div class="jr_car_pic">\n\n              <div class="jr_edit1"  (click)="addcarphoto()"><img src="assets/img/jr_edit1.png"></div>\n\n            </div>\n\n            <div class="jr_car_name" (click)="editcar()">\n\n              <h5>BMW M5</h5>\n\n              <p>Cherry Red</p>\n\n            </div>\n\n            <div class="jr_clear"></div>\n\n          </li>\n\n          <br><br>\n\n        </ul>\n\n        <div class="jr_bottom_button_bay">\n\n          <button ion-button class="jr_offer_ride4" (click)="publicprofile()">See my public profile</button>\n\n        </div>\n\n      </div>\n\n      <div class="jr_profile_tab_content" [hidden]="tab==\'active\'" >\n\n        <h4>PREFERENCES</h4>\n\n        <ul>\n\n          <li (click)="notification()">Notifications</li>\n\n        </ul>\n\n        <hr>\n\n        <h4>ABOUT</h4>\n\n        <ul>\n\n          <li>Help</li>\n\n          <li>Terms & Conditions</li>\n\n          <li>Privacy Policy</li>\n\n          <li>Licenses</li>\n\n        </ul>\n\n        <div class="jr_bottom_button_bay">\n\n          <button ion-button class="jr_offer_ride5">Logout</button>\n\n        </div>\n\n\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\profile\profile.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], Profile);
    return Profile;
}());
//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Editbio; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Editbio = (function () {
    function Editbio(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    Editbio.prototype.ionViewDidLoad = function () {
    };
    Editbio.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Editbio = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-editbio',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\editbio\editbio.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Edit Biography</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="jr_offerride_details">\n\n    <ul>\n\n      <li>\n\n        <h4><img src="assets/img/jr_pr.png">YOUR BIOGRAPHY</h4>\n\n        <textarea class="jr_input_comment" placeholder="Type here" rows="5"></textarea>\n\n      </li>\n\n    </ul>\n\n    <div class="jr_bottom_button_bay">\n\n      <div class="jr_tick" (click)="dismiss()">\n\n        <img src="assets/img/jr_tick.png">\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\editbio\editbio.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Editbio);
    return Editbio;
}());
//# sourceMappingURL=editbio.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Message = (function () {
    function Message(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    Message.prototype.ionViewDidLoad = function () {
        this.tab = "active";
    };
    Message.prototype.tab_swap = function (type) {
        this.tab = type;
    };
    Message.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Message.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* Profile */]);
    };
    Message = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-message',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\message\message.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Messages</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn jr_mail_icon"></button>\n\n  <button ion-button class="jr_right jr_header_btn jr_profile_icon" (click)="profile()"></button>\n\n  <div class="jr_clear"></div>\n\n  <div class="jr_home_tab_bay1">\n\n    <ul>\n\n      <li [class.active]="tab==\'active\'" (click)="tab_swap(\'active\')">Messages</li>\n\n      <li [class.active]="tab==\'inactive\'" (click)="tab_swap(\'inactive\')">Notifications</li>\n\n      <div class="jr_clear"></div>\n\n    </ul>\n\n  </div>\n\n</ion-header>\n\n  <ion-content class="jr_body_wrapper">\n\n    <div class="jr_message_wrapper">\n\n      <div class="jr_home_tab_content"  [hidden]="tab==\'inactive\'">\n\n        <div class="jr_profile_content">\n\n          <div class="jr_no_msg">\n\n          <div class="jr_offer_bg">\n\n              <img src="assets/img/jr_nomsg.png">\n\n          </div>\n\n          <div class="jr_text_center">\n\n            <div class="jr_edit_row jr_text_center">\n\n              <br><br>\n\n                <hr>\n\n                  <br><br>\n\n            <h4 class="jr_padding0 jr_margin0">currently you have</h4>\n\n            <h3 class="jr_margintop0">no Messages</h3>\n\n            </div>\n\n            </div>\n\n          </div>\n\n          </div>\n\n      </div>\n\n      <div class="jr_home_tab_content" [hidden]="tab==\'active\'" >\n\n        <div class="jr_profile_content">\n\n          <div class="jr_no_msg">\n\n          <div class="jr_offer_bg">\n\n              <img src="assets/img/jr_no_not.png">\n\n          </div>\n\n          <div class="jr_text_center">\n\n            <div class="jr_edit_row jr_text_center">\n\n              <br><br>\n\n                <hr>\n\n                  <br><br>\n\n            <h4 class="jr_padding0 jr_margin0">currently you have</h4>\n\n            <h3 class="jr_margintop0">no Notification</h3>\n\n            </div>\n\n            </div>\n\n          </div>\n\n          <!-- <div class="jr_notification_main">\n\n            <ul>\n\n                <li>\n\n                  <div class="jr_not_left">\n\n                  <h4>Verify your Govt. ID</h4>\n\n                  <p>Verify your Govt. ID and more people will choose to travel with you.</p>\n\n                  </div>\n\n                  <div class="jr_not_close">\n\n                    <img src="assets/img/jr_not_close.png">\n\n                  </div>\n\n                  <div class="jr_clear"></div>\n\n                </li>\n\n            </ul>\n\n          </div> -->\n\n          </div>\n\n      </div>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\message\message.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Message);
    return Message;
}());
//# sourceMappingURL=message.js.map

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 228;

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Landing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(484);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Landing = (function () {
    function Landing(navCtrl) {
        this.navCtrl = navCtrl;
        this.showPrev = true;
        this.showNext = false;
        this.currentIndex = 0;
    }
    Landing.prototype.goToNextSlide = function () {
        this.slider.slideNext();
    };
    Landing.prototype.goToPrevSlide = function () {
        this.slider.slidePrev();
    };
    Landing.prototype.onSlideChanged = function () {
        this.showPrev = this.slider.isBeginning();
        this.showNext = this.slider.isEnd();
        this.currentIndex = this.slider.getActiveIndex();
    };
    Landing.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* Home */]);
    };
    Landing.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* Login */]);
    };
    Landing.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* Signup */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ViewChild */])('mySlider'), 
        __metadata('design:type', __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], Landing.prototype, "slider", void 0);
    Landing = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-landing',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\landing\landing.html"*/'\n\n\n\n<ion-content class="jr_landing_bg">\n\n   <ion-slides  pager="true" #mySlider (ionDidChange)="onSlideChanged()">\n\n     <ion-slide class="jr_slide jr_landing_overlay">\n\n       <div class="jr_slider_inner">\n\n         <h4>Welcome to</h4>\n\n         <h3><strong>FerryMe</strong></h3>\n\n         <h4> Rides</h4>\n\n         <hr>\n\n         <p>instantly find a traveling partner for short and long distance trips<br> as well as connect passengers and drivers for events related trip<br> to share journeys.</p>\n\n         <div class="jr_space"></div>\n\n      </div>\n\n     </ion-slide>\n\n     <ion-slide class="jr_slide jr_landing_overlay">\n\n       <div class="jr_slider_inner">\n\n         <h4>You can</h4>\n\n         <h3><strong>Offer a Ride</strong></h3>\n\n         <hr>\n\n         <p>Share your car journey with co- travellers just like you and cover all your fuel costs!</p>\n\n         <div class="jr_space"></div>\n\n      </div>\n\n     </ion-slide>\n\n     <ion-slide class="jr_slide jr_landing_overlay">\n\n       <div class="jr_slider_inner">\n\n         <h4>or</h4>\n\n         <h3><strong>Find a Ride</strong></h3>\n\n         <hr>\n\n         <p>Joyfull and comfortable travel, share your journey with all like you</p>\n\n         <div class="jr_space"></div>\n\n      </div>\n\n     </ion-slide>\n\n     <ion-slide class="jr_slide jr_landing_overlay1 animate fadeIn">\n\n       <div class="jr_slider_inner">\n\n         <h4>Choose a trusted people</h4>\n\n         <h3><strong>to travel with you</strong></h3>\n\n         <hr>\n\n         <div class="jr_icon_bar">\n\n           <span><img src="assets/img/jr_verified.png"></span>\n\n           <span><img src="assets/img/jr_ratting.png"></span>\n\n           <span><img src="assets/img/jr_phone.png"></span>\n\n          </div>\n\n         <p>Trusted Profiles<br>\n\n         Ratting<br>\n\n       Verified Contact</p>\n\n         <div class="jr_space" style="height:200px;"></div>\n\n      </div>\n\n     </ion-slide>\n\n   </ion-slides>\n\n     <div class="jr_landing_btm">\n\n       <button ion-button class="jr_btm_btn" [hidden] ="currentIndex != 0"  (click)="goToNextSlide()">\n\n         Know how\n\n       </button>\n\n       <button ion-button class="jr_btm_btn animate fadeInLeft" style="width:40px;height:40px;border-radius:50%;padding: 10px;" [hidden]="currentIndex == 0 || currentIndex == 3"  (click)="goToNextSlide()">\n\n         <img src="assets/img/jr_arrow.png">\n\n       </button>\n\n       <div class="clear"></div>\n\n       <div class="jr_last_slide_btn_bar" [hidden] ="currentIndex != 3">\n\n         <button ion-button class="jr_strtd_btn" (click)="home()">GET STARTED</button>\n\n         <div class="jr_sign_bar">\n\n           <ul>\n\n             <li ion-button (click)="login()">LOGIN</li>\n\n             <li ion-button (click)="signup()">SIGN UP</li>\n\n           </ul>\n\n         </div>\n\n       </div>\n\n     </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\landing\landing.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], Landing);
    return Landing;
}());
//# sourceMappingURL=landing.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Searchresult; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_filter__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__searchmain_searchmain__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alert_alert__ = __webpack_require__(466);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Searchresult = (function () {
    function Searchresult(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    Searchresult.prototype.ionViewDidLoad = function () {
    };
    Searchresult.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Searchresult.prototype.filter = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__filter_filter__["a" /* Filter */]);
        modal.present();
    };
    Searchresult.prototype.alert = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__alert_alert__["a" /* Alert */]);
        modal.present();
    };
    Searchresult.prototype.searchmain = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__searchmain_searchmain__["a" /* Searchmain */]);
    };
    Searchresult = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-searchresult',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\searchresult\searchresult.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="goBack()"></button>\n\n  <div class="jr_header_title">\n\n    <h4> Cape Town to Durban</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn jr_alert_icon" (click)="alert()"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="jr_profile_content" style="width:90%;">\n\n\n\n    <!-- <div class="jr_no_ride">\n\n      <div class="jr_profile_content">\n\n      <div class="jr_text_center">\n\n        <div class="jr_edit_row jr_text_center">\n\n          <br><br>\n\n              <h3 class="jr_margintop0">No Rides</h3>\n\n        <h4 class="jr_padding0 jr_margin0">matching your search</h4>\n\n        <hr>\n\n        </div>\n\n        <div class="jr_offer_bg">\n\n          <img src="assets/img/jr_noride_bg.png">\n\n        </div>\n\n        <p>Create an alert to be notified of new rides or<br> offer a rides and get co- travellers</p>\n\n        </div>\n\n      </div>\n\n      <div class="jr_bottom_button_bay">\n\n        <button ion-button class="jr_offer_ride2" (click)="alert()">Create a ride alert</button>\n\n      </div>\n\n    </div> -->\n\n\n\n    <div class="jr_duration">\n\n      <div class="jr_avg_duration">\n\n        <p>Average Duration</p>\n\n        <h4>06 hrs 50 mins</h4>\n\n      </div>\n\n      <div class="jr_avg_price">\n\n        <p>from</p>\n\n        <h4><strong>₹ 495.00</strong></h4>\n\n      </div>\n\n      <div class="jr_clear"></div>\n\n    </div>\n\n    <div class="jr_search_main">\n\n      <h5>TODAY</h5>\n\n      <ul>\n\n        <li (click)="searchmain()">\n\n          <div class="jr_search_top_bay">\n\n            <div class="jr_search_top_bay_left">\n\n              <h6>09:00<strong>Cape Town</strong></h6>\n\n              <h6>18:00<strong>Durban</strong></h6>\n\n            </div>\n\n            <div class="jr_search_top_bay_right">\n\n              <h6>₹ 600</h6>\n\n            </div>\n\n            <div class="jr_clear"></div>\n\n          </div>\n\n          <div class="jr_search_bottom_bay">\n\n            <div class="jr_search_profile">\n\n              <div class="jr_search_verified"><img src="assets/img/jr_verified_prof.png"></div>\n\n              <img src="assets/img/e_img14.png">\n\n            </div>\n\n            <div class="jr_search_profile_detail">\n\n              <h6>MARIA LORENZA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;37 Y/O</h6>\n\n              <span class="jr_star_ratting"><img src="assets/img/jr_star.png"><strong>3/5</strong>1 Rattings</span>\n\n              <ul>\n\n                <li><span>04s</span></li>\n\n                <li><span>12h</span></li>\n\n              </ul>\n\n            </div>\n\n            <div class="jr_clear"></div>\n\n          </div>\n\n        </li>\n\n      \n\n        <li>\n\n          <div class="jr_search_top_bay">\n\n            <div class="jr_search_top_bay_left">\n\n              <h6>09:00<strong>Cape Town</strong></h6>\n\n              <h6>18:00<strong>Durban</strong></h6>\n\n            </div>\n\n            <div class="jr_search_top_bay_right">\n\n              <h6>₹ 600</h6>\n\n            </div>\n\n            <div class="jr_clear"></div>\n\n          </div>\n\n          <div class="jr_search_bottom_bay">\n\n            <div class="jr_search_profile">\n\n              <div class="jr_search_verified"><img src="assets/img/jr_verified_prof.png"></div>\n\n              <img src="assets/img/e_img14.png">\n\n            </div>\n\n            <div class="jr_search_profile_detail">\n\n              <h6>MARIA LORENZA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;37 Y/O</h6>\n\n              <span class="jr_star_ratting"><img src="assets/img/jr_star.png"><strong>3/5</strong>1 Rattings</span>\n\n              <ul>\n\n                <li><span>04s</span></li>\n\n                <li><span>12h</span></li>\n\n              </ul>\n\n            </div>\n\n            <div class="jr_clear"></div>\n\n          </div>\n\n        </li>\n\n      </ul>\n\n    </div>\n\n  </div>\n\n  <button ion-button class="jr_filter_icon" (click)="filter()">\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\searchresult\searchresult.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], Searchresult);
    return Searchresult;
}());
//# sourceMappingURL=searchresult.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Filter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Filter = (function () {
    function Filter(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    Filter.prototype.ionViewDidLoad = function () {
    };
    Filter.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Filter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-filter',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\filter\filter.html"*/'\n\n<ion-content>\n\n  <div class="jr_profile_content">\n\n    <br>\n\n    <br>\n\n      <div class="jr_text_center">\n\n        <div class="jr_edit_row jr_text_center">\n\n          <h3 class="jr_margintop0">Search Filter</h3>\n\n          <hr>\n\n        </div>\n\n      </div>\n\n        <div class="jr_edit_row ">\n\n          <select class="jr_select">\n\n            <option>Travel date</option>\n\n          </select>\n\n        </div>\n\n        <div class="jr_edit_row ">\n\n          <select class="jr_select">\n\n            <option>Leaving after</option>\n\n          </select>\n\n        </div>\n\n        <div class="jr_profile_tab_content">\n\n          <h4>No of Seats</h4>\n\n          <div class="jr_seat_number" style="padding-top:0px;">\n\n            <ul>\n\n              <li>1</li>\n\n              <li>2</li>\n\n              <li>3</li>\n\n              <li>4</li>\n\n              <li>5</li>\n\n            </ul>\n\n          </div>\n\n          <div class="jr_edit_row ">\n\n          <h4>Price per co- travellers</h4>\n\n          </div>\n\n        <div class="jr_edit_row ">\n\n          <p>Approval time</p>\n\n          <select class="jr_select jr_bordernone">\n\n            <option><strong>Under 6 h</strong></option>\n\n          </select>\n\n        </div>\n\n        <div class="jr_edit_row ">\n\n          <!-- <div>\n\n            <ion-item>\n\n              <ion-label> Show only people with photos</ion-label>\n\n              <ion-toggle disabled checked="false"></ion-toggle>\n\n            </ion-item>\n\n          </div> -->\n\n        </div>\n\n        </div>\n\n    </div>\n\n    <button ion-button class="jr_filter_okay" (click)="dismiss()">\n\n    </button>\n\n    <button ion-button class="jr_filter_close" (click)="dismiss()">\n\n    </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\filter\filter.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Filter);
    return Filter;
}());
//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Searchmain; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookpopup_bookpopup__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ask_ask__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(465);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Searchmain = (function () {
    function Searchmain(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    Searchmain.prototype.ionViewDidLoad = function () {
    };
    Searchmain.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Searchmain.prototype.bookpopup = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__bookpopup_bookpopup__["a" /* Bookpopup */]);
        modal.present();
    };
    Searchmain.prototype.ask = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__ask_ask__["a" /* Ask */]);
        modal.present();
    };
    Searchmain.prototype.contact = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* Contact */]);
        modal.present();
    };
    Searchmain = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-searchmain',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\searchmain\searchmain.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="goBack()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Durban to Capetown</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n<div class="jr_profile_content1">\n\n\n\n  <div class="jr_search_bottom_bay">\n\n    <div class="jr_search_profile">\n\n      <div class="jr_search_verified"><img src="assets/img/jr_verified_prof.png"></div>\n\n      <img src="assets/img/e_img14.png">\n\n    </div>\n\n    <div class="jr_search_profile_detail">\n\n      <h6>MARIA LORENZA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;37 Y/O</h6>\n\n      <span class="jr_star_ratting"><img src="assets/img/jr_star.png"><strong>3/5</strong>1 Rattings</span><br>\n\n      <button ion-button class="jr_bookonline" (click)="bookpopup()">Book online</button>\n\n    </div>\n\n    <div class="jr_clear"></div>\n\n    <hr>\n\n  </div>\n\n  <div class="jr_preference_bay">\n\n    <ul>\n\n      <li><img src="assets/img/e_pre1.png"></li>\n\n      <li><img src="assets/img/e_pre2.png"></li>\n\n      <li><img src="assets/img/e_pre3.png"></li>\n\n      <li><img src="assets/img/e_pre4.png"></li>\n\n    </ul>\n\n  </div>\n\n  <ul class="jr_verification">\n\n    <li class="verified">email verified</li>\n\n    <li class="verified">Phone number verified</li>\n\n  </ul>\n\n  <hr>\n\n  <ul class="jr_verification">\n\n    <li class="loca">5 Rides offered</li>\n\n    <li class="time">\n\n      <div class="child1">Last seen</div>\n\n      <div class="child2">:&nbsp;Today</div>\n\n      <div class="jr_clear"></div>\n\n    </li>\n\n    <li>\n\n      <div class="child1">Member Since</div>\n\n      <div class="child2">:&nbsp;Today</div>\n\n      <div class="jr_clear"></div>\n\n    </li>\n\n    <li class="response">50% message responce rate</li>\n\n  </ul>\n\n  <hr>\n\n  <div class="jr_time_schedule">\n\n    <h5><strong>Tommorrow,</strong>&nbsp;09:00 am</h5>\n\n  </div>\n\n  <div class="jr_from_to">\n\n    <li>\n\n      <div class="child1 from">09:00<div class="jr_box1"></div></div>\n\n      <div class="child2"><strong>Cape Town</strong>\n\n      <p>University of Cape Town<br>\n\n      South Africa</p></div>\n\n      <div class="jr_clear"></div>\n\n    </li>\n\n    <li>\n\n      <div class="child1 to">05:00</div>\n\n      <div class="child2"><strong>Durban</strong>\n\n      <p>UKZN<br>\n\n      South Africa</p></div>\n\n      <div class="jr_clear"></div>\n\n    </li>\n\n  </div>\n\n  <hr>\n\n  <div class="jr_available_seats">\n\n    <div class="jr_seats_left"><strong>3</strong> Seats Avialable</div>\n\n    <div class="jr_seats_right"><strong>₹600/</strong> Seat</div>\n\n    <div class="jr_clear"></div>\n\n  </div>\n\n  <button class="jr_contact_btn" (click)="contact()">Contact the Car Owner</button>\n\n  <h5>COMMENTS FROM MARTIAN</h5>\n\n  <p>“ Should provide Govt. ID, no smoking inside the car,\n\n   allowed medium weight luggage”</p>\n\n   <hr>\n\n   <ul class="jr_verification">\n\n     <li class="loca1"><strong>300</strong> km, 06 h 30 m</li>\n\n     <li class="detour">Detour: max 20 min</li>\n\n     <li class="flex">Flexibility: On time</li>\n\n     <li class="seat1">Max. 2 seats in the back</li>\n\n   </ul>\n\n   <hr>\n\n   <h5>CAR AND CAR OWNER INFO</h5>\n\n   <div class="jr_car_info" (click)="ask()">\n\n     <div class="jr_car_info_left">\n\n       <div class="jr_car_info_photo"><img src="assets/img/jr_car_img.png"></div>\n\n       <div class="jr_car_info_detail">\n\n         <h6>Audi A8</h6>\n\n         <p>Blue<br>\n\n           Luxury</p>\n\n         </div>\n\n         <div class="jr_clear"></div>\n\n     </div>\n\n     <div class="jr_car_info_right">\n\n       <p><img src="assets/img/jr_luggage.png"><span>Small Luggage</span></p>\n\n     </div>\n\n     <div class="jr_clear"></div>\n\n   </div>\n\n   <hr>\n\n   <div class="jr_bottom_button_bay1">\n\n     <br>\n\n     <button ion-button class="jr_report" >Report this ride</button>\n\n   </div>\n\n</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\searchmain\searchmain.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], Searchmain);
    return Searchmain;
}());
//# sourceMappingURL=searchmain.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Secureseat; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_request__ = __webpack_require__(456);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Secureseat = (function () {
    function Secureseat(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    Secureseat.prototype.ionViewDidLoad = function () {
    };
    Secureseat.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Secureseat.prototype.request = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__request_request__["a" /* Request */]);
    };
    Secureseat = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-secureseat',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\secureseat\secureseat.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Rebacca Lopez</h4>\n\n  </div>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="jr_profile_content1">\n\n    <div class="jr_search_bottom_bay">\n\n      <div class="jr_search_profile">\n\n        <div class="jr_search_verified"><img src="assets/img/jr_verified_prof.png"></div>\n\n        <img src="assets/img/e_img14.png">\n\n      </div>\n\n      <div class="jr_search_profile_detail" style="padding-top:15px;">\n\n        <h6>MARIA LORENZA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;37 Y/O</h6>\n\n        <span class="jr_star_ratting"><img src="assets/img/jr_star.png"><strong>3/5</strong>1 Rattings</span><br>\n\n      </div>\n\n      <div class="jr_clear"></div>\n\n      <hr>\n\n    </div>\n\n    <div class="jr_time_schedule">\n\n      <h5><strong>Tommorrow,</strong>&nbsp;09:00 am</h5>\n\n    </div>\n\n    <div class="jr_from_to">\n\n      <li>\n\n        <div class="child1 from">09:00<div class="jr_box1"></div></div>\n\n        <div class="child2"><strong>Cape Town</strong>\n\n        <p>University of Cape Town<br>\n\n        South Africa</p></div>\n\n        <div class="jr_clear"></div>\n\n      </li>\n\n      <li>\n\n        <div class="child1 to">05:00</div>\n\n        <div class="child2"><strong>Durban</strong>\n\n        <p>UKZN near Durban<br>\n\n        South Africa</p></div>\n\n        <div class="jr_clear"></div>\n\n      </li>\n\n    </div>\n\n    <hr>\n\n    <div class="jr_your_booking">\n\n      <h5>Your Booking</h5>\n\n      <p>Request a reply by</p>\n\n      <select class="jr_select_offer">\n\n        <option>Today, 05:00pm</option>\n\n        </select>\n\n    </div>\n\n    <hr>\n\n    <div class="jr_available_seats">\n\n      <div class="jr_seats_left"><strong>3</strong> Seats Avialable</div>\n\n      <div class="jr_seats_right"><strong>₹600/</strong> Seat</div>\n\n      <div class="jr_clear"></div>\n\n    </div>\n\n    <div class="jr_bottom_button_bay">\n\n\n\n      <button ion-button class="jr_bottom_send" (click)="request()" >Continue<span><img src="assets/img/jr_send_arw.png"></span></button>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\secureseat\secureseat.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Secureseat);
    return Secureseat;
}());
//# sourceMappingURL=secureseat.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Request; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__summary_summary__ = __webpack_require__(457);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Request = (function () {
    function Request(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    Request.prototype.ionViewDidLoad = function () {
    };
    Request.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Request.prototype.summary = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__summary_summary__["a" /* Summary */]);
        modal.present();
    };
    Request = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-request',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\request\request.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="goBack()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Rebacca Lopez</h4>\n\n  </div>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div class="jr_profile_content1">\n\n    <div class="jr_request_confirm">\n\n      <div class="jr_request_left">\n\n        <img src="assets/img/jr_confirm.png">\n\n      </div>\n\n      <div class="jr_request_right">\n\n        <h5>Request send to Driver</h5>\n\n        <p>We will notify you of the driver’s reply before</p>\n\n        <h6>Today 05: 00 am</h6>\n\n      </div>\n\n      <div class="jr_clear"></div>\n\n    </div>\n\n    <div class="jr_search_bottom_bay">\n\n      <div class="jr_search_profile">\n\n        <div class="jr_search_verified"><img src="assets/img/jr_verified_prof.png"></div>\n\n        <img src="assets/img/e_img14.png">\n\n      </div>\n\n      <div class="jr_search_profile_detail" style="padding-top:15px;">\n\n        <h6>MARIA LORENZA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;37 Y/O</h6>\n\n        <span class="jr_star_ratting"><img src="assets/img/jr_star.png"><strong>3/5</strong>1 Rattings</span><br>\n\n      </div>\n\n      <div class="jr_clear"></div>\n\n      <hr>\n\n    </div>\n\n    <div class="jr_time_schedule" style="padding-top:0px;">\n\n      <h5><strong>Tommorrow,</strong>&nbsp;09:00 am</h5>\n\n      <p>Waiting for approval</p>\n\n    </div>\n\n    <div class="jr_from_to">\n\n      <li>\n\n        <div class="child1 from">09:00<div class="jr_box1"></div></div>\n\n        <div class="child2"><strong>Cape Town</strong>\n\n        <p>University of Cape Town<br>\n\n        South Africa</p></div>\n\n        <div class="jr_clear"></div>\n\n      </li>\n\n      <li>\n\n        <div class="child1 to">05:00</div>\n\n        <div class="child2"><strong>Durban</strong>\n\n        <p>UKZN near Durban<br>\n\n        South Africa</p></div>\n\n        <div class="jr_clear"></div>\n\n      </li>\n\n    </div>\n\n    <hr>\n\n    <div class="jr_bottom_button_bay">\n\n\n\n      <button ion-button class="jr_bottom_send" (click)="summary()">Continue<span><img src="assets/img/jr_send_arw.png"></span></button>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\request\request.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], Request);
    return Request;
}());
//# sourceMappingURL=request.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Summary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_chat__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Summary = (function () {
    function Summary(navCtrl, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
    }
    Summary.prototype.ionViewDidLoad = function () {
    };
    Summary.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Summary.prototype.chat = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__chat_chat__["a" /* Chat */]);
        modal.present();
    };
    Summary.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Summary = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-summary',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\summary\summary.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="goBack()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Bookng Summary</h4>\n\n  </div>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div class="jr_profile_content1">\n\n    <div class="jr_summary">\n\n      <div class="jr_home_offer_photo"><img src="assets/img/e_img14.png"></div>\n\n      <div class="jr_home_offer_detail">\n\n        <h5>Rebecca Lopez</h5>\n\n        <h6>Saturday <strong>29</strong> April <strong>05: 00 am</strong></h6>\n\n        <p>Electronic City<span><img src="assets/img/jr_forward.png"></span>Madiwala</p>\n\n      </div>\n\n      <div class="jr_clear"></div>\n\n      <br>\n\n      <hr>\n\n      <div class="jr_summary_details">\n\n        <h5>View ride details<span><img src="assets/img/jr_summary.png"></span></h5>\n\n        <p>Your Booking request is awaiting approval from\n\nRebacca</p>\n\n<p>He has until Today 05: 00 pm to approve your booking\n\nRequest</p>\n\n<br>\n\n<div class="jr_summary_msg" (click)="chat()">\n\n  Send Message\n\n\n\n</div>\n\n      </div>\n\n        </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\summary\summary.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], Summary);
    return Summary;
}());
//# sourceMappingURL=summary.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ask; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ratting_ratting__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__thanks_thanks__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pickup_pickup__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__drop_drop__ = __webpack_require__(463);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Ask = (function () {
    function Ask(navCtrl, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
    }
    Ask.prototype.ionViewDidLoad = function () {
    };
    Ask.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Ask.prototype.ratting = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__ratting_ratting__["a" /* Ratting */]);
        modal.present();
    };
    Ask.prototype.thanks = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__thanks_thanks__["a" /* Thanks */]);
        modal.present();
    };
    Ask.prototype.pickup = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pickup_pickup__["a" /* Pickup */]);
        modal.present();
    };
    Ask.prototype.drop = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__drop_drop__["a" /* Drop */]);
        modal.present();
    };
    Ask = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-ask',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\ask\ask.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Ask about</h4>\n\n  </div>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div class="jr_profile_content" style="width:90%;">\n\n    <div class="jr_offer_bg">\n\n        <img src="assets/img/jr_ask.png">\n\n    </div>\n\n    <div class="jr_profile_tab_content">\n\n      <ul>\n\n        <br>\n\n        <li (click)="pickup()">Pickup Point</li><br>\n\n        <li (click)="drop()">Drop off Point</li><br>\n\n        <li>Luggage</li><br>\n\n        <li (click)="ratting()">Ratting</li><br>\n\n        <li>Avialable Seats</li><br>\n\n        <li>Transporting parcels or animals</li><br>\n\n        <li (click)="thanks()">Others</li>\n\n      </ul>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\ask\ask.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], Ask);
    return Ask;
}());
//# sourceMappingURL=ask.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ratting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Ratting = (function () {
    function Ratting(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    Ratting.prototype.ionViewDidLoad = function () {
    };
    Ratting.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Ratting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-ratting',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\ratting\ratting.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Ratting</h4>\n\n  </div>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="jr_profile_content jr_paddingbtm0">\n\n    <div class="jr_text_center">\n\n      <div class="jr_edit_row jr_text_center">\n\n        <br>\n\n        <img src="assets/img/jr_bulb.png" style="width: 40px;">\n\n        <br><br>\n\n      <h4 class="jr_padding0 jr_margin0">Trust is fundamental for the community. Ratings help everybody identify trustworthy ride sharers, and makes organising your ride easier.</h4>\n\n      <hr>\n\n      <br>\n\n    </div>\n\n      </div>\n\n      <div class="jr_edit_row">\n\n      <h5><strong>EXCHANGE NEW RATTINGS</strong></h5>\n\n      <p style="margin-top: 5px;margin-bottom:5px;">Find a member by phone number</p>\n\n      <div>\n\n                <div class="jr_country_code">\n\n                  <select class="jr_select" style="margin-top: 5px;">\n\n                    <option>+91</option>\n\n                  </select>\n\n                </div>\n\n                <div class="jr_phone_number">\n\n                  <input class="jr_edit_profile_input" placeholder="9961531199">\n\n                </div>\n\n                  <div class="jr_clear"></div>\n\n              </div>\n\n            </div>\n\n            <div class="jr_edit_row">\n\n              <button ion-button class="jr_member_rate">Find a Member and Rate</button>\n\n            </div>\n\n            <div class="jr_edit_row">\n\n              <h5><strong>YOUR STATS</strong></h5>\n\n              <p style="margin-top: 5px;margin-bottom:5px;">See ratings you left</p>\n\n            </div>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\ratting\ratting.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Ratting);
    return Ratting;
}());
//# sourceMappingURL=ratting.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Thanks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Thanks = (function () {
    function Thanks(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    Thanks.prototype.ionViewDidLoad = function () {
    };
    Thanks.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Thanks = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-thanks',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\thanks\thanks.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Thanks for signing up</h4>\n\n  </div>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="jr_ride_wrapper">\n\n    <h3> You will get an email when new\n\nrides matching your alert\n\nare offered.</h3>\n\n<div class="jr_edit_row ">\n\n  <div class="jr_proofs_list">\n\n    <li><ion-radio ng-model="choice1" ng-value="\'A\'" class="jr_radio_id"></ion-radio><p>Search engines</p><div class="jr_clear"></div></li>\n\n    <li><ion-radio ng-model="choice2" ng-value="\'B\'" class="jr_radio_id"></ion-radio><p>Events or festivals</p><div class="jr_clear"></div></li>\n\n    <li><ion-radio ng-model="choice3" ng-value="\'C\'" class="jr_radio_id"></ion-radio><p>News Articles</p><div class="jr_clear"></div></li>\n\n    <li><ion-radio ng-model="choice3" ng-value="\'D\'" class="jr_radio_id"></ion-radio><p>Outdoor Advertising</p><div class="jr_clear"></div></li>\n\n    <li><ion-radio ng-model="choice3" ng-value="\'E\'" class="jr_radio_id"></ion-radio><p>Youtube or Online sites</p><div class="jr_clear"></div></li>\n\n    <li><ion-radio ng-model="choice3" ng-value="\'F\'" class="jr_radio_id"></ion-radio><p>Petrol pump</p><div class="jr_clear"></div></li>\n\n    <li><ion-radio ng-model="choice3" ng-value="\'G\'" class="jr_radio_id"></ion-radio><p>Television</p><div class="jr_clear"></div></li>\n\n  </div>\n\n</div>\n\n\n\n\n\n    <div class="jr_bottom_button_bay">\n\n      <button ion-button class="jr_offer_ride2" (click)="dismiss()">Submit</button>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\thanks\thanks.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Thanks);
    return Thanks;
}());
//# sourceMappingURL=thanks.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pickup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pickex_pickex__ = __webpack_require__(462);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Pickup = (function () {
    function Pickup(navCtrl, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
    }
    Pickup.prototype.ionViewDidLoad = function () {
    };
    Pickup.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Pickup.prototype.pickex = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__pickex_pickex__["a" /* Pickex */]);
        modal.present();
    };
    Pickup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-pickup',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\pickup\pickup.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Choose a Pickup Points</h4>\n\n  </div>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="jr_pick_drop">\n\n    <div class="jr_map">\n\n    </div>\n\n    <div class="jr_pick_drop_detail">\n\n      <div class="jr_up_arw" (click)="pickex()">\n\n        <img src="assets/img/jr_arw_up.png">\n\n      </div>\n\n      <h5>Pickup Location</h5>\n\n      <hr>\n\n      <ul>\n\n        <li>\n\n          <div class="jr_loc_no">1</div>\n\n          <p>Majestic</p>\n\n          <div class="jr_clear"></div>\n\n        </li>\n\n        <li>\n\n          <div class="jr_loc_no">2</div>\n\n          <p>Kormangala</p>\n\n          <div class="jr_clear"></div>\n\n        </li>\n\n      </ul>\n\n\n\n\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\pickup\pickup.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], Pickup);
    return Pickup;
}());
//# sourceMappingURL=pickup.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pickex; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Pickex = (function () {
    function Pickex(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    Pickex.prototype.ionViewDidLoad = function () {
    };
    Pickex.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Pickex = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-pickex',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\pickex\pickex.html"*/'<ion-content>\n\n  <div class="jr_pick_drop">\n\n    <div class="jr_pick_drop_detail" style="height:100%;">\n\n      <div class="jr_up_arw" (click)="dismiss()">\n\n        <img src="assets/img/jr_arw_down.png">\n\n      </div>\n\n      <h5>Pickup Location</h5>\n\n      <hr>\n\n      <ul>\n\n        <li>\n\n          <div class="jr_loc_no">1</div>\n\n          <p>Majestic</p>\n\n          <div class="jr_clear"></div>\n\n        </li>\n\n        <li>\n\n          <div class="jr_loc_no">2</div>\n\n          <p>Kormangala</p>\n\n          <div class="jr_clear"></div>\n\n        </li>\n\n        <li>\n\n          <div class="jr_loc_no">3</div>\n\n          <p>Madiwala</p>\n\n          <div class="jr_clear"></div>\n\n        </li>\n\n        <li>\n\n          <div class="jr_loc_no">4</div>\n\n          <p>Satelite Junction</p>\n\n          <div class="jr_clear"></div>\n\n        </li>\n\n        <li>\n\n          <div class="jr_loc_no">4</div>\n\n          <p>Blue mont mall</p>\n\n          <div class="jr_clear"></div>\n\n        </li>\n\n        <li>\n\n          <div class="jr_loc_no">4</div>\n\n          <p>Infosys Junction</p>\n\n          <div class="jr_clear"></div>\n\n        </li>\n\n        <hr>\n\n      </ul>\n\n\n\n      <div class="jr_text_center">\n\n        <br>\n\n        <br>\n\n        <button ion-button class="jr_other_place">Other Location</button>\n\n      </div>\n\n\n\n\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\pickex\pickex.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Pickex);
    return Pickex;
}());
//# sourceMappingURL=pickex.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Drop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dropex_dropex__ = __webpack_require__(464);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Drop = (function () {
    function Drop(navCtrl, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
    }
    Drop.prototype.ionViewDidLoad = function () {
    };
    Drop.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Drop.prototype.dropex = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__dropex_dropex__["a" /* Dropex */]);
        modal.present();
    };
    Drop = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-drop',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\drop\drop.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Choose a Drop off Points</h4>\n\n  </div>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="jr_pick_drop">\n\n    <div class="jr_map">\n\n    </div>\n\n    <div class="jr_pick_drop_detail">\n\n      <div class="jr_up_arw" (click)="dropex()">\n\n        <img src="assets/img/jr_arw_up.png">\n\n      </div>\n\n      <h5>Dropoff Location</h5>\n\n      <hr>\n\n      <ul>\n\n        <li>\n\n          <div class="jr_loc_no1"><ion-radio ng-model="choice1" ng-value="\'A\'" class="jr_radio_id"></ion-radio></div>\n\n          <p>Majestic</p>\n\n          <div class="jr_clear"></div>\n\n        </li>\n\n          <button ion-button class="jr_offer_ride2" (click)="dismiss()">Confirm Location</button>\n\n      </ul>\n\n\n\n\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\drop\drop.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Drop);
    return Drop;
}());
//# sourceMappingURL=drop.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dropex; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Dropex = (function () {
    function Dropex(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    Dropex.prototype.ionViewDidLoad = function () {
    };
    Dropex.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Dropex = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-dropex',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\dropex\dropex.html"*/'<ion-content>\n\n  <div class="jr_pick_drop">\n\n    <div class="jr_pick_drop_detail" style="height:100%;">\n\n      <div class="jr_up_arw" (click)="dismiss()">\n\n        <img src="assets/img/jr_arw_down.png">\n\n      </div>\n\n      <h5>Pickup Location</h5>\n\n      <hr>\n\n      <ul>\n\n        <li>\n\n          <div class="jr_loc_no1"><ion-radio ng-model="choice1" ng-value="\'A\'" class="jr_radio_id"></ion-radio></div>\n\n          <p>Majestic</p>\n\n          <div class="jr_clear"></div>\n\n        </li>\n\n        <li>\n\n          <div class="jr_loc_no1"><ion-radio ng-model="choice1" ng-value="\'A\'" class="jr_radio_id"></ion-radio></div>\n\n          <p>Kormangala</p>\n\n          <div class="jr_clear"></div>\n\n        </li>\n\n        <li>\n\n          <div class="jr_loc_no1"><ion-radio ng-model="choice1" ng-value="\'A\'" class="jr_radio_id"></ion-radio></div>\n\n          <p>Madiwala</p>\n\n          <div class="jr_clear"></div>\n\n        </li>\n\n        <li>\n\n          <div class="jr_loc_no1"><ion-radio ng-model="choice1" ng-value="\'A\'" class="jr_radio_id"></ion-radio></div>\n\n          <p>Satelite Junction</p>\n\n          <div class="jr_clear"></div>\n\n        </li>\n\n        <li>\n\n          <div class="jr_loc_no1"><ion-radio ng-model="choice1" ng-value="\'A\'" class="jr_radio_id"></ion-radio></div>\n\n          <p>Blue mont mall</p>\n\n          <div class="jr_clear"></div>\n\n        </li>\n\n        <li>\n\n          <div class="jr_loc_no1"><ion-radio ng-model="choice1" ng-value="\'A\'" class="jr_radio_id"></ion-radio></div>\n\n          <p>Infosys Junction</p>\n\n          <div class="jr_clear"></div>\n\n        </li>\n\n        <hr>\n\n        <button ion-button class="jr_offer_ride2" (click)="dismiss()">Confirm Location</button>\n\n      </ul>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\dropex\dropex.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Dropex);
    return Dropex;
}());
//# sourceMappingURL=dropex.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contact; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookpopup_bookpopup__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Contact = (function () {
    function Contact(navCtrl, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
    }
    Contact.prototype.ionViewDidLoad = function () {
    };
    Contact.prototype.bookpopup = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__bookpopup_bookpopup__["a" /* Bookpopup */]);
        modal.present();
    };
    Contact.prototype.chat = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* Chat */]);
        modal.present();
    };
    Contact.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Contact = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\contact\contact.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Rebacca Lopez</h4>\n\n  </div>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="jr_profile_content1">\n\n    <div class="jr_search_bottom_bay">\n\n      <div class="jr_search_profile">\n\n        <div class="jr_search_verified"><img src="assets/img/jr_verified_prof.png"></div>\n\n        <img src="assets/img/e_img14.png">\n\n      </div>\n\n      <div class="jr_search_profile_detail">\n\n        <h6>MARIA LORENZA&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;37 Y/O</h6>\n\n        <span class="jr_star_ratting"><img src="assets/img/jr_star.png"><strong>3/5</strong>1 Rattings</span><br>\n\n        <button ion-button class="jr_bookonline" (click)="bookpopup()">Book online</button>\n\n      </div>\n\n      <div class="jr_clear"></div>\n\n      <hr>\n\n    </div>\n\n    <div class="jr_time_schedule">\n\n      <h5><strong>Tommorrow,</strong>&nbsp;09:00 am</h5>\n\n    </div>\n\n    <div class="jr_from_to">\n\n      <li>\n\n        <div class="child1 from">09:00<div class="jr_box1"></div></div>\n\n        <div class="child2"><strong>Cape Town</strong>\n\n        <p>University of Cape Town,South Africa</p></div>\n\n        <div class="jr_clear"></div>\n\n      </li>\n\n      <li>\n\n        <div class="child1 to">05:00</div>\n\n        <div class="child2"><strong>Durban</strong>\n\n        <p>UKZN Durban<br>\n\n        South Africa</p></div>\n\n        <div class="jr_clear"></div>\n\n      </li>\n\n    </div>\n\n    <hr>\n\n    <div class="jr_available_seats">\n\n      <div class="jr_seats_left"><strong>3</strong> Seats Avialable</div>\n\n      <div class="jr_seats_right"><strong>₹600/</strong> Seat</div>\n\n      <div class="jr_clear"></div>\n\n    </div>\n\n    <div class="jr_text_msg">\n\n      <input class="jr_send_msg" placeholder="Type your message here">\n\n      <div class="jr_attch">\n\n        <span><img src="assets/img/jr_attch_loc.png"></span>\n\n        <span><img src="assets/img/jr_attch_smile.png"></span>\n\n      </div>\n\n    </div>\n\n    <div class="jr_bottom_button_bay">\n\n\n\n      <button ion-button class="jr_bottom_send" (click)=" chat()">Send<span><img src="assets/img/jr_send_arw.png"></span></button>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\contact\contact.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], Contact);
    return Contact;
}());
//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Alert; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Alert = (function () {
    function Alert(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.trip = { lower: 33, upper: 60 };
    }
    Alert.prototype.ionViewDidLoad = function () {
    };
    Alert.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Alert = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-alert',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\alert\alert.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_close_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Create an Alert</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n<ion-content padding>\n\n    <div class="jr_ride_wrapper">\n\n      <h3> You will get an email when new\n\nrides matching your alert\n\nare offered.</h3>\n\n<ul>\n\n  <br>\n\n  <li class="from">Durban</li>\n\n  <br>\n\n  <li class="to">Cape Town</li>\n\n  <br>\n\n</ul>\n\n<div class="jr_time_div">\n\n      <select class="jr_select">\n\n          <option>Departure date</option>\n\n      </select>\n\n    <div class="j_clear"></div>\n\n</div>\n\n<div class="jr_time_div">\n\n\n\n<div class="jr_rangebar">\n\n<h6>Round Trip</h6>\n\n    <ion-range dualKnobs="true" pin="true" [(ngModel)]="trip" color="#2077a3">\n\n\n\n    </ion-range>\n\n</div>\n\n</div>\n\n      <div class="jr_bottom_button_bay">\n\n        <button ion-button class="jr_offer_ride2" (click)="dismiss()">Create a ride alert</button>\n\n      </div>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\alert\alert.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Alert);
    return Alert;
}());
//# sourceMappingURL=alert.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Offerridedetail; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__addcomment_addcomment__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loginpop_loginpop__ = __webpack_require__(469);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Offerridedetail = (function () {
    function Offerridedetail(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    Offerridedetail.prototype.ionViewDidLoad = function () {
    };
    Offerridedetail.prototype.addcomment = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__addcomment_addcomment__["a" /* Addcomment */]);
        modal.present();
    };
    Offerridedetail.prototype.loginpop = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__loginpop_loginpop__["a" /* Loginpop */]);
        modal.present();
    };
    Offerridedetail.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Offerridedetail = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-offerridedetail',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\offerridedetail\offerridedetail.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="goBack()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Offer a ride</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="jr_offerride_details">\n\n    <ul>\n\n      <li>\n\n        <h4>R Price</h4>\n\n        <div class="jr_offerride_detail_content">\n\n          <div class="jr_offerride_detail_content_left">\n\n            <div class="jr_destination">\n\n              <span><img src="assets/img/jr_departure.png">Durban</span><br>\n\n              <span><img src="assets/img/jr_arrival.png">Cape Town</span>\n\n            </div>\n\n          </div>\n\n          <div class="jr_offerride_detail_content_right">\n\n            <div class="jr_offerride_price_tag">\n\n              <span><img src="assets/img/jr_sub.png"></span>\n\n              <span class="jr_offer_price">60</span>\n\n              <span><img src="assets/img/jr_add.png"></span>\n\n            </div>\n\n          </div>\n\n          <div class="jr_clear"></div>\n\n        </div>\n\n      </li>\n\n      <li>\n\n        <div class="jr_offerride_detail_content">\n\n          <div class="jr_offerride_detail_content_left">\n\n            <h4><img src="assets/img/jr_seat.png">Avialable Seats</h4>\n\n          </div>\n\n          <div class="jr_offerride_detail_content_right">\n\n            <div class="jr_offerride_price_tag">\n\n              <span><img src="assets/img/jr_sub.png"></span>\n\n              <span class="jr_offer_price" style="color:#717171;">04</span>\n\n              <span><img src="assets/img/jr_add.png"></span>\n\n            </div>\n\n          </div>\n\n          <div class="jr_clear"></div>\n\n        </div>\n\n      </li>\n\n      <li>\n\n        <h4><img src="assets/img/jr_comment.png">Ride Comments</h4>\n\n        <h5>Write your ride  comments here</h5>\n\n        <p>Please add further details about your ride. It will save you answering lots of questions from co- travellers<br>\n\n          <button ion-button class="jr_addcomment_btn" (click)="addcomment()">Add Comments</button>\n\n        </p>\n\n      </li>\n\n      <li>\n\n        <div>\n\n        <h4 class="jr_left"><img src="assets/img/jr_seat.png">Max. 2 in the back seat</h4>\n\n        <div class="jr_custom jr_right jr_padding0" style="position: relative;top: 19px;">\n\n          <input id="check1" name="check" type="checkbox" value="check1">\n\n          <label for="check1"></label>\n\n        </div>\n\n        <div class="jr_clear"></div>\n\n        </div>\n\n        <p>Guarantee max. 2 people in the back of the car</p>\n\n      </li>\n\n      <li>\n\n        <h4><img src="assets/img/jr_detail.png">Details</h4>\n\n        <p class="jr_marginbtm0">Max. Luggage</p>\n\n        <div class="jr_select_offer_outter">\n\n        <select class="jr_select_offer">\n\n          <option>Medium</option>\n\n        </select>\n\n        </div>\n\n        <p class="jr_marginbtm0">Pickup flexibility</p>\n\n        <div class="jr_select_offer_outter">\n\n        <select class="jr_select_offer">\n\n          <option>Right on time</option>\n\n        </select>\n\n        </div>\n\n        <p class="jr_marginbtm0">Detour</p>\n\n        <div class="jr_select_offer_outter">\n\n        <select class="jr_select_offer">\n\n          <option>15 Minutes Detour max.</option>\n\n        </select>\n\n        </div>\n\n        <div class="jr_custom">\n\n            <input id="check1" type="checkbox" name="check" value="check1">\n\n            <label for="check1">I accept the T&Cs and Privacy Policy.</label>\n\n        </div>\n\n      </li>\n\n    </ul>\n\n    <div class="jr_bottom_button_bay">\n\n      <button ion-button class="jr_offer_ride2" (click)="loginpop()">Publish</button>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\offerridedetail\offerridedetail.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], Offerridedetail);
    return Offerridedetail;
}());
//# sourceMappingURL=offerridedetail.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Addcomment; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Addcomment = (function () {
    function Addcomment(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    Addcomment.prototype.ionViewDidLoad = function () {
    };
    Addcomment.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Addcomment = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-addcomment',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\addcomment\addcomment.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Add Comment</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="jr_offerride_details">\n\n    <ul>\n\n      <li>\n\n        <h4><img src="assets/img/jr_comment.png">ADD COMMENT</h4>\n\n        <textarea class="jr_input_comment" placeholder="Type your comments here" rows="5"></textarea>\n\n      </li>\n\n    </ul>\n\n    <div class="jr_bottom_button_bay">\n\n      <div class="jr_tick" (click)="dismiss()">\n\n        <img src="assets/img/jr_tick.png">\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\addcomment\addcomment.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Addcomment);
    return Addcomment;
}());
//# sourceMappingURL=addcomment.js.map

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Loginpop; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manage_manage__ = __webpack_require__(470);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Loginpop = (function () {
    function Loginpop(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    Loginpop.prototype.ionViewDidLoad = function () {
    };
    Loginpop.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Loginpop.prototype.manage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__manage_manage__["a" /* Manage */]);
    };
    Loginpop = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-loginpop',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\loginpop\loginpop.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Login</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="jr_theme_trans_bg">\n\n  <div class="jr_almost_wrapper">\n\n    <h3>Almost there!</h3>\n\n    <p>You need to be authenticated to<br> publish your ride offer</p>\n\n    <hr>\n\n<button ion-button class="jr_loginpop_btn" (click)="manage()">LOGIN</button>\n\n	<!-- <button ion-button class="jr_loginpop_btn">LOGIN</button> -->\n\n    <br>\n\n    <button ion-button class="jr_signpop_btn">SIGNUP</button>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\loginpop\loginpop.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Loginpop);
    return Loginpop;
}());
//# sourceMappingURL=loginpop.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Manage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Manage = (function () {
    function Manage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Manage.prototype.ionViewDidLoad = function () {
    };
    Manage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Manage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-manage',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\manage\manage.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="goBack()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Manage ride offer</h4>\n\n  </div>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div class="jr_ride_wrapper">\n\n      <div class="jr_manage_offer">\n\n        <div class="jr_home_offer_photo" style="width:70px;height:70px;"><img src="assets/img/jr_car_img.png"></div>\n\n        <div class="jr_home_offer_detail" style="padding-left:0px !important;padding-top:5px !important;">\n\n          <h5>Saturday 29, April</h5>\n\n          <h6><strong>05: 00 am</strong></h6>\n\n          <p>Electronic City<span><img src="assets/img/jr_forward.png"></span>Madiwala</p>\n\n        </div>\n\n        <div class="jr_clear"></div>\n\n      </div>\n\n\n\n<div class="jr_offerride_details">\n\n\n\n      <ul>\n\n      <li>\n\n      <div class="jr_offerride_detail_content">\n\n        <div class="jr_offerride_detail_content_left">\n\n          <h4><img src="assets/img/jr_seat.png">Avialable Seats</h4>\n\n        </div>\n\n        <div class="jr_offerride_detail_content_right">\n\n          <div class="jr_offerride_price_tag">\n\n            <span><img src="assets/img/jr_sub.png"></span>\n\n            <span class="jr_offer_price" style="color:#717171;">04</span>\n\n            <span><img src="assets/img/jr_add.png"></span>\n\n          </div>\n\n        </div>\n\n        <div class="jr_clear"></div>\n\n      </div>\n\n    </li>\n\n    <li>\n\n      <h4><img src="assets/img/jr_comment.png">Request for waiting Approval</h4>\n\n    </li>\n\n    <li class="jr_bordernone">\n\n      <div class="jr_driver_profile">\n\n        <div class="jr_home_offer_photo" style="width:70px;height:70px;"><img src="assets/img/jr_car_img.png"></div>\n\n        <div class="jr_search_profile_detail" style="width: 70%;padding-top:10px;">\n\n          <h6>MARIA LORENZA<span>37 Y/O</span></h6>\n\n          <div class="jr_avia">\n\n            <span class="left"><img src="assets/img/jr_seat1.png"><strong>2</strong> seats</span>\n\n            <span class="right"><img src="assets/img/jr_price.png"><strong>60</strong></span>\n\n          </div>\n\n        </div>\n\n        <div class="jr_clear"></div>\n\n      </div>\n\n    </li>\n\n    <p class="jr_p">Do you want to Approve this<br>\n\nBooking request ?</p>\n\n<div class="jr_approve_btn_bay">\n\n  <button  class="jr_approve_btn">Approve</button>\n\n  <button  class="jr_decline_btn">Decline</button>\n\n  <div class="jr_clear"></div>\n\n</div>\n\n<p class="jr_p">You have until Friday 04 : 00 pm\n\nto Answer</p>\n\n<div class="jr_approve_btn_bay">\n\n<button class="jr_contact_btn" (click)="contact()">Contact Rebecca</button>\n\n</div>\n\n<br>\n\n<div class="jr_approve_btn_bay">\n\n  <button  class="jr_edit_btn">Edit Ride</button>\n\n  <button  class="jr_delete_btn">Delete Ride</button>\n\n  <div class="jr_clear"></div>\n\n</div>\n\n\n\n  </ul>\n\n\n\n\n\n</div>\n\n\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\manage\manage.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], Manage);
    return Manage;
}());
//# sourceMappingURL=manage.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Popover; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editprofile_editprofile__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editphoto_editphoto__ = __webpack_require__(114);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Popover = (function () {
    function Popover(navCtrl, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
    }
    Popover.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    Popover.prototype.editprofile = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__editprofile_editprofile__["a" /* Editprofile */]);
        modal.present();
    };
    Popover.prototype.editphoto = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__editphoto_editphoto__["a" /* Editphoto */]);
        modal.present();
    };
    Popover = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-popover',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\popover\popover.html"*/'<div class="jr_popover_wrapper">\n\n  <ul>\n\n     <li (click)="editprofile()" (click)="close()" >Edit my profile</li>\n\n      <li (click)="editphoto()" (click)="close()" >Edit my photo</li>\n\n      <div class="jr_clear"></div>\n\n   </ul>\n\n   <div class="jr_clear"></div>\n\n</div>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\popover\popover.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], Popover);
    return Popover;
}());
//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Editpreference; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Editpreference = (function () {
    function Editpreference(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    Editpreference.prototype.ionViewDidLoad = function () {
    };
    Editpreference.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Editpreference = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-editpreference',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\editpreference\editpreference.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Edit Preference</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="jr_offerride_details">\n\n    <ul>\n\n      <li class="jr_bordernone jr_paddingbtm0">\n\n        <h4>Chattiness</h4>\n\n        <div class="jr_pre_row">\n\n          <div class="jr_width15">\n\n            <span><img src="assets/img/e_pre1.png"></span>\n\n          </div>\n\n          <div class="jr_width85">\n\n              <select class="jr_pre_select1">\n\n                      <option>I am quiet type</option>\n\n              </select>\n\n          </div>\n\n          <div class="jr_clear"></div>\n\n        </div>\n\n      </li>\n\n      <li class="jr_bordernone jr_paddingbtm0">\n\n        <h4>Smoking</h4>\n\n        <div class="jr_pre_row">\n\n          <div class="jr_width15">\n\n            <span><img src="assets/img/e_pre2.png"></span>\n\n          </div>\n\n          <div class="jr_width85">\n\n              <select class="jr_pre_select1">\n\n                      <option>Dont know</option>\n\n              </select>\n\n          </div>\n\n          <div class="jr_clear"></div>\n\n        </div>\n\n      </li>\n\n      <li class="jr_bordernone jr_paddingbtm0">\n\n        <h4>Music</h4>\n\n        <div class="jr_pre_row">\n\n          <div class="jr_width15">\n\n            <span><img src="assets/img/e_pre3.png"></span>\n\n          </div>\n\n          <div class="jr_width85">\n\n              <select class="jr_pre_select1">\n\n                      <option>I like music</option>\n\n              </select>\n\n          </div>\n\n          <div class="jr_clear"></div>\n\n        </div>\n\n      </li>\n\n      <li class="jr_bordernone jr_paddingbtm0">\n\n        <h4>Pets</h4>\n\n        <div class="jr_pre_row">\n\n          <div class="jr_width15">\n\n            <span><img src="assets/img/e_pre4.png"></span>\n\n          </div>\n\n          <div class="jr_width85">\n\n              <select class="jr_pre_select1">\n\n                      <option>Please welcome</option>\n\n              </select>\n\n          </div>\n\n          <div class="jr_clear"></div>\n\n        </div>\n\n      </li>\n\n\n\n    </ul>\n\n    <div class="jr_bottom_button_bay">\n\n      <button ion-button class="jr_offer_ride2">Save Preferences</button>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\editpreference\editpreference.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Editpreference);
    return Editpreference;
}());
//# sourceMappingURL=editpreference.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Editid; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idupload_idupload__ = __webpack_require__(474);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Editid = (function () {
    function Editid(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    Editid.prototype.ionViewDidLoad = function () {
    };
    Editid.prototype.idupload = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__idupload_idupload__["a" /* Idupload */]);
    };
    Editid.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Editid = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-editid',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\editid\editid.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Choose your Govt ID</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="jr_profile_wrapper">\n\n    <div class="jr_profile_banner">\n\n        <img src="assets/img/jr_chooseid.png" class="jr_chooseid">\n\n    </div>\n\n    <div class="jr_profile_content">\n\n      <div class="jr_text_center">\n\n        <div class="jr_edit_row jr_text_center">\n\n        <h4 class="jr_padding0 jr_margin0">Choose the type of </h4>\n\n        <h3 class="jr_margintop0">Govt. ID</h3>\n\n        <hr>\n\n      </div>\n\n        <div class="jr_edit_row ">\n\n          <div class="jr_proofs_list">\n\n            <li><ion-radio ng-model="choice1" ng-value="\'A\'" class="jr_radio_id"></ion-radio><p>Passport</p><div class="jr_clear"></div></li>\n\n            <li><ion-radio ng-model="choice2" ng-value="\'B\'" class="jr_radio_id"></ion-radio><p>Aadhaar Card</p><div class="jr_clear"></div></li>\n\n            <li><ion-radio ng-model="choice3" ng-value="\'C\'" class="jr_radio_id"></ion-radio><p>Pan Card</p><div class="jr_clear"></div></li>\n\n          </div>\n\n      </div>\n\n      </div>\n\n      <div class="jr_confidential">\n\n        <div class="jr_confidential_left">\n\n          <img src="assets/img/jr_confidentional.png" >\n\n        </div>\n\n        <div class="jr_confidential_right">\n\n          <p>Your ID card will be kept strictly\n\nconfidential</p>\n\n        </div>\n\n        <div class="jr_clear"></div>\n\n      </div>\n\n    </div>\n\n    <hr>\n\n\n\n    <div class="jr_bottom_button_bay">\n\n      <button ion-button class="jr_offer_ride2" (click)="idupload()">Continue</button>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\editid\editid.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Editid);
    return Editid;
}());
//# sourceMappingURL=editid.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Idupload; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idedit_idedit__ = __webpack_require__(475);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Idupload = (function () {
    function Idupload(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    Idupload.prototype.ionViewDidLoad = function () {
    };
    Idupload.prototype.idedit = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__idedit_idedit__["a" /* Idedit */]);
    };
    Idupload.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Idupload = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-idupload',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\idupload\idupload.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Upload your Govt ID</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="jr_profile_content">\n\n    <div class="jr_text_center">\n\n      <div class="jr_edit_row jr_text_center">\n\n        <br><br>\n\n      <h4 class="jr_padding0 jr_margin0">Upload good quality copy of your </h4>\n\n      <h3 class="jr_margintop0">Aadhar card</h3>\n\n      <hr>\n\n    </div>\n\n    <div class="jr_upload_img">\n\n      <br>\n\n      <img src="assets/img/jr_upload.png" >\n\n    </div>\n\n  </div>\n\n\n\n  <div class="jr_bottom_button_bay">\n\n    <button ion-button class="jr_offer_ride2" (click)="idedit()">Upload</button>\n\n  </div>\n\n</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\idupload\idupload.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Idupload);
    return Idupload;
}());
//# sourceMappingURL=idupload.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Idedit; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Idedit = (function () {
    function Idedit(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    Idedit.prototype.ionViewDidLoad = function () {
    };
    Idedit.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Idedit = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-idedit',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\idedit\idedit.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Confirm id</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="jr_profile_content">\n\n    <div class="jr_text_center">\n\n      <div class="jr_edit_row jr_text_center">\n\n        <br><br>\n\n      <h4 class="jr_padding0 jr_margin0">is that the name on your</h4>\n\n      <h3 class="jr_margintop0">Aadhar card</h3>\n\n      <hr>\n\n    </div>\n\n      </div>\n\n    <div class="jr_edit_row">\n\n          <h5>FIRST NAME</h5>\n\n          <input class="jr_edit_profile_input" placeholder="FIRST NAME">\n\n        </div>\n\n        <div class="jr_edit_row">\n\n              <h5>LAST NAME</h5>\n\n              <input class="jr_edit_profile_input" placeholder="LAST NAME">\n\n            </div>\n\n            <div class="jr_confidential jr_bordernone">\n\n              <div class="jr_confidential_left">\n\n                <img src="assets/img/jr_confidentional.png" >\n\n              </div>\n\n              <div class="jr_confidential_right">\n\n                <p>Your ID card will be kept strictly\n\n      confidential</p>\n\n              </div>\n\n              <div class="jr_clear"></div>\n\n            </div>\n\n\n\n\n\n  <div class="jr_bottom_button_bay">\n\n    <button ion-button class="jr_offer_ride2">Continue</button>\n\n  </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\idedit\idedit.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Idedit);
    return Idedit;
}());
//# sourceMappingURL=idedit.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Addcar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Addcar = (function () {
    function Addcar(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    Addcar.prototype.ionViewDidLoad = function () {
    };
    Addcar.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Addcar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-addcar',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\addcar\addcar.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Add your car</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="jr_profile_content jr_paddingbtm0">\n\n    <div class="jr_text_center">\n\n      <div class="jr_edit_row jr_text_center">\n\n        <br><br>\n\n        <h3 class="jr_margintop0">Add your car</h3>\n\n      <hr>\n\n      <div class="jr_offer_bg">\n\n          <img src="assets/img/jr_mycar.png">\n\n      </div>\n\n      </div>\n\n    </div>\n\n    <div class="jr_edit_row">\n\n      <select class="jr_select jr_bordernone">\n\n        <option>Choose the make of the Car</option>\n\n      </select>\n\n    </div>\n\n    <div class="jr_edit_row">\n\n      <select class="jr_select jr_bordernone">\n\n        <option>Choose the Comfort level</option>\n\n      </select>\n\n    </div>\n\n    <div class="jr_edit_row">\n\n      <select class="jr_select jr_bordernone">\n\n        <option>Choose the type of the Car</option>\n\n      </select>\n\n    </div>\n\n    <div class="jr_edit_row">\n\n      <select class="jr_select jr_bordernone">\n\n        <option>Choose the Color level</option>\n\n      </select>\n\n    </div>\n\n    <div class="jr_edit_row">\n\n    <div class="jr_offerride_detail_content">\n\n          <div class="jr_offerride_detail_content_left jr_no_seat">\n\n            <h4><img src="assets/img/jr_seat.png">No. of Seats</h4>\n\n          </div>\n\n          <div class="jr_offerride_detail_content_right">\n\n            <div class="jr_offerride_price_tag">\n\n              <span><img src="assets/img/jr_sub.png"></span>\n\n              <span class="jr_offer_price" style="color:#717171;">04</span>\n\n              <span><img src="assets/img/jr_add.png"></span>\n\n            </div>\n\n          </div>\n\n          <div class="jr_clear"></div>\n\n        </div>\n\n        </div>\n\n    </div>\n\n    <br>\n\n    <br>\n\n    <br>\n\n    <div class="jr_bottom_button_bay">\n\n        <button ion-button class="jr_offer_ride2">Save my car</button>\n\n      </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\addcar\addcar.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Addcar);
    return Addcar;
}());
//# sourceMappingURL=addcar.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Addcarphoto; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Addcarphoto = (function () {
    function Addcarphoto(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    Addcarphoto.prototype.ionViewDidLoad = function () {
    };
    Addcarphoto.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Addcarphoto = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-addcarphoto',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\addcarphoto\addcarphoto.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Upload your car image</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="jr_add_car_bg">\n\n  <div class="jr_profile_content jr_paddingbtm0">\n\n    <div class="jr_text_center">\n\n      <div class="jr_edit_row jr_text_center">\n\n        <br><br>\n\n        <h4 class="jr_padding0 jr_margin0">Add an image</h4>\n\n        <h3 class="jr_margintop0">of your car</h3>\n\n      <hr>\n\n      <br>\n\n      <br>\n\n      </div>\n\n      <div class="jr_upload_image_car">\n\n        <img src="assets/img/jr_car_img.png" >\n\n      </div>\n\n    </div>\n\n    <div class="jr_bottom_button_bay">\n\n      <button ion-button class="jr_offer_ride2">Upload image</button>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\addcarphoto\addcarphoto.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Addcarphoto);
    return Addcarphoto;
}());
//# sourceMappingURL=addcarphoto.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Addnumber; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Addnumber = (function () {
    function Addnumber(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    Addnumber.prototype.ionViewDidLoad = function () {
    };
    Addnumber.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Addnumber = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-addnumber',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\addnumber\addnumber.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Addnumber</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="jr_profile_content jr_paddingbtm0">\n\n    <div class="jr_text_center">\n\n      <div class="jr_edit_row jr_text_center">\n\n        <br><br>\n\n        <h3 class="jr_margintop0">One more thing</h3>\n\n      <h4 class="jr_padding0 jr_margin0">Verify your mobile number</h4>\n\n      <hr>\n\n    </div>\n\n      </div>\n\n    </div>\n\n    <div class="jr_profile_banner" style="height:150px;">\n\n        <img src="assets/img/jr_phone_verify.png" class="jr_chooseid1">\n\n    </div>\n\n    <br><br>\n\n\n\n    <div class="jr_profile_content">\n\n\n\n    <div class="jr_edit_row">\n\n          <h5><strong>REGION</strong></h5>\n\n          <input class="jr_edit_profile_input" placeholder="Country">\n\n        </div>\n\n        <div class="jr_edit_row">\n\n              <h5><strong>PHONE NUMBER</strong></h5>\n\n              <div>\n\n                <div class="jr_country_code">\n\n                  <select class="jr_select" style="margin-top: 5px;">\n\n                    <option>+91</option>\n\n                  </select>\n\n                </div>\n\n                <div class="jr_phone_number">\n\n                  <input class="jr_edit_profile_input" placeholder="9961531199">\n\n                </div>\n\n                  <div class="jr_clear"></div>\n\n              </div>\n\n            </div>\n\n  <div class="jr_bottom_button_bay">\n\n    <button ion-button class="jr_offer_ride2">Verify</button>\n\n  </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\addnumber\addnumber.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Addnumber);
    return Addnumber;
}());
//# sourceMappingURL=addnumber.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Editcar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Editcar = (function () {
    function Editcar(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    Editcar.prototype.ionViewDidLoad = function () {
    };
    Editcar.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Editcar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-editcar',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\editcar\editcar.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Edit car</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n  <ion-content>\n\n    <div class="jr_profile_content jr_paddingbtm0">\n\n      <div class="jr_text_center">\n\n        <div class="jr_edit_row jr_text_center">\n\n          <br><br>\n\n          <h3 class="jr_margintop0">Edit your car</h3>\n\n        <hr>\n\n        <div class="jr_offer_bg">\n\n            <img src="assets/img/jr_mycar.png">\n\n        </div>\n\n        </div>\n\n      </div>\n\n      <div class="jr_edit_row">\n\n        <select class="jr_select jr_bordernone">\n\n          <option>Choose the make of the Car</option>\n\n        </select>\n\n      </div>\n\n      <div class="jr_edit_row">\n\n        <select class="jr_select jr_bordernone">\n\n          <option>Choose the Comfort level</option>\n\n        </select>\n\n      </div>\n\n      <div class="jr_edit_row">\n\n        <select class="jr_select jr_bordernone">\n\n          <option>Choose the type of the Car</option>\n\n        </select>\n\n      </div>\n\n      <div class="jr_edit_row">\n\n        <select class="jr_select jr_bordernone">\n\n          <option>Choose the Color level</option>\n\n        </select>\n\n      </div>\n\n      <div class="jr_edit_row">\n\n      <div class="jr_offerride_detail_content">\n\n            <div class="jr_offerride_detail_content_left jr_no_seat">\n\n              <h4><img src="assets/img/jr_seat.png">No. of Seats</h4>\n\n            </div>\n\n            <div class="jr_offerride_detail_content_right">\n\n              <div class="jr_offerride_price_tag">\n\n                <span><img src="assets/img/jr_sub.png"></span>\n\n                <span class="jr_offer_price" style="color:#717171;">04</span>\n\n                <span><img src="assets/img/jr_add.png"></span>\n\n              </div>\n\n            </div>\n\n            <div class="jr_clear"></div>\n\n          </div>\n\n          </div>\n\n      </div>\n\n      <div class="jr_space_height"></div> \n\n      <div class="jr_bottom_button_bay">\n\n          <button ion-button class="jr_offer_ride2">Save my car</button>\n\n        <span class="jr_close" (click)="dismiss()"><img src="assets/img/jr_exit.png"></span>\n\n        </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\editcar\editcar.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Editcar);
    return Editcar;
}());
//# sourceMappingURL=editcar.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Publicprofile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Publicprofile = (function () {
    function Publicprofile(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    Publicprofile.prototype.ionViewDidLoad = function () {
    };
    Publicprofile.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Publicprofile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-publicprofile',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\publicprofile\publicprofile.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>My public profile</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn jr_mail_icon"></button>\n\n  <button ion-button class="jr_right jr_header_btn jr_profile_icon"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="jr_profile_wrapper">\n\n    <div class="jr_profile_banner1">\n\n      <div class="jr_profile_photo1">\n\n        <img src="assets/img/e_img14.png">\n\n      </div>\n\n    </div>\n\n    <div class="jr_profile_content">\n\n      <h4>Lisa Roberts</h4>\n\n      <p class="jr_age1">23 y/o</p>\n\n      <hr>\n\n\n\n    <div class="jr_profile_tab_content">\n\n      <div class="jr_edit_row">\n\n      <h4>ABOUT YOU</h4>\n\n      <p>\n\n        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered\n\n      </p>\n\n\n\n    <h4>VERIFICATION</h4>\n\n    <ul>\n\n      <li class="verified">Email</li>\n\n      <li class="verified">Phone Verified</li>\n\n    </ul>\n\n    <h4>LAST SEEN</h4>\n\n    <ul>\n\n      <li class="jr_bg_none">Last Seen&nbsp;:&nbsp;Today</li>\n\n      <li class="jr_bg_none">Member Since&nbsp;:&nbsp;April 2016</li>\n\n    </ul>\n\n    </div>\n\n    </div>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\publicprofile\publicprofile.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Publicprofile);
    return Publicprofile;
}());
//# sourceMappingURL=publicprofile.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notification; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Notification = (function () {
    function Notification(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    Notification.prototype.ionViewDidLoad = function () {
    };
    Notification.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Notification = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\notification\notification.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Notifications</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn jr_mail_icon"></button>\n\n  <button ion-button class="jr_right jr_header_btn jr_profile_icon"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="jr_profile_wrapper">\n\n    <div class="jr_profile_content">\n\n    <div class="jr_profile_tab_content">\n\n      <div class="jr_edit_row">\n\n        <h4>PUSH NOTIFICATIONS</h4>\n\n        <h6>Receive push notifications for the following actions</h6>\n\n        <div class="jr_notification">\n\n          <ul>\n\n            <li>\n\n              <div class="child1">\n\n                New co- traveller confirmed\n\n              </div>\n\n              <div class="child2">\n\n                <div class="jr_custom1">\n\n                    <input id="check1" type="checkbox" name="check" value="check1">\n\n                    <label for="check1"></label>\n\n                </div>\n\n              </div>\n\n              <div class="jr_clear"></div>\n\n            </li>\n\n            <li>\n\n              <div class="child1">\n\n                Messages Received\n\n              </div>\n\n              <div class="child2">\n\n                <div class="jr_custom1">\n\n                    <input id="check2" type="checkbox" name="check" value="check1">\n\n                    <label for="check2"></label>\n\n                </div>\n\n              </div>\n\n              <div class="jr_clear"></div>\n\n            </li>\n\n            <li>\n\n              <div class="child1">\n\n                Ratings\n\n              </div>\n\n              <div class="child2">\n\n                <div class="jr_custom1">\n\n                    <input id="check3" type="checkbox" name="check" value="check1">\n\n                    <label for="check3"></label>\n\n                </div>\n\n              </div>\n\n              <div class="jr_clear"></div>\n\n            </li>\n\n            <hr>\n\n          </ul>\n\n        </div>\n\n      </div>\n\n      <div class="jr_edit_row">\n\n        <h4 class="jr_paddingtop0">SMS</h4>\n\n        <h6>Receive a SMS at for the following actions</h6>\n\n        <div class="jr_notification">\n\n          <ul>\n\n            <li>\n\n              <div class="child1">\n\n              Messages from a new co- traveller\n\n              </div>\n\n              <div class="child2">\n\n                <div class="jr_custom1">\n\n                    <input id="check1" type="checkbox" name="check" value="check1">\n\n                    <label for="check1"></label>\n\n                </div>\n\n              </div>\n\n              <div class="jr_clear"></div>\n\n            </li>\n\n            <hr>\n\n          </ul>\n\n        </div>\n\n      </div>\n\n      <div class="jr_edit_row">\n\n        <h4 class="jr_paddingtop0">EMAIL</h4>\n\n        <h6>Receive an email for the following actions</h6>\n\n        <div class="jr_notification">\n\n          <ul>\n\n            <li>\n\n              <div class="child1">\n\n              Ride offer published\n\n              </div>\n\n              <div class="child2">\n\n                <div class="jr_custom1">\n\n                    <input id="check1" type="checkbox" name="check" value="check1">\n\n                    <label for="check1"></label>\n\n                </div>\n\n              </div>\n\n              <div class="jr_clear"></div>\n\n            </li>\n\n            <li>\n\n              <div class="child1">\n\n              Ride offer updated\n\n              </div>\n\n              <div class="child2">\n\n                <div class="jr_custom1">\n\n                    <input id="check1" type="checkbox" name="check" value="check1">\n\n                    <label for="check1"></label>\n\n                </div>\n\n              </div>\n\n              <div class="jr_clear"></div>\n\n            </li>\n\n            <li>\n\n              <div class="child1">\n\n              New message received\n\n              </div>\n\n              <div class="child2">\n\n                <div class="jr_custom1">\n\n                    <input id="check1" type="checkbox" name="check" value="check1">\n\n                    <label for="check1"></label>\n\n                </div>\n\n              </div>\n\n              <div class="jr_clear"></div>\n\n            </li>\n\n            <li>\n\n              <div class="child1">\n\n              Pending ratings after a ride taken\n\n              </div>\n\n              <div class="child2">\n\n                <div class="jr_custom1">\n\n                    <input id="check1" type="checkbox" name="check" value="check1">\n\n                    <label for="check1"></label>\n\n                </div>\n\n              </div>\n\n              <div class="jr_clear"></div>\n\n            </li>\n\n            <li>\n\n              <div class="child1">\n\n              New rating received\n\n              </div>\n\n              <div class="child2">\n\n                <div class="jr_custom1">\n\n                    <input id="check1" type="checkbox" name="check" value="check1">\n\n                    <label for="check1"></label>\n\n                </div>\n\n              </div>\n\n              <div class="jr_clear"></div>\n\n            </li>\n\n            <li>\n\n              <div class="child1">\n\n            Useful informations\n\n              </div>\n\n              <div class="child2">\n\n                <div class="jr_custom1">\n\n                    <input id="check1" type="checkbox" name="check" value="check1">\n\n                    <label for="check1"></label>\n\n                </div>\n\n              </div>\n\n              <div class="jr_clear"></div>\n\n            </li>\n\n            <hr>\n\n          </ul>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n    <div class="jr_bottom_button_bay">\n\n      <button ion-button class="jr_offer_ride5">Logout</button>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\notification\notification.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Notification);
    return Notification;
}());
//# sourceMappingURL=notification.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Popovermore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the Popovermore page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var Popovermore = (function () {
    function Popovermore(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Popovermore.prototype.ionViewDidLoad = function () {
        console.log('Hello Popovermore Page');
    };
    Popovermore = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-popovermore',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\popovermore\popovermore.html"*/'<div class="jr_popover_wrapper">\n\n  <ul>\n\n     <li (click)="close()" >See Co Travellers</li>\n\n     <li (click)="close()" >Edit</li>\n\n	 <li (click)="close()" >Delete</li>\n\n      <div class="jr_clear"></div>\n\n   </ul>\n\n   <div class="jr_clear"></div>\n\n</div>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\popovermore\popovermore.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], Popovermore);
    return Popovermore;
}());
//# sourceMappingURL=popovermore.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Password; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Password = (function () {
    function Password(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    Password.prototype.ionViewDidLoad = function () {
    };
    Password.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Password = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-password',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\password\password.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Change Password</h4>\n\n  </div>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="jr_profile_content jr_paddingbtm0">\n\n    <br>\n\n    <br>\n\n      <div class="jr_edit_row">\n\n        <h5><strong>CHANGE A PASSWORD</strong></h5>\n\n        <p style="margin-top: 5px;margin-bottom:5px;">Choose a High Security Password</p>\n\n      </div>\n\n      <div class="jr_edit_row">\n\n        <input class="jr_edit_profile_input" placeholder="Current Password">\n\n      </div>\n\n      <div class="jr_edit_row">\n\n        <input class="jr_edit_profile_input" placeholder="New Password">\n\n      </div>\n\n      <div class="jr_edit_row">\n\n        <input class="jr_edit_profile_input" placeholder="Confirm Password">\n\n      </div>\n\n      <div class="jr_edit_row">\n\n        <button ion-button class="jr_member_rate" (click)="dismiss()">Update</button>\n\n      </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\password\password.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Password);
    return Password;
}());
//# sourceMappingURL=password.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Signup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification_verification__ = __webpack_require__(485);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Signup = (function () {
    function Signup(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    Signup.prototype.ionViewDidLoad = function () {
    };
    Signup.prototype.verification = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__verification_verification__["a" /* Verification */]);
        modal.present();
    };
    Signup.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Signup = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\signup\signup.html"*/'\n\n<ion-content class="jr_login_bg">\n\n  <div class="jr_profile_content">\n\n      <div class="jr_login_detail">\n\n        <h5>Your</h5>\n\n        <h4>journey starts here !</h4>\n\n        <p>Share your car journey with co- travellers just<br> like you and cover all your fuel costs!</p>\n\n        <hr>\n\n        <input class="jr_login_input1" placeholder="Username">\n\n        <input class="jr_login_input1" placeholder="Email">\n\n        <input class="jr_login_input1" placeholder="Password">\n\n        <input class="jr_login_input1" placeholder="Phone">\n\n        <button ion-button class="jr_offer_ride3" (click)="verification()">SIGNUP</button>\n\n      </div>\n\n      <div class="jr_landing_btm">\n\n        <button ion-button class="jr_btm_btn2" (click)="goBack()">\n\n          <img src="assets/img/jr_arrow1.png">\n\n        </button>\n\n      </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\signup\signup.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], Signup);
    return Signup;
}());
//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 485:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Verification; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Verification = (function () {
    function Verification(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    Verification.prototype.ionViewDidLoad = function () {
    };
    Verification.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* Login */]);
    };
    Verification.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Verification.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Verification = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({
            selector: 'page-verification',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\verification\verification.html"*/'<ion-content class="jr_login_bg">\n\n  <div class="jr_profile_content">\n\n      <div class="jr_login_detail">\n\n        <h5>Sit back and Relax !</h5>\n\n        <p>while we verify your phone number</p>\n\n        <hr>\n\n        <div class="jr_passcode">\n\n          <ul>\n\n            <li>\n\n              <select class="jr_passcode_select">\n\n                <option>0</option>\n\n                <option>1</option>\n\n                <option>2</option>\n\n                <option>3</option>\n\n                <option>4</option>\n\n                <option>5</option>\n\n                <option>6</option>\n\n                <option>7</option>\n\n                <option>8</option>\n\n                <option>9</option>\n\n              </select>\n\n            </li>\n\n            <li>\n\n              <select class="jr_passcode_select">\n\n                <option>0</option>\n\n                <option>1</option>\n\n                <option>2</option>\n\n                <option>3</option>\n\n                <option>4</option>\n\n                <option>5</option>\n\n                <option>6</option>\n\n                <option>7</option>\n\n                <option>8</option>\n\n                <option>9</option>\n\n              </select>\n\n            </li>\n\n            <li>\n\n              <select class="jr_passcode_select">\n\n                <option>0</option>\n\n                <option>1</option>\n\n                <option>2</option>\n\n                <option>3</option>\n\n                <option>4</option>\n\n                <option>5</option>\n\n                <option>6</option>\n\n                <option>7</option>\n\n                <option>8</option>\n\n                <option>9</option>\n\n              </select>\n\n            </li>\n\n            <li>\n\n              <select class="jr_passcode_select">\n\n                <option>0</option>\n\n                <option>1</option>\n\n                <option>2</option>\n\n                <option>3</option>\n\n                <option>4</option>\n\n                <option>5</option>\n\n                <option>6</option>\n\n                <option>7</option>\n\n                <option>8</option>\n\n                <option>9</option>\n\n              </select>\n\n            </li>\n\n          </ul>\n\n        </div>\n\n\n\n        <button ion-button class="jr_submit_signup" (click)="login()">SUBMIT</button>\n\n        <p><strong>Resend OTP</strong></p>\n\n      </div>\n\n      <div class="jr_landing_btm">\n\n        <button ion-button class="jr_btm_btn2" (click)="dismiss()">\n\n          <img src="assets/img/jr_arrow1.png">\n\n        </button>\n\n      </div>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\verification\verification.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], Verification);
    return Verification;
}());
//# sourceMappingURL=verification.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(585);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_landing_landing__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_offerride_offerride__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_findride_findride__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_offerridedetail_offerridedetail__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_addcomment_addcomment__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_loginpop_loginpop__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_editprofile_editprofile__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_popover_popover__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_editphoto_editphoto__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_editpreference_editpreference__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_editbio_editbio__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_addcar_addcar__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_addcarphoto_addcarphoto__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_editid_editid__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_addnumber_addnumber__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_idupload_idupload__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_idedit_idedit__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_editcar_editcar__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_publicprofile_publicprofile__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_notification_notification__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_ask_ask__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_message_message__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_searchresult_searchresult__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_bookpopup_bookpopup__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_filter_filter__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_searchmain_searchmain__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_contact_contact__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_alert_alert__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_ratting_ratting__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_thanks_thanks__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_popovermore_popovermore__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_secureseat_secureseat__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_request_request__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_summary_summary__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_login_login__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_signup_signup__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_verification_verification__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_password_password__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_pickup_pickup__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_pickex_pickex__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_drop_drop__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_dropex_dropex__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_chat_chat__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_manage_manage__ = __webpack_require__(470);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_landing_landing__["a" /* Landing */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* Home */],
                __WEBPACK_IMPORTED_MODULE_5__pages_offerride_offerride__["a" /* Offerride */],
                __WEBPACK_IMPORTED_MODULE_6__pages_findride_findride__["a" /* Findride */],
                __WEBPACK_IMPORTED_MODULE_7__pages_offerridedetail_offerridedetail__["a" /* Offerridedetail */],
                __WEBPACK_IMPORTED_MODULE_8__pages_addcomment_addcomment__["a" /* Addcomment */],
                __WEBPACK_IMPORTED_MODULE_9__pages_loginpop_loginpop__["a" /* Loginpop */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* Profile */],
                __WEBPACK_IMPORTED_MODULE_11__pages_editprofile_editprofile__["a" /* Editprofile */],
                __WEBPACK_IMPORTED_MODULE_12__pages_popover_popover__["a" /* Popover */],
                __WEBPACK_IMPORTED_MODULE_13__pages_editphoto_editphoto__["a" /* Editphoto */],
                __WEBPACK_IMPORTED_MODULE_14__pages_editpreference_editpreference__["a" /* Editpreference */],
                __WEBPACK_IMPORTED_MODULE_15__pages_editbio_editbio__["a" /* Editbio */],
                __WEBPACK_IMPORTED_MODULE_16__pages_addcar_addcar__["a" /* Addcar */],
                __WEBPACK_IMPORTED_MODULE_17__pages_addcarphoto_addcarphoto__["a" /* Addcarphoto */],
                __WEBPACK_IMPORTED_MODULE_18__pages_editid_editid__["a" /* Editid */],
                __WEBPACK_IMPORTED_MODULE_19__pages_addnumber_addnumber__["a" /* Addnumber */],
                __WEBPACK_IMPORTED_MODULE_20__pages_idupload_idupload__["a" /* Idupload */],
                __WEBPACK_IMPORTED_MODULE_21__pages_idedit_idedit__["a" /* Idedit */],
                __WEBPACK_IMPORTED_MODULE_22__pages_editcar_editcar__["a" /* Editcar */],
                __WEBPACK_IMPORTED_MODULE_23__pages_publicprofile_publicprofile__["a" /* Publicprofile */],
                __WEBPACK_IMPORTED_MODULE_24__pages_notification_notification__["a" /* Notification */],
                __WEBPACK_IMPORTED_MODULE_25__pages_ask_ask__["a" /* Ask */],
                __WEBPACK_IMPORTED_MODULE_26__pages_message_message__["a" /* Message */],
                __WEBPACK_IMPORTED_MODULE_27__pages_searchresult_searchresult__["a" /* Searchresult */],
                __WEBPACK_IMPORTED_MODULE_30__pages_searchmain_searchmain__["a" /* Searchmain */],
                __WEBPACK_IMPORTED_MODULE_28__pages_bookpopup_bookpopup__["a" /* Bookpopup */],
                __WEBPACK_IMPORTED_MODULE_29__pages_filter_filter__["a" /* Filter */],
                __WEBPACK_IMPORTED_MODULE_30__pages_searchmain_searchmain__["a" /* Searchmain */],
                __WEBPACK_IMPORTED_MODULE_31__pages_contact_contact__["a" /* Contact */],
                __WEBPACK_IMPORTED_MODULE_32__pages_alert_alert__["a" /* Alert */],
                __WEBPACK_IMPORTED_MODULE_33__pages_ratting_ratting__["a" /* Ratting */],
                __WEBPACK_IMPORTED_MODULE_34__pages_thanks_thanks__["a" /* Thanks */],
                __WEBPACK_IMPORTED_MODULE_35__pages_popovermore_popovermore__["a" /* Popovermore */],
                __WEBPACK_IMPORTED_MODULE_36__pages_secureseat_secureseat__["a" /* Secureseat */],
                __WEBPACK_IMPORTED_MODULE_37__pages_request_request__["a" /* Request */],
                __WEBPACK_IMPORTED_MODULE_38__pages_summary_summary__["a" /* Summary */],
                __WEBPACK_IMPORTED_MODULE_39__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_40__pages_signup_signup__["a" /* Signup */],
                __WEBPACK_IMPORTED_MODULE_41__pages_verification_verification__["a" /* Verification */],
                __WEBPACK_IMPORTED_MODULE_42__pages_password_password__["a" /* Password */],
                __WEBPACK_IMPORTED_MODULE_43__pages_pickup_pickup__["a" /* Pickup */],
                __WEBPACK_IMPORTED_MODULE_44__pages_pickex_pickex__["a" /* Pickex */],
                __WEBPACK_IMPORTED_MODULE_45__pages_drop_drop__["a" /* Drop */],
                __WEBPACK_IMPORTED_MODULE_46__pages_dropex_dropex__["a" /* Dropex */],
                __WEBPACK_IMPORTED_MODULE_47__pages_chat_chat__["a" /* Chat */],
                __WEBPACK_IMPORTED_MODULE_48__pages_manage_manage__["a" /* Manage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {
                    platforms: {
                        ios: {
                            statusbarPadding: true
                        }
                    }
                }, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_landing_landing__["a" /* Landing */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* Home */],
                __WEBPACK_IMPORTED_MODULE_5__pages_offerride_offerride__["a" /* Offerride */],
                __WEBPACK_IMPORTED_MODULE_6__pages_findride_findride__["a" /* Findride */],
                __WEBPACK_IMPORTED_MODULE_7__pages_offerridedetail_offerridedetail__["a" /* Offerridedetail */],
                __WEBPACK_IMPORTED_MODULE_8__pages_addcomment_addcomment__["a" /* Addcomment */],
                __WEBPACK_IMPORTED_MODULE_9__pages_loginpop_loginpop__["a" /* Loginpop */],
                __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* Profile */],
                __WEBPACK_IMPORTED_MODULE_11__pages_editprofile_editprofile__["a" /* Editprofile */],
                __WEBPACK_IMPORTED_MODULE_12__pages_popover_popover__["a" /* Popover */],
                __WEBPACK_IMPORTED_MODULE_13__pages_editphoto_editphoto__["a" /* Editphoto */],
                __WEBPACK_IMPORTED_MODULE_14__pages_editpreference_editpreference__["a" /* Editpreference */],
                __WEBPACK_IMPORTED_MODULE_15__pages_editbio_editbio__["a" /* Editbio */],
                __WEBPACK_IMPORTED_MODULE_16__pages_addcar_addcar__["a" /* Addcar */],
                __WEBPACK_IMPORTED_MODULE_17__pages_addcarphoto_addcarphoto__["a" /* Addcarphoto */],
                __WEBPACK_IMPORTED_MODULE_18__pages_editid_editid__["a" /* Editid */],
                __WEBPACK_IMPORTED_MODULE_19__pages_addnumber_addnumber__["a" /* Addnumber */],
                __WEBPACK_IMPORTED_MODULE_20__pages_idupload_idupload__["a" /* Idupload */],
                __WEBPACK_IMPORTED_MODULE_21__pages_idedit_idedit__["a" /* Idedit */],
                __WEBPACK_IMPORTED_MODULE_22__pages_editcar_editcar__["a" /* Editcar */],
                __WEBPACK_IMPORTED_MODULE_23__pages_publicprofile_publicprofile__["a" /* Publicprofile */],
                __WEBPACK_IMPORTED_MODULE_24__pages_notification_notification__["a" /* Notification */],
                __WEBPACK_IMPORTED_MODULE_25__pages_ask_ask__["a" /* Ask */],
                __WEBPACK_IMPORTED_MODULE_26__pages_message_message__["a" /* Message */],
                __WEBPACK_IMPORTED_MODULE_27__pages_searchresult_searchresult__["a" /* Searchresult */],
                __WEBPACK_IMPORTED_MODULE_30__pages_searchmain_searchmain__["a" /* Searchmain */],
                __WEBPACK_IMPORTED_MODULE_28__pages_bookpopup_bookpopup__["a" /* Bookpopup */],
                __WEBPACK_IMPORTED_MODULE_29__pages_filter_filter__["a" /* Filter */],
                __WEBPACK_IMPORTED_MODULE_30__pages_searchmain_searchmain__["a" /* Searchmain */],
                __WEBPACK_IMPORTED_MODULE_31__pages_contact_contact__["a" /* Contact */],
                __WEBPACK_IMPORTED_MODULE_32__pages_alert_alert__["a" /* Alert */],
                __WEBPACK_IMPORTED_MODULE_33__pages_ratting_ratting__["a" /* Ratting */],
                __WEBPACK_IMPORTED_MODULE_34__pages_thanks_thanks__["a" /* Thanks */],
                __WEBPACK_IMPORTED_MODULE_35__pages_popovermore_popovermore__["a" /* Popovermore */],
                __WEBPACK_IMPORTED_MODULE_36__pages_secureseat_secureseat__["a" /* Secureseat */],
                __WEBPACK_IMPORTED_MODULE_37__pages_request_request__["a" /* Request */],
                __WEBPACK_IMPORTED_MODULE_38__pages_summary_summary__["a" /* Summary */],
                __WEBPACK_IMPORTED_MODULE_39__pages_login_login__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_40__pages_signup_signup__["a" /* Signup */],
                __WEBPACK_IMPORTED_MODULE_41__pages_verification_verification__["a" /* Verification */],
                __WEBPACK_IMPORTED_MODULE_42__pages_password_password__["a" /* Password */],
                __WEBPACK_IMPORTED_MODULE_43__pages_pickup_pickup__["a" /* Pickup */],
                __WEBPACK_IMPORTED_MODULE_44__pages_pickex_pickex__["a" /* Pickex */],
                __WEBPACK_IMPORTED_MODULE_45__pages_drop_drop__["a" /* Drop */],
                __WEBPACK_IMPORTED_MODULE_46__pages_dropex_dropex__["a" /* Dropex */],
                __WEBPACK_IMPORTED_MODULE_47__pages_chat_chat__["a" /* Chat */],
                __WEBPACK_IMPORTED_MODULE_48__pages_manage_manage__["a" /* Manage */]
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_landing_landing__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_findride_findride__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_offerride_offerride__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_editprofile_editprofile__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(115);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, alertCtrl) {
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_landing_landing__["a" /* Landing */];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["a" /* StatusBar */].styleDefault();
        });
    };
    MyApp.prototype.editprofile = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_editprofile_editprofile__["a" /* Editprofile */]);
    };
    MyApp.prototype.offerride = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_offerride_offerride__["a" /* Offerride */]);
    };
    MyApp.prototype.findride = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_findride_findride__["a" /* Findride */]);
    };
    MyApp.prototype.login = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* Login */]);
    };
    MyApp.prototype.showPlatform = function () {
        var text = 'I run on: ' + this.platform.platforms();
        var alert = this.alertCtrl.create({
            title: 'My Home',
            subTitle: text,
            buttons: ['Ok']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]), 
        __metadata('design:type', __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Component */])({template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\app\app.html"*/'<ion-menu [content]="content" side="left" id="menu1" >\n\n  <ion-content>\n\n    <div class="jr_inside_bg">\n\n      <div class="jr_sidemenu_bg">\n\n        <div class="jr_sidemenu_top">\n\n          <div class="jr_sidemenu_photo">\n\n            <img src="assets/img/jr_img.png">\n\n          </div>\n\n        </div>\n\n        <div class="jr_sidemenu_detail">\n\n          <h4>Mosa Tsoai</h4>\n\n          <p>mosatsoai@gmail.com </p>\n\n          <button class="jr_side_edit" menuClose (click)="editprofile()">edit</button>\n\n       \n\n            <button ion-button full (click)="showPlatform()">Where am I running?</button>\n\n      \n\n          \n\n          <ul>\n\n            <li menuClose ><img src="assets/img/jr_side1.png"><span>Your ride</span></li>\n\n            <li menuClose (click)="findride()"><img src="assets/img/jr_side2.png"><span>Find a ride</span></li>\n\n            <li menuClose (click)="offerride()"><img src="assets/img/jr_side3.png"><span>Offer a ride</span></li>\n\n            <li menuClose (click)="login()"><img src="assets/img/jr_side4.png"><span>Logout</span></li>\n\n          </ul>\n\n        </div>\n\n      </div>\n\n    </div>\n\n\n\n</ion-content>\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n\n\n<!--<ion-list>\n\n  <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n    {{p.title}}\n\n  </button>\n\n</ion-list>-->\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\app\app.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MyApp);
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map

/***/ })

},[486]);
//# sourceMappingURL=main.js.map