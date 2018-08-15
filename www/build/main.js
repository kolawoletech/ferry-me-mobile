webpackJsonp([19],{

/***/ 169:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 169;

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-car-photo/add-car-photo.module": [
		709,
		18
	],
	"../pages/add-car/add-car.module": [
		710,
		17
	],
	"../pages/edit-bio/edit-bio.module": [
		711,
		16
	],
	"../pages/edit-car/edit-car.module": [
		712,
		15
	],
	"../pages/edit-id/edit-id.module": [
		713,
		14
	],
	"../pages/edit-photo/edit-photo.module": [
		714,
		13
	],
	"../pages/edit-preference/edit-preference.module": [
		715,
		12
	],
	"../pages/edit-profile/edit-profile.module": [
		716,
		11
	],
	"../pages/find-ride/find-ride.module": [
		717,
		10
	],
	"../pages/landing/landing.module": [
		718,
		9
	],
	"../pages/login/login.module": [
		719,
		8
	],
	"../pages/message/message.module": [
		720,
		7
	],
	"../pages/offer-ride/offer-ride.module": [
		721,
		6
	],
	"../pages/phone/phone.module": [
		722,
		5
	],
	"../pages/pop-over-more/pop-over-more.module": [
		723,
		4
	],
	"../pages/pop-over/pop-over.module": [
		724,
		3
	],
	"../pages/profile/profile.module": [
		725,
		2
	],
	"../pages/public-profile/public-profile.module": [
		727,
		1
	],
	"../pages/signup/signup.module": [
		726,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 214;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(134);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthProvider = /** @class */ (function () {
    function AuthProvider(afAuth, afDb) {
        this.afAuth = afAuth;
        this.afDb = afDb;
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.loginUser = function (email, password) {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.signupUser = function (username, firstName, lastName, email, password) {
        var _this = this;
        return this.afAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (newUser) {
            _this.afDb
                .object("/userProfile/" + newUser.user.uid)
                .set({
                email: email,
                username: username,
                firstName: firstName,
                lastName: lastName
            });
        }, function (error) {
            console.error(error);
        });
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.logoutUser = function () {
        return this.afAuth.auth.signOut();
        //afAuth.auth.unsubscribe();
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_database__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProfileProvider = /** @class */ (function () {
    function ProfileProvider(afAuth, afDb) {
        var _this = this;
        this.afAuth = afAuth;
        this.afDb = afDb;
        __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.currentUser = user;
                _this.userProfile = __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.database().ref("/userProfile/" + user.uid);
            }
        });
    }
    ProfileProvider.prototype.getUserProfile = function () {
        return this.userProfile;
    };
    ProfileProvider.prototype.updateName = function (firstName, lastName) {
        return this.userProfile.update({ firstName: firstName, lastName: lastName });
    };
    ProfileProvider.prototype.updateDOB = function (birthDate) {
        return this.userProfile.update({ birthDate: birthDate });
    };
    ProfileProvider.prototype.updateEmail = function (newEmail, password) {
        var _this = this;
        var credential = __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.auth.
            EmailAuthProvider.credential(this.currentUser.email, password);
        return this.currentUser
            .reauthenticateWithCredential(credential)
            .then(function (user) {
            _this.currentUser.updateEmail(newEmail).then(function (user) {
                _this.userProfile.update({ email: newEmail });
            });
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    ProfileProvider.prototype.updatePassword = function (newPassword, oldPassword) {
        var _this = this;
        var credential = __WEBPACK_IMPORTED_MODULE_3_firebase_app___default.a.auth
            .EmailAuthProvider.credential(this.currentUser.email, oldPassword);
        return this.currentUser
            .reauthenticateWithCredential(credential)
            .then(function (user) {
            _this.currentUser.updatePassword(newPassword).then(function (user) {
                console.log('Password Changed');
            });
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    ProfileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], ProfileProvider);
    return ProfileProvider;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(367);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__credentials__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase_app__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_profile_profile__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















__WEBPACK_IMPORTED_MODULE_10_firebase_app__["initializeApp"](__WEBPACK_IMPORTED_MODULE_9__credentials__["a" /* firebaseConfig */]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-car-photo/add-car-photo.module#AddCarPhotoPageModule', name: 'AddCarPhotoPage', segment: 'add-car-photo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-car/add-car.module#AddCarPageModule', name: 'AddCarPage', segment: 'add-car', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-bio/edit-bio.module#EditBioPageModule', name: 'EditBioPage', segment: 'edit-bio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-car/edit-car.module#EditCarPageModule', name: 'EditCarPage', segment: 'edit-car', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-id/edit-id.module#EditIdPageModule', name: 'EditIdPage', segment: 'edit-id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-photo/edit-photo.module#EditPhotoPageModule', name: 'EditPhotoPage', segment: 'edit-photo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-preference/edit-preference.module#EditPreferencePageModule', name: 'EditPreferencePage', segment: 'edit-preference', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/find-ride/find-ride.module#FindRidePageModule', name: 'FindRidePage', segment: 'find-ride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message.module#MessagePageModule', name: 'MessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offer-ride/offer-ride.module#OfferRidePageModule', name: 'OfferRidePage', segment: 'offer-ride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/phone/phone.module#PhonePageModule', name: 'PhonePage', segment: 'phone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pop-over-more/pop-over-more.module#PopOverMorePageModule', name: 'PopOverMorePage', segment: 'pop-over-more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pop-over/pop-over.module#PopOverPageModule', name: 'PopOverPage', segment: 'pop-over', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/public-profile/public-profile.module#PublicProfilePageModule', name: 'PublicProfilePage', segment: 'public-profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__credentials__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_profile_profile__["a" /* ProfileProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth) {
        var _this = this;
        afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.rootPage = 'LandingPage';
            }
            else {
                _this.rootPage = 'ProfilePage';
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\kolaw\Documents\freelance\ferryMe\modularApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\kolaw\Documents\freelance\ferryMe\modularApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.tab = "active";
    };
    HomePage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create('PopOverMorePage');
        popover.present({
            ev: myEvent
        });
    };
    HomePage.prototype.offerride = function () {
        this.navCtrl.push('OfferRidePage');
    };
    HomePage.prototype.findride = function () {
        this.navCtrl.push('FindRidePage');
    };
    HomePage.prototype.profile = function () {
        this.navCtrl.push('ProfilePage');
    };
    HomePage.prototype.tab_swap = function (type) {
        this.tab = type;
    };
    HomePage.prototype.message = function () {
        this.navCtrl.push('MessagePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\kolaw\Documents\freelance\ferryMe\modularApp\src\pages\home\home.html"*/'<ion-header class="jr_theme_color jr_header">\n    <button menuToggle ion-button class="jr_left jr_header_btn jr_sidemenu_icon"></button>\n    <div class="jr_header_title">\n      <h4>Your rides</h4>\n    </div>\n    <button ion-button class="jr_right jr_header_btn jr_mail_icon" (click)="message()"></button>\n    <button ion-button class="jr_right jr_header_btn jr_profile_icon" (click)="profile()"></button>\n    <div class="jr_clear"></div>\n    <div class="jr_home_tab_bay">\n      <ul>\n        <li [class.active]="tab==\'active\'" (click)="tab_swap(\'active\')">Current</li>\n        <li [class.active]="tab==\'inactive\'" (click)="tab_swap(\'inactive\')">History</li>\n      </ul>\n    </div>\n  </ion-header>\n  <ion-content class="jr_body_wrapper">\n    <div class="jr_home_tab_content"  [hidden]="tab==\'inactive\'">\n    <div class="jr_div_half">\n      <div class="jr_div_overlay">\n        <div class="jr_over_inner">\n        <button ion-button class="jr_offer_ride" (click)="offerride()">Offer a ride</button>\n        <p>Share your car journey with co- travellers just like you and cover all your fuel costs!</p>\n      </div>\n      </div>\n      <img src="assets/img/jr_div_half1.png">\n    </div>\n    <div class="jr_div_half">\n      <div class="jr_div_overlay">\n        <div class="jr_over_inner">\n        <button ion-button class="jr_offer_ride1" (click)="findride()"> Find a ride</button>\n        <p>Yoyfull and comfortable travel, share your journey with all like you</p>\n      </div>\n      </div>\n      <img src="assets/img/jr_div_half2.png">\n    </div>\n    <!-- <div class="jr_home_active">\n      <div class="jr_profile_content">\n        <div class="jr_home_offer_ride">\n          <ul>\n            <div class="jr_offer_ride_top">\n              Offered Ride\n            </div>\n            <li>\n              <div class="jr_home_offer_photo"><img src="assets/img/jr_car_img.png"></div>\n              <div class="jr_home_offer_detail">\n                <h5>Saturday 29, April</h5>\n                <h6>05: 00 am</h6>\n                <p>Majestic<span><img src="assets/img/jr_forward.png"></span>Christ Tower</p>\n                <div class="jr_edit_more" (click)="presentPopover($event)"><img src="assets/img/jr_more.png"></div>\n              </div>\n              <div class="jr_clear"></div>\n  \n              <div class="jr_home_btm">\n                <hr>\n                <p>Request waiting for Approval</p>\n              </div>\n            </li>\n            <li>\n              <div class="jr_home_offer_photo"><img src="assets/img/jr_car_img.png"></div>\n              <div class="jr_home_offer_detail">\n                <h5>Saturday 29, April</h5>\n                <h6>05: 00 am</h6>\n                <p>Electronic City<span><img src="assets/img/jr_forward.png"></span>Madiwala</p>\n                <div class="jr_edit_more" (click)="presentPopover($event)"><img src="assets/img/jr_more.png"></div>\n              </div>\n              <div class="jr_clear"></div>\n  \n            </li>\n          </ul>\n          <ul>\n            <div class="jr_book_ride_top">\n              Your Bookings\n            </div>\n            <li>\n              <div class="jr_home_offer_photo"><img src="assets/img/jr_car_img.png"></div>\n              <div class="jr_home_offer_detail">\n                <h5>Saturday 29, April</h5>\n                <h6>05: 00 am</h6>\n                <p>Infopark<span><img src="assets/img/jr_forward.png"></span>Piravom</p>\n                <div class="jr_edit_more" (click)="presentPopover($event)"><img src="assets/img/jr_more.png"></div>\n              </div>\n              <div class="jr_clear"></div>\n  \n              <div class="jr_home_btm">\n                <hr>\n                <p>Request waiting for Approval</p>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div> -->\n  </div>\n  <div class="jr_home_tab_content jr_theme_color jr_text_center" [hidden]="tab==\'active\'" >\n    <div class="jr_ride_wrapper">\n      <br><br>\n      <img src="assets/img/jr_history.png">\n      <p>You have no recent rides. They are auto-<br>matically archived after 10 days.</p>\n      <button ion-button class="jr_archive_btn">See archived rides</button>\n    </div>\n  </div>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\kolaw\Documents\freelance\ferryMe\modularApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyDOicS3PNywWR3JdO0RgmbOIYya4HClKqc",
    authDomain: "rgengineering-b394c.firebaseapp.com",
    databaseURL: "https://rgengineering-b394c.firebaseio.com",
    projectId: "rgengineering-b394c",
    storageBucket: "rgengineering-b394c.appspot.com",
    messagingSenderId: "924137236064"
};
//# sourceMappingURL=credentials.js.map

/***/ })

},[362]);
//# sourceMappingURL=main.js.map