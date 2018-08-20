webpackJsonp([20],{

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCarPageModule", function() { return AddCarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_car__ = __webpack_require__(742);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddCarPageModule = /** @class */ (function () {
    function AddCarPageModule() {
    }
    AddCarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_car__["a" /* AddCarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_car__["a" /* AddCarPage */]),
            ],
        })
    ], AddCarPageModule);
    return AddCarPageModule;
}());

//# sourceMappingURL=add-car.module.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCarPage; });
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
 * Generated class for the AddCarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddCarPage = /** @class */ (function () {
    function AddCarPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    AddCarPage.prototype.ionViewDidLoad = function () {
    };
    AddCarPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    AddCarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-car',template:/*ion-inline-start:"C:\Users\kolaw\Documents\freelance\ferryMe\modularApp\src\pages\add-car\add-car.html"*/'<ion-header class="jr_theme_color jr_header">\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n  <div class="jr_header_title">\n    <h4>Add your car</h4>\n  </div>\n  <button ion-button class="jr_right jr_header_btn"></button>\n  <div class="jr_clear"></div>\n</ion-header>\n<ion-content>\n  <div class="jr_profile_content jr_paddingbtm0">\n    <div class="jr_text_center">\n      <div class="jr_edit_row jr_text_center">\n        <br><br>\n        <h3 class="jr_margintop0">Add your car</h3>\n      <hr>\n      <div class="jr_offer_bg">\n          <img src="assets/img/jr_mycar.png">\n      </div>\n      </div>\n    </div>\n    <div class="jr_edit_row">\n      <select class="jr_select jr_bordernone">\n        <option>Choose the make of the Car</option>\n      </select>\n    </div>\n    <div class="jr_edit_row">\n      <select class="jr_select jr_bordernone">\n        <option>Choose the Comfort level</option>\n      </select>\n    </div>\n    <div class="jr_edit_row">\n      <select class="jr_select jr_bordernone">\n        <option>Choose the type of the Car</option>\n      </select>\n    </div>\n    <div class="jr_edit_row">\n      <select class="jr_select jr_bordernone">\n        <option>Choose the Color level</option>\n      </select>\n    </div>\n    <div class="jr_edit_row">\n    <div class="jr_offerride_detail_content">\n          <div class="jr_offerride_detail_content_left jr_no_seat">\n            <h4><img src="assets/img/jr_seat.png">No. of Seats</h4>\n          </div>\n          <div class="jr_offerride_detail_content_right">\n            <div class="jr_offerride_price_tag">\n              <span><img src="assets/img/jr_sub.png"></span>\n              <span class="jr_offer_price" style="color:#717171;">04</span>\n              <span><img src="assets/img/jr_add.png"></span>\n            </div>\n          </div>\n          <div class="jr_clear"></div>\n        </div>\n        </div>\n    </div>\n    <br>\n    <br>\n    <br>\n    <div class="jr_bottom_button_bay">\n        <button ion-button class="jr_offer_ride2">Save my car</button>\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\kolaw\Documents\freelance\ferryMe\modularApp\src\pages\add-car\add-car.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], AddCarPage);
    return AddCarPage;
}());

//# sourceMappingURL=add-car.js.map

/***/ })

});
//# sourceMappingURL=20.js.map