webpackJsonp([20],{

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help__ = __webpack_require__(763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HelpPageModule = /** @class */ (function () {
    function HelpPageModule() {
    }
    HelpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */]),
            ],
        })
    ], HelpPageModule);
    return HelpPageModule;
}());

//# sourceMappingURL=help.module.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
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
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        this.tab = "active";
    };
    HelpPage.prototype.tab_swap = function (type) {
        this.tab = type;
    };
    HelpPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    HelpPage.prototype.profile = function () {
        this.navCtrl.push('ProfilePage');
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\help\help.html"*/'<ion-header class="jr_theme_color jr_header">\n  <!--   <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n     -->\n  <div class="jr_header_title">\n    <h4>Help</h4>\n  </div>\n    \n  <div class="jr_icon_bar">\n     \n    <span> <img  width="192px"   alt="logo" src="assets/icon/ico-trans.png"></span>\n   \n   </div>\n\n  <div class="jr_clear"></div>\n  <div class="jr_home_tab_bay1">\n    <ul>\n      <li [class.active]="tab==\'active\'" (click)="tab_swap(\'active\')">HELP</li>\n      <li [class.active]="tab==\'inactive\'" (click)="tab_swap(\'inactive\')">FAQs</li>\n      <div class="jr_clear"></div>\n    </ul>\n  </div>\n</ion-header>\n<ion-content class="jr_body_wrapper">\n  <div class="jr_message_wrapper">\n    <div class="jr_home_tab_content" [hidden]="tab==\'inactive\'">\n      <div class="jr_profile_content">\n        <div class="jr_no_msg">\n          <div class="jr_offer_bg">\n            <img src="assets/img/jr_nomsg.png">\n          </div>\n          <div class="jr_text_center">\n            <div class="jr_edit_row jr_text_center">\n              <br><br>\n              <hr>\n              <br><br>\n              <h4 class="jr_padding0 jr_margin0">Hello and Welcome to Our</h4>\n              <h3 class="jr_margintop0">Support Centre</h3>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="jr_home_tab_content" [hidden]="tab==\'active\'">\n      <div class="jr_profile_content">\n        <div class="jr_no_msg">\n          <div class="jr_offer_bg">\n            <img src="assets/img/jr_no_not.png">\n          </div>\n          <div class="jr_text_center">\n            <div class="jr_edit_row jr_text_center">\n              <br><br>\n              <hr>\n              <br><br>\n              <h4 class="jr_padding0 jr_margin0">currently you have</h4>\n              <h3 class="jr_margintop0">no Requests</h3>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\help\help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ })

});
//# sourceMappingURL=20.js.map