webpackJsonp([0],{

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(773);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhonePage; });
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
 * Generated class for the PhonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PhonePage = /** @class */ (function () {
    function PhonePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PhonePage.prototype.ionViewDidLoad = function () {
        this.confirmPhone();
    };
    PhonePage.prototype.confirmPhone = function () {
        var _this = this;
        window.AccountKitPlugin.loginWithPhoneNumber({
            useAccessToken: true,
            defaultCountryCode: "ZA",
            facebookNotificationsEnabled: true
        }, function (successdata) {
            window.AccountKitPlugin.getAccount(function (phone) {
                _this.navCtrl.setRoot('HomePage');
            });
        }, function (err) {
            alert(err);
        });
    };
    PhonePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-phone',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\phone\phone.html"*/'<!--\n\n  Generated template for the PhonePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Phone</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\phone\phone.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PhonePage);
    return PhonePage;
}());

//# sourceMappingURL=phone.js.map

/***/ }),

/***/ 773:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__phone_phone__ = __webpack_require__(753);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navParams, modalCtrl, navCtrl, authProvider, loadingCtrl, alertCtrl, formBuilder) {
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.signupForm = formBuilder.group({
            firstName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            email: [
                "",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])
            ],
            password: [
                "",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])
            ]
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.login2 = function () {
        console.log("Form Validation Passed");
    };
    SignupPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        if (!this.signupForm.valid) {
            console.log(this.signupForm.value);
        }
        else {
            this.authProvider
                .signupUser(this.signupForm.value.username, this.signupForm.value.firstName, this.signupForm.value.lastName, this.signupForm.value.email, this.signupForm.value.password)
                .then(function () {
                loading.dismiss().then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__phone_phone__["a" /* PhonePage */]);
                });
            }, function (error) {
                loading.dismiss().then(function () {
                    console.log(error);
                });
            });
        }
        loading.present();
    };
    SignupPage.prototype.verification = function () {
        var modal = this.modalCtrl.create('VerificationPage');
        modal.present();
    };
    SignupPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\signup\signup.html"*/'<ion-content class="jr_login_bg">\n\n  <div class="jr_profile_content">\n\n    <div class="jr_login_detail">\n\n      <h5>Your</h5>\n\n      <h4>journey starts here !</h4>\n\n      <p>Share your car journey with co- travellers just\n\n        <br> like you and cover all your fuel costs!</p>\n\n      <hr>\n\n      <form [formGroup]="signupForm" (submit)="login()" novalidate>\n\n        <ion-item class="jr_login_input1">\n\n          <ion-input formControlName="firstName" type="text" placeholder="First Name"></ion-input>\n\n        </ion-item>\n\n        <ion-item class="error-message" *ngIf="!signupForm.controls.firstName.valid &&\n\n        signupForm.controls.firstName.dirty">\n\n          <p>Hey, you need to enter your first name</p>\n\n        </ion-item>\n\n        <ion-item class="jr_login_input1">\n\n          <ion-input formControlName="lastName" type="text" placeholder="Last Name"></ion-input>\n\n        </ion-item>\n\n        <ion-item class="error-message" *ngIf="!signupForm.controls.lastName.valid &&\n\n        signupForm.controls.lastName.dirty">\n\n          <p>Hey, you need to enter your last name</p>\n\n        </ion-item>\n\n        <ion-item class="jr_login_input1">\n\n          <ion-input formControlName="username" type="text" placeholder="Username"></ion-input>\n\n        </ion-item>\n\n        <ion-item class="error-message" *ngIf="!signupForm.controls.username.valid &&\n\n        signupForm.controls.username.dirty">\n\n          <p>Hey, you need to enter a longer username of minlength of 6</p>\n\n        </ion-item>\n\n        <ion-item class="jr_login_input1">\n\n          <ion-input formControlName="email" type="email" placeholder="Email"></ion-input>\n\n        </ion-item>\n\n        <ion-item class="error-message" *ngIf="!signupForm.controls.email.valid &&\n\n        signupForm.controls.email.dirty">\n\n          <p>Please write a valid email.</p>\n\n        </ion-item>\n\n\n\n        <ion-item class="jr_login_input1">\n\n          <ion-input formControlName="password" type="password" placeholder="Password"></ion-input>\n\n        </ion-item>\n\n        <ion-item class="error-message" *ngIf="!signupForm.controls.password.valid &&\n\n        signupForm.controls.password.dirty">\n\n          <p>Your password needs more than 6 characters.</p>\n\n        </ion-item>\n\n        <button ion-button block type="submit" [disabled]="!signupForm.valid" class="jr_offer_ride3">SIGNUP</button>\n\n      </form>\n\n    </div>\n\n    <!--     <form [formGroup]="signupForm" (submit)="signupUser()" novalidate>\n\n      <ion-item>\n\n        <ion-label stacked>Email</ion-label>\n\n        <ion-input formControlName="email" type="email" placeholder="Your email address" [class.invalid]="!signupForm.controls.email.valid && blur">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="!signupForm.controls.email.valid\n\n        && signupForm.controls.email.touched">\n\n        <p>Please enter a valid email.</p>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label stacked>Password</ion-label>\n\n        <ion-input formControlName="password" type="password" placeholder="Your password" [class.invalid]="!signupForm.controls.password.valid && blur">\n\n        </ion-input>\n\n      </ion-item>\n\n      <ion-item class="error-message" *ngIf="!signupForm.controls.password.valid  &&\n\n        signupForm.controls.password.touched">\n\n        <p>Your password needs more than 6 characters.</p>\n\n      </ion-item>\n\n\n\n      <button ion-button block type="submit" [disabled]="!signupForm.valid">\n\n        Create an Account\n\n      </button>\n\n    </form> -->\n\n\n\n    <div class="jr_landing_btm">\n\n      <button ion-button class="jr_btm_btn2" (click)="goBack()">\n\n        <img src="../../assets/img/jr_arrow1.png">\n\n      </button>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Administrator\Desktop\ferry-me-mobile\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);
        if (re) {
            return null;
        }
        return {
            invalidEmail: true
        };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ })

});
//# sourceMappingURL=0.js.map