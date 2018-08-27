webpackJsonp([22],{

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBioPageModule", function() { return EditBioPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_bio__ = __webpack_require__(748);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditBioPageModule = /** @class */ (function () {
    function EditBioPageModule() {
    }
    EditBioPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_bio__["a" /* EditBioPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_bio__["a" /* EditBioPage */]),
            ],
        })
    ], EditBioPageModule);
    return EditBioPageModule;
}());

//# sourceMappingURL=edit-bio.module.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { NavController,ViewController } from 'ionic-angular';
/**
 * Generated class for the EditBioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditBioPage = /** @class */ (function () {
    function EditBioPage(navCtrl, viewCtrl, navParams, formBuilder, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.userProfile = null;
        this.bioForm = formBuilder.group({
            firstName: [''],
            lastName: [''],
            sex: [''],
            dob: [''],
            bio: [''],
            addressLineOne: [''],
            addressLineTwo: [''],
            city: [''],
            province: [''],
            zip: ['']
        });
    }
    EditBioPage.prototype.ionViewDidLoad = function () {
    };
    EditBioPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    EditBioPage.prototype.reset = function () {
    };
    EditBioPage.prototype.save = function () {
    };
    EditBioPage.prototype.getAge = function (birthdate) {
        var currentTime = new Date().getTime();
        return ((currentTime - birthdate) / 31556952000).toFixed(0);
    };
    EditBioPage.prototype.saveBio = function () {
        var loading = this.loadingCtrl.create();
        if (!this.bioForm.valid) {
            console.log(this.bioForm.value);
        }
        else {
        }
    };
    var _a, _b, _c, _d, _e, _f;
    EditBioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-bio',template:/*ion-inline-start:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\edit-bio\edit-bio.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Edit Biography</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n<ion-content>\n\n  <div>\n\n    <form class="jr_offerride_details" [formGroup]="bioForm" (submit)="saveBio()" novalidate>\n\n\n\n      <ion-item class="jr_input_comment">\n\n        <ion-label>First Name</ion-label>\n\n        <ion-input formControlName="firstName" type="text" placeholder="First Name"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="!bioForm.controls.firstName.valid &&\n\n            bioForm.controls.firstName.dirty">\n\n        <p>Please enter your first name</p>\n\n\n\n      </ion-item>\n\n      <ion-item class="jr_input_comment">\n\n        <ion-label>Last Name</ion-label>\n\n        <ion-input formControlName="lastName" type="text" placeholder="Last Name"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="!bioForm.controls.lastName.valid &&\n\n              bioForm.controls.lastName.dirty">\n\n        <p>Please enter your last name</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Sex</ion-label>\n\n        <ion-select formControlName="sex" required>\n\n          <ion-option value="Male">Male</ion-option>\n\n          <ion-option value="Female">Female</ion-option>\n\n          <ion-option value="Prefer Not To Say">Prefer Not to Say</ion-option>\n\n        </ion-select>\n\n\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="!bioForm.controls.sex.valid &&\n\n      bioForm.controls.sex.dirty">\n\n        <p>Please select an option</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Birth Date</ion-label>\n\n        <ion-datetime formControlName="dob" required displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY"></ion-datetime>\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="!bioForm.controls.dob.valid &&\n\n      bioForm.controls.dob.dirty">\n\n        <p>Please select an option</p>\n\n      </ion-item>\n\n\n\n      <h4 text-center>Address Details</h4>\n\n\n\n      <ion-item>\n\n        <ion-label>Address Line 1</ion-label>\n\n        <ion-input formControlName="addressLineOne"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="!bioForm.controls.addressLineOne.valid &&\n\n      bioForm.controls.addressLineOne.dirty">\n\n        <p>Please Enter Your Street Address</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Address Line 2</ion-label>\n\n        <ion-input formControlName="addressLineTwo" placeholder="You can leave it blank"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>City/Town</ion-label>\n\n        <ion-input formControlName="city"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="!bioForm.controls.city.valid &&\n\n          bioForm.controls.city.dirty">\n\n        <p>Enter Your City/Town name</p>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Sex</ion-label>\n\n        <ion-select formControlName="province" required>\n\n          <ion-option value="Eastern Cape">Eastern Cape</ion-option>\n\n          <ion-option value="Free State">Free State</ion-option>\n\n          <ion-option value="Gauteng">Gauteng</ion-option>\n\n          <ion-option value="KwaZulu-Natal">KwaZulu-Natal</ion-option>\n\n          <ion-option value="Limpopo">Limpopo</ion-option>\n\n          <ion-option value="Mpumalanga">Mpumalanga</ion-option>\n\n          <ion-option value="Western Cape">Western Cape</ion-option>\n\n          <ion-option value="North West">North West</ion-option>\n\n          <ion-option value="Northern Cape">Northern Cape</ion-option>\n\n        </ion-select>\n\n\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="!bioForm.controls.province.valid &&\n\n        bioForm.controls.province.dirty">\n\n        <p>Please select an option</p>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-label>Zip</ion-label>\n\n          <ion-input formControlName="zip"></ion-input>\n\n        </ion-item>\n\n        <ion-item class="error-message" *ngIf="!bioForm.controls.zip.valid &&\n\n            bioForm.controls.zip.dirty">\n\n          <p>Enter Your A Zip Code</p>\n\n        </ion-item>\n\n        <div class="jr_bottom_button_bay">\n\n            <button  [disabled]="!bioForm.valid" ion-button block type="submit" class="jr_tick" >\n\n              <img src="assets/img/jr_tick.png">\n\n            </button>\n\n          </div>\n\n    </form>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\edit-bio\edit-bio.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _f || Object])
    ], EditBioPage);
    return EditBioPage;
}());

//# sourceMappingURL=edit-bio.js.map

/***/ })

});
//# sourceMappingURL=22.js.map