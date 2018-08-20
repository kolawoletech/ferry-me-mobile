webpackJsonp([17],{

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditIdPageModule", function() { return EditIdPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_id__ = __webpack_require__(744);
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

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditIdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
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
            selector: 'page-edit-id',template:/*ion-inline-start:"C:\Users\kolaw\Documents\freelance\ferryMe\modularApp\src\pages\edit-id\edit-id.html"*/'<ion-header class="jr_theme_color jr_header">\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n  <div class="jr_header_title">\n    <h4>Choose your Govt ID</h4>\n  </div>\n  <button ion-button class="jr_right jr_header_btn"></button>\n  <div class="jr_clear"></div>\n</ion-header>\n\n<ion-content>\n  <div class="jr_profile_wrapper">\n    <div class="jr_profile_banner">\n        <img src="assets/img/jr_chooseid.png" class="jr_chooseid">\n    </div>\n    <div class="jr_profile_content">\n      <div class="jr_text_center">\n        <div class="jr_edit_row jr_text_center">\n        <h4 class="jr_padding0 jr_margin0">Choose the type of </h4>\n        <h3 class="jr_margintop0">Govt. ID</h3>\n        <hr>\n      </div>\n        <div class="jr_edit_row ">\n          <div class="jr_proofs_list">\n            <li><ion-radio ng-model="choice1" ng-value="\'A\'" class="jr_radio_id"></ion-radio><p>Passport</p><div class="jr_clear"></div></li>\n            <li><ion-radio ng-model="choice2" ng-value="\'B\'" class="jr_radio_id"></ion-radio><p>Aadhaar Card</p><div class="jr_clear"></div></li>\n            <li><ion-radio ng-model="choice3" ng-value="\'C\'" class="jr_radio_id"></ion-radio><p>Pan Card</p><div class="jr_clear"></div></li>\n          </div>\n      </div>\n      </div>\n      <div class="jr_confidential">\n        <div class="jr_confidential_left">\n          <img src="assets/img/jr_confidentional.png" >\n        </div>\n        <div class="jr_confidential_right">\n          <p>Your ID card will be kept strictly\nconfidential</p>\n        </div>\n        <div class="jr_clear"></div>\n      </div>\n    </div>\n    <hr>\n\n    <div class="jr_bottom_button_bay">\n      <button ion-button class="jr_offer_ride2" (click)="idupload()">Continue</button>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\kolaw\Documents\freelance\ferryMe\modularApp\src\pages\edit-id\edit-id.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], EditIdPage);
    return EditIdPage;
}());

//# sourceMappingURL=edit-id.js.map

/***/ })

});
//# sourceMappingURL=17.js.map