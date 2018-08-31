webpackJsonp([2],{

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(765);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 751:
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

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_email__ = __webpack_require__(751);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(164);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(googlePlus, facebook, navParams, modalCtrl, navCtrl, authProvider, loadingCtrl, alertCtrl, formBuilder) {
        this.googlePlus = googlePlus;
        this.facebook = facebook;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.userProfile = null;
        this.loginForm = formBuilder.group({
            email: [
                "",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__validators_email__["a" /* EmailValidator */].isValid])
            ],
            password: [
                "",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])
            ]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.home = function () {
        this.navCtrl.push('TabsPage');
    };
    LoginPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push('LandingPage');
    };
    LoginPage.prototype.loginWithFacebook = function () {
        var _this = this;
        this.facebook.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) { return console.log('Logged into Facebook!', res); })
            .then(function () { return _this.navCtrl.setRoot('TabsPage'); })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    LoginPage.prototype.loginWithGoogle = function () {
        this.authProvider.googleLogin();
        this.navCtrl.setRoot('TabsPage');
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = this.loadingCtrl.create();
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
        }
        else {
            this.authProvider
                .login(this.loginForm.value.email, this.loginForm.value.password)
                .then(function () {
                loading.dismiss().then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomePage */]);
                });
            }, function (error) {
                loading.dismiss().then(function () {
                    console.log(error);
                });
            });
        }
        loading.present();
    };
    LoginPage.prototype.password = function () {
        this.navCtrl.push('ResetPasswordPage');
    };
    LoginPage.prototype.resetPassword = function () {
        this.navCtrl.push('ResetPasswordPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\login\login.html"*/'<ion-content class="jr_login_bg">\n\n  <div class="jr_profile_content">\n\n    <div class="jr_login_wrapper">\n\n      <div class="jr_ferry">\n\n        <img src="assets/img/landing_logo.png">\n\n      </div>\n\n      <div class="jr_login_detail">\n\n        <h5>Are you</h5>\n\n        <h4>ready to begin ?</h4>\n\n        <p>Share your car journey with co- travellers just<br> like you and cover all your fuel costs!</p>\n\n        <hr>\n\n        <form [formGroup]="loginForm" (submit)="login()" novalidate>\n\n\n\n          <ion-item class="jr_login_input1">\n\n            <ion-input formControlName="email" type="email" placeholder="Email"></ion-input>\n\n          </ion-item>\n\n          <ion-item class="error-message" *ngIf="!loginForm.controls.email.valid &&\n\n          loginForm.controls.email.dirty">\n\n            <p>Please write a valid email.</p>\n\n          </ion-item>\n\n\n\n          <ion-item class="jr_login_input1">\n\n            <ion-input formControlName="password" type="password" placeholder="Password"></ion-input>\n\n          </ion-item>\n\n          <ion-item class="error-message" *ngIf="!loginForm.controls.password.valid &&\n\n          loginForm.controls.password.dirty">\n\n            <p>Your password needs more than 6 characters.</p>\n\n          </ion-item>\n\n          <button ion-button block type="submit" [disabled]="!loginForm.valid" class="jr_offer_ride3">LOGIN</button>\n\n        </form>\n\n        <br>\n\n        <p (click)="password()"><i>Forgot Password</i></p>\n\n        <br>\n\n        <h4 (click)="register()"> <i>Register</i> </h4>\n\n        <br>\n\n        <h5>OR</h5>\n\n        <button ion-button full block (click)="loginWithFacebook()">\n\n          <ion-icon ios="logo-facebook" md="logo-facebook"></ion-icon>\n\n          Login with Facebook\n\n        </button>\n\n\n\n        <button ion-button block color="danger" (click)="loginWithGoogle()">\n\n          <ion-icon ios="logo-google" md="logo-google"></ion-icon>\n\n          Login with Google\n\n        </button>\n\n        <hr>\n\n\n\n      </div>\n\n\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=2.js.map