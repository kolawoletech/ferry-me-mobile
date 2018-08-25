webpackJsonp([19],{

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditIdPageModule", function() { return EditIdPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_id__ = __webpack_require__(749);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditIdPageModule = /** @class */ (function () {
    function EditIdPageModule() {
    }
    EditIdPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_id__["a" /* EditIdPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_id__["a" /* EditIdPage */]),
            ],
        })
    ], EditIdPageModule);
    return EditIdPageModule;
}());

//# sourceMappingURL=edit-id.module.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditIdPage; });
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
 * Generated class for the EditIdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditIdPage = /** @class */ (function () {
    function EditIdPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    EditIdPage.prototype.ionViewDidLoad = function () {
    };
    EditIdPage.prototype.idupload = function () {
        this.navCtrl.push('IduploadPage');
    };
    EditIdPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditIdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-id',template:/*ion-inline-start:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\edit-id\edit-id.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Choose your Govt ID</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="jr_profile_wrapper">\n\n    <div class="jr_profile_banner">\n\n        <img src="assets/img/jr_chooseid.png" class="jr_chooseid">\n\n    </div>\n\n    <div class="jr_profile_content">\n\n      <div class="jr_text_center">\n\n        <div class="jr_edit_row jr_text_center">\n\n        <h4 class="jr_padding0 jr_margin0">Choose the type of </h4>\n\n        <h3 class="jr_margintop0">Govt. ID</h3>\n\n        <hr>\n\n      </div>\n\n        <div class="jr_edit_row ">\n\n          <div class="jr_proofs_list">\n\n            <li><ion-radio ng-model="choice1" ng-value="\'A\'" class="jr_radio_id"></ion-radio><p>Passport</p><div class="jr_clear"></div></li>\n\n            <li><ion-radio ng-model="choice2" ng-value="\'B\'" class="jr_radio_id"></ion-radio><p>Aadhaar Card</p><div class="jr_clear"></div></li>\n\n            <li><ion-radio ng-model="choice3" ng-value="\'C\'" class="jr_radio_id"></ion-radio><p>Pan Card</p><div class="jr_clear"></div></li>\n\n          </div>\n\n      </div>\n\n      </div>\n\n      <div class="jr_confidential">\n\n        <div class="jr_confidential_left">\n\n          <img src="assets/img/jr_confidentional.png" >\n\n        </div>\n\n        <div class="jr_confidential_right">\n\n          <p>Your ID card will be kept strictly\n\nconfidential</p>\n\n        </div>\n\n        <div class="jr_clear"></div>\n\n      </div>\n\n    </div>\n\n    <hr>\n\n\n\n    <div class="jr_bottom_button_bay">\n\n      <button ion-button class="jr_offer_ride2" (click)="idupload()">Continue</button>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\edit-id\edit-id.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], EditIdPage);
    return EditIdPage;
}());

//# sourceMappingURL=edit-id.js.map

/***/ })

});
//# sourceMappingURL=19.js.map