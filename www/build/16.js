webpackJsonp([16],{

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPreferencePageModule", function() { return EditPreferencePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_preference__ = __webpack_require__(758);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditPreferencePageModule = /** @class */ (function () {
    function EditPreferencePageModule() {
    }
    EditPreferencePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_preference__["a" /* EditPreferencePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_preference__["a" /* EditPreferencePage */]),
            ],
        })
    ], EditPreferencePageModule);
    return EditPreferencePageModule;
}());

//# sourceMappingURL=edit-preference.module.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPreferencePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(93);
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
 * Generated class for the EditPreferencePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditPreferencePage = /** @class */ (function () {
    function EditPreferencePage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    EditPreferencePage.prototype.ionViewDidLoad = function () {
    };
    EditPreferencePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditPreferencePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-preference',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\edit-preference\edit-preference.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Edit Preference</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="jr_offerride_details">\n\n    <ul>\n\n      <li class="jr_bordernone jr_paddingbtm0">\n\n        <h4>Chattiness</h4>\n\n        <div class="jr_pre_row">\n\n          <div class="jr_width15">\n\n            <span><img src="assets/img/e_pre1.png"></span>\n\n          </div>\n\n          <div class="jr_width85">\n\n              <select class="jr_pre_select1">\n\n                      <option>I am quiet type</option>\n\n              </select>\n\n          </div>\n\n          <div class="jr_clear"></div>\n\n        </div>\n\n      </li>\n\n      <li class="jr_bordernone jr_paddingbtm0">\n\n        <h4>Smoking</h4>\n\n        <div class="jr_pre_row">\n\n          <div class="jr_width15">\n\n            <span><img src="assets/img/e_pre2.png"></span>\n\n          </div>\n\n          <div class="jr_width85">\n\n              <select class="jr_pre_select1">\n\n                      <option>Dont know</option>\n\n              </select>\n\n          </div>\n\n          <div class="jr_clear"></div>\n\n        </div>\n\n      </li>\n\n      <li class="jr_bordernone jr_paddingbtm0">\n\n        <h4>Music</h4>\n\n        <div class="jr_pre_row">\n\n          <div class="jr_width15">\n\n            <span><img src="assets/img/e_pre3.png"></span>\n\n          </div>\n\n          <div class="jr_width85">\n\n              <select class="jr_pre_select1">\n\n                      <option>I like music</option>\n\n              </select>\n\n          </div>\n\n          <div class="jr_clear"></div>\n\n        </div>\n\n      </li>\n\n      <li class="jr_bordernone jr_paddingbtm0">\n\n        <h4>Pets</h4>\n\n        <div class="jr_pre_row">\n\n          <div class="jr_width15">\n\n            <span><img src="assets/img/e_pre4.png"></span>\n\n          </div>\n\n          <div class="jr_width85">\n\n              <select class="jr_pre_select1">\n\n                      <option>Please welcome</option>\n\n              </select>\n\n          </div>\n\n          <div class="jr_clear"></div>\n\n        </div>\n\n      </li>\n\n\n\n    </ul>\n\n    <div class="jr_bottom_button_bay">\n\n      <button ion-button class="jr_offer_ride2">Save Preferences</button>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\edit-preference\edit-preference.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], EditPreferencePage);
    return EditPreferencePage;
}());

//# sourceMappingURL=edit-preference.js.map

/***/ })

});
//# sourceMappingURL=16.js.map