webpackJsonp([21],{

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCarPhotoPageModule", function() { return AddCarPhotoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_car_photo__ = __webpack_require__(742);
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

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCarPhotoPage; });
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
            selector: 'page-add-car-photo',template:/*ion-inline-start:"C:\Users\kolaw\Documents\freelance\ferryMe\modularApp\src\pages\add-car-photo\add-car-photo.html"*/'<ion-header class="jr_theme_color jr_header">\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n  <div class="jr_header_title">\n    <h4>Upload your car image</h4>\n  </div>\n  <button ion-button class="jr_right jr_header_btn"></button>\n  <div class="jr_clear"></div>\n</ion-header>\n\n\n<ion-content class="jr_add_car_bg">\n  <div class="jr_profile_content jr_paddingbtm0">\n    <div class="jr_text_center">\n      <div class="jr_edit_row jr_text_center">\n        <br><br>\n        <h4 class="jr_padding0 jr_margin0">Add an image</h4>\n        <h3 class="jr_margintop0">of your car</h3>\n      <hr>\n      <br>\n      <br>\n      </div>\n      <div class="jr_upload_image_car">\n        <img src="assets/img/jr_car_img.png" >\n      </div>\n    </div>\n    <div class="jr_bottom_button_bay">\n      <button ion-button class="jr_offer_ride2">Upload image</button>\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\kolaw\Documents\freelance\ferryMe\modularApp\src\pages\add-car-photo\add-car-photo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], AddCarPhotoPage);
    return AddCarPhotoPage;
}());

//# sourceMappingURL=add-car-photo.js.map

/***/ })

});
//# sourceMappingURL=21.js.map