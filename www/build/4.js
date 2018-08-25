webpackJsonp([4],{

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePicPageModule", function() { return ProfilePicPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_pic__ = __webpack_require__(763);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePicPageModule = /** @class */ (function () {
    function ProfilePicPageModule() {
    }
    ProfilePicPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_pic__["a" /* ProfilePicPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_pic__["a" /* ProfilePicPage */]),
            ],
        })
    ], ProfilePicPageModule);
    return ProfilePicPageModule;
}());

//# sourceMappingURL=profile-pic.module.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_imghandler_imghandler__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__ = __webpack_require__(369);
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
 * Generated class for the ProfilePicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePicPage = /** @class */ (function () {
    function ProfilePicPage(navCtrl, navParams, imgservice, zone, profileProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imgservice = imgservice;
        this.zone = zone;
        this.profileProvider = profileProvider;
        this.loadingCtrl = loadingCtrl;
        this.imgurl = 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e';
        this.moveon = true;
    }
    ProfilePicPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePicPage');
    };
    ProfilePicPage.prototype.chooseimage = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Please wait'
        });
        loader.present();
        this.imgservice.uploadimage().then(function (uploadedurl) {
            loader.dismiss();
            _this.zone.run(function () {
                _this.imgurl = uploadedurl;
                _this.moveon = false;
            });
        });
        loader.dismiss();
    };
    ProfilePicPage.prototype.updateproceed = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: 'Please wait'
        });
        loader.present();
        this.profileProvider.updateimage(this.imgurl).then(function (res) {
            loader.dismiss();
            if (res.success) {
                _this.navCtrl.setRoot('PhonePage');
            }
            else {
                alert(res);
            }
        });
        loader.dismiss();
    };
    ProfilePicPage.prototype.proceed = function () {
        this.navCtrl.setRoot('PhonePage');
    };
    ProfilePicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile-pic',template:/*ion-inline-start:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\profile-pic\profile-pic.html"*/'<!--\n  Generated template for the ProfilePicPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ProfilePic</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="profile-image">\n        <img src="{{imgurl}}">\n      </div>\n      <div>\n        <button ion-button round outline (click)="chooseimage()">Choose an image</button>\n      </div>\n      <div [hidden]="!moveon">\n        <button ion-button round outline (click)="proceed()">Skip this step</button>\n      </div>\n      <div [hidden]="moveon">\n        <button ion-button round outline (click)="updateproceed()">Upload & proceed</button>\n      </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\profile-pic\profile-pic.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_imghandler_imghandler__["a" /* ImghandlerProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_3__providers_profile_profile__["a" /* ProfileProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], ProfilePicPage);
    return ProfilePicPage;
}());

//# sourceMappingURL=profile-pic.js.map

/***/ })

});
//# sourceMappingURL=4.js.map