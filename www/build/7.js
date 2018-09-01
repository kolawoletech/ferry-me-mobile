webpackJsonp([7],{

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(777);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 777:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_imghandler_imghandler__ = __webpack_require__(162);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(alertCtrl, navCtrl, navParams, authProvider, profileProvider, popoverCtrl, cameraPlugin, modalCtrl, zone, imgservice) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.profileProvider = profileProvider;
        this.popoverCtrl = popoverCtrl;
        this.cameraPlugin = cameraPlugin;
        this.modalCtrl = modalCtrl;
        this.zone = zone;
        this.imgservice = imgservice;
    }
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.loaduserdetails();
    };
    ProfilePage.prototype.logOut = function () {
        var _this = this;
        this.authProvider.logoutUser().then(function () {
            _this.navCtrl.setRoot("LoginPage");
        });
    };
    ProfilePage.prototype.takePicture = function () {
        var _this = this;
        this.cameraPlugin
            .getPicture({
            quality: 95,
            destinationType: this.cameraPlugin.DestinationType.DATA_URL,
            sourceType: this.cameraPlugin.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: this.cameraPlugin.EncodingType.PNG,
            saveToPhotoAlbum: true
        })
            .then(function (imageData) {
            _this.avatar = imageData;
        }, function (error) {
            console.log("ERROR -> " + JSON.stringify(error));
        });
    };
    ProfilePage.prototype.updateEmail = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            inputs: [{ name: 'newEmail', placeholder: 'Your new email' },
                { name: 'password', placeholder: 'Your password', type: 'password' }],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.profileProvider
                            .updateEmail(data.newEmail, data.password)
                            .then(function () { console.log('Email Changed Successfully'); })
                            .catch(function (error) { console.log('ERROR: ' + error.message); });
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.updatePassword = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            inputs: [
                { name: 'newPassword', placeholder: 'New password', type: 'password' },
                { name: 'oldPassword', placeholder: 'Old password', type: 'password' }
            ],
            buttons: [
                { text: 'Cancel' },
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.profileProvider.updatePassword(data.newPassword, data.oldPassword);
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ProfilePage.prototype.tab_swap = function (type) {
        this.tab = type;
    };
    ProfilePage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create('PopOverPage');
        popover.present({
            ev: myEvent
        });
    };
    ProfilePage.prototype.editprofile = function () {
        var modal = this.modalCtrl.create('EditprofilePage');
        modal.present();
    };
    ProfilePage.prototype.editphoto = function () {
        var modal = this.modalCtrl.create('EditPhoto');
        modal.present();
    };
    ProfilePage.prototype.editbio = function () {
        var modal = this.modalCtrl.create('EditBioPage');
        modal.present();
    };
    ProfilePage.prototype.editpreference = function () {
        var modal = this.modalCtrl.create('EditPreferencePage');
        modal.present();
    };
    ProfilePage.prototype.editid = function () {
        var modal = this.modalCtrl.create('EditIdPage');
        modal.present();
    };
    ProfilePage.prototype.addnumber = function () {
        var modal = this.modalCtrl.create('PhonePage');
        modal.present();
    };
    ProfilePage.prototype.addcar = function () {
        var modal = this.modalCtrl.create('AddCarPage');
        modal.present();
    };
    ProfilePage.prototype.addcarphoto = function () {
        var modal = this.modalCtrl.create('AddCarPhotoPage');
        modal.present();
    };
    ProfilePage.prototype.editcar = function () {
        var modal = this.modalCtrl.create('EditCarPage');
        modal.present();
    };
    ProfilePage.prototype.publicprofile = function () {
        var modal = this.modalCtrl.create('PublicProfilePage');
        modal.present();
    };
    ProfilePage.prototype.notification = function () {
        var modal = this.modalCtrl.create('NotificationPage');
        modal.present();
    };
    ProfilePage.prototype.message = function () {
        this.navCtrl.push('MessagePage');
    };
    ProfilePage.prototype.loaduserdetails = function () {
        var _this = this;
        this.profileProvider.getuserdetails().then(function (res) {
            console.log(res);
            _this.displayName = res.displayName;
            _this.email = res.email;
            _this.phoneNumber = res.phoneNumber;
            _this.zone.run(function () {
                _this.avatar = res.photoURL;
                _this.birthday = res.birthday;
            });
        });
    };
    ProfilePage.prototype.editimage = function () {
        var _this = this;
        var statusalert = this.alertCtrl.create({
            buttons: ['okay']
        });
        this.imgservice.uploadimage().then(function (url) {
            _this.profileProvider.updateimage(url).then(function (res) {
                if (res.success) {
                    statusalert.setTitle('Updated');
                    statusalert.setSubTitle('Your profile pic has been changed successfully!!');
                    statusalert.present();
                    _this.zone.run(function () {
                        _this.avatar = url;
                    });
                }
            }).catch(function (err) {
                statusalert.setTitle('Failed');
                statusalert.setSubTitle('Your profile pic was not changed');
                statusalert.present();
            });
        });
    };
    ProfilePage.prototype.editname = function () {
        var _this = this;
        var statusalert = this.alertCtrl.create({
            buttons: ['okay']
        });
        var alert = this.alertCtrl.create({
            title: 'Edit Nickname',
            inputs: [{
                    name: 'nickname',
                    placeholder: 'Nickname'
                }],
            buttons: [{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: 'Edit',
                    handler: function (data) {
                        if (data.nickname) {
                            _this.profileProvider.updatedisplayname(data.nickname).then(function (res) {
                                if (res.success) {
                                    statusalert.setTitle('Updated');
                                    statusalert.setSubTitle('Your nickname has been changed successfully!!');
                                    statusalert.present();
                                    _this.zone.run(function () {
                                        _this.displayName = data.nickname;
                                    });
                                }
                                else {
                                    statusalert.setTitle('Failed');
                                    statusalert.setSubTitle('Your nickname was not changed');
                                    statusalert.present();
                                }
                            });
                        }
                    }
                }]
        });
        alert.present();
    };
    ProfilePage.prototype.logout = function () {
        var _this = this;
        this.authProvider.logoutUser().then(function () {
            _this.navCtrl.setRoot('LoginPage');
        });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\profile\profile.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <div class="jr_header_title">\n\n    <h4>Profile</h4>\n\n  </div>\n\n    \n\n  <div class="jr_icon_bar">\n\n     \n\n    <span> <img  width="192px"   alt="logo" src="assets/icon/ico-trans.png"></span>\n\n   \n\n   </div>\n\n\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n<ion-content>\n\n  <div class="jr_profile_wrapper">\n\n    <button class="jr_more_pop_up" (click)="presentPopover($event)">\n\n      <img src="assets/img/jr_more.png">\n\n    </button>\n\n\n\n    <div class="jr_profile_banner">\n\n\n\n\n\n      <div class="jr_profile_photo">\n\n        <img alt="avatar" src="{{avatar}}">\n\n        <div class="jr_profile_photo_edit" (click)="editimage()">\n\n          <img src="assets/img/jr_edit.png">\n\n\n\n\n\n        </div>\n\n      </div>\n\n\n\n    </div>\n\n\n\n    <!--     <ion-item (click)="updateName()">\n\n      <ion-grid class="jr_profile_content">\n\n        <ion-row>\n\n          <ion-col col-6> Name </ion-col>\n\n          <ion-col col-6 *ngIf="userProfile?.firstName || userProfile?.lastName">\n\n            {{userProfile?.firstName}} {{userProfile?.lastName}}\n\n          </ion-col>\n\n          <ion-col col-6 class="placeholder-profile" *ngIf="!userProfile?.firstName">\n\n            <span> Tap here to edit. </span>\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-item> -->\n\n\n\n    <div class="jr_profile_content">\n\n      <h4 (click)="updateName()"> {{displayName}}</h4>\n\n      <hr>\n\n      <br>\n\n      <div class="jr_profile_tab_bay">\n\n        <li [class.active]="tab==\'active\'" (click)="tab_swap(\'active\')">Details</li>\n\n        <li [class.active]="tab==\'inactive\'" (click)="tab_swap(\'inactive\')">Accounts</li>\n\n        <div class="jr_clear"></div>\n\n      </div>\n\n      <div class="jr_profile_tab_content" [hidden]="tab==\'inactive\'">\n\n        <h4>ABOUT YOU</h4>\n\n        <ul>\n\n\n\n          <li (click)="editbio()">Your Details</li>\n\n          <li (click)="editpreference()">Add my Preferences</li>\n\n        </ul>\n\n        <hr>\n\n        <h4>VERIFICATION</h4>\n\n        <ul>\n\n          <li (click)="editid()">Verify my ID</li>\n\n          <!-- <li class="verified">Facebook Verified</li> -->\n\n          <li (click)="addnumber()"> Phone : {{phoneNumber}}</li>\n\n          <li class="verified"> Email: {{email}}</li>\n\n          <!-- <li class="verified">Facebook Verified</li> -->\n\n        </ul>\n\n        <hr>\n\n        <h4>CAR</h4>\n\n        <ul>\n\n          <li (click)="addcar()">Add my Car</li>\n\n          <br>\n\n          <li>\n\n            <!--           <div class="jr_car_pic">\n\n              <div class="jr_edit1" (click)="addcarphoto()">\n\n                <img src="assets/img/jr_edit1.png">\n\n              </div>\n\n            </div>\n\n             <div class="jr_car_name" (click)="editcar()">\n\n              <h5>BMW M5</h5>\n\n              <p>Cherry Red</p>\n\n            </div> -->\n\n            <div class="jr_clear"></div>\n\n          </li>\n\n          <br>\n\n          <br>\n\n        </ul>\n\n        <div class="jr_bottom_button_bay">\n\n          <button ion-button class="jr_offer_ride4" (click)="publicprofile()">See my public profile</button>\n\n        </div>\n\n      </div>\n\n      <div class="jr_profile_tab_content" [hidden]="tab==\'active\'">\n\n        <h4>PREFERENCES</h4>\n\n        <ul>\n\n          <li (click)="notification()">Notifications</li>\n\n        </ul>\n\n        <hr>\n\n        <h4>ABOUT</h4>\n\n        <ul>\n\n          <li>Help</li>\n\n          <li>Terms & Conditions</li>\n\n          <li>Privacy Policy</li>\n\n          <li>Licenses</li>\n\n        </ul>\n\n        <div class="jr_bottom_button_bay">\n\n          <button (click)="logout()" ion-button class="jr_offer_ride5">Logout</button>\n\n        </div>\n\n\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_5__providers_imghandler_imghandler__["a" /* ImghandlerProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=7.js.map