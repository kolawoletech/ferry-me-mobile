webpackJsonp([23],{

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCarPhotoPageModule", function() { return AddCarPhotoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_car_photo__ = __webpack_require__(746);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddCarPhotoPageModule = /** @class */ (function () {
    function AddCarPhotoPageModule() {
    }
    AddCarPhotoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_car_photo__["a" /* AddCarPhotoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_car_photo__["a" /* AddCarPhotoPage */]),
            ],
        })
    ], AddCarPhotoPageModule);
    return AddCarPhotoPageModule;
}());

//# sourceMappingURL=add-car-photo.module.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCarPhotoPage; });
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
 * Generated class for the AddCarPhotoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddCarPhotoPage = /** @class */ (function () {
    function AddCarPhotoPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    AddCarPhotoPage.prototype.ionViewDidLoad = function () {
    };
    AddCarPhotoPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddCarPhotoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-car-photo',template:/*ion-inline-start:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\add-car-photo\add-car-photo.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Upload your car image</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="jr_add_car_bg">\n\n  <div class="jr_profile_content jr_paddingbtm0">\n\n    <div class="jr_text_center">\n\n      <div class="jr_edit_row jr_text_center">\n\n        <br><br>\n\n        <h4 class="jr_padding0 jr_margin0">Add an image</h4>\n\n        <h3 class="jr_margintop0">of your car</h3>\n\n      <hr>\n\n      <br>\n\n      <br>\n\n      </div>\n\n      <div class="jr_upload_image_car">\n\n        <img src="assets/img/jr_car_img.png" >\n\n      </div>\n\n    </div>\n\n    <div class="jr_bottom_button_bay">\n\n      <button ion-button class="jr_offer_ride2">Upload image</button>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\add-car-photo\add-car-photo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], AddCarPhotoPage);
    return AddCarPhotoPage;
}());

//# sourceMappingURL=add-car-photo.js.map

/***/ })

});
//# sourceMappingURL=23.js.map