webpackJsonp([14],{

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdeditPageModule", function() { return IdeditPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__idedit__ = __webpack_require__(755);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IdeditPageModule = /** @class */ (function () {
    function IdeditPageModule() {
    }
    IdeditPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__idedit__["a" /* IdeditPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__idedit__["a" /* IdeditPage */]),
            ],
        })
    ], IdeditPageModule);
    return IdeditPageModule;
}());

//# sourceMappingURL=idedit.module.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IdeditPage; });
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
 * Generated class for the IdeditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IdeditPage = /** @class */ (function () {
    function IdeditPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    IdeditPage.prototype.ionViewDidLoad = function () {
    };
    IdeditPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    IdeditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-idedit',template:/*ion-inline-start:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\idedit\idedit.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Confirm id</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="jr_profile_content">\n\n    <div class="jr_text_center">\n\n      <div class="jr_edit_row jr_text_center">\n\n        <br><br>\n\n      <h4 class="jr_padding0 jr_margin0">is that the name on your</h4>\n\n      <h3 class="jr_margintop0">Aadhar card</h3>\n\n      <hr>\n\n    </div>\n\n      </div>\n\n    <div class="jr_edit_row">\n\n          <h5>FIRST NAME</h5>\n\n          <input class="jr_edit_profile_input" placeholder="FIRST NAME">\n\n        </div>\n\n        <div class="jr_edit_row">\n\n              <h5>LAST NAME</h5>\n\n              <input class="jr_edit_profile_input" placeholder="LAST NAME">\n\n            </div>\n\n            <div class="jr_confidential jr_bordernone">\n\n              <div class="jr_confidential_left">\n\n                <img src="assets/img/jr_confidentional.png" >\n\n              </div>\n\n              <div class="jr_confidential_right">\n\n                <p>Your ID card will be kept strictly\n\n      confidential</p>\n\n              </div>\n\n              <div class="jr_clear"></div>\n\n            </div>\n\n\n\n\n\n  <div class="jr_bottom_button_bay">\n\n    <button ion-button class="jr_offer_ride2">Continue</button>\n\n  </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\idedit\idedit.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], IdeditPage);
    return IdeditPage;
}());

//# sourceMappingURL=idedit.js.map

/***/ })

});
//# sourceMappingURL=14.js.map