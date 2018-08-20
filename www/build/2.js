webpackJsonp([2],{

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(758);
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

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(367);
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
    function ProfilePage(alertCtrl, navCtrl, navParams, authProvider, profileProvider, popoverCtrl, cameraPlugin, modalCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authProvider = authProvider;
        this.profileProvider = profileProvider;
        this.popoverCtrl = popoverCtrl;
        this.cameraPlugin = cameraPlugin;
        this.modalCtrl = modalCtrl;
        this.profilePic = null;
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.tab = "active";
        this.profileProvider.getUserProfile().on("value", function (userProfileSnapshot) {
            _this.userProfile = userProfileSnapshot.val();
            _this.profilePic = null;
            //this.birthDate = userProfileSnapshot.val().birthDate;
        });
    };
    ProfilePage.prototype.logOut = function () {
        var _this = this;
        this.authProvider.logoutUser().then(function () {
            _this.navCtrl.setRoot("LoginPage");
        });
    };
    ProfilePage.prototype.updateName = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: "Your first name & last name",
            inputs: [
                {
                    name: "firstName",
                    placeholder: "Your first name",
                    value: this.userProfile.firstName
                },
                {
                    name: "lastName",
                    placeholder: "Your last name",
                    value: this.userProfile.lastName
                }
            ],
            buttons: [
                { text: "Cancel" },
                {
                    text: "Save",
                    handler: function (data) {
                        _this.profileProvider.updateName(data.firstName, data.lastName);
                    }
                }
            ]
        });
        alert.present();
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
            _this.profilePic = imageData;
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
                { text: 'Save',
                    handler: function (data) {
                        _this.profileProvider
                            .updateEmail(data.newEmail, data.password)
                            .then(function () { console.log('Email Changed Successfully'); })
                            .catch(function (error) { console.log('ERROR: ' + error.message); });
                    } }
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
                { text: 'Save',
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
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\Users\kolaw\Documents\freelance\ferryMe\modularApp\src\pages\profile\profile.html"*/'<ion-header class="jr_theme_color jr_header">\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="goBack()"></button>\n  <div class="jr_header_title">\n    <h4>Profile</h4>\n  </div>\n  <button ion-button class="jr_right jr_header_btn jr_mail_icon" (click)="message()"></button>\n  <button ion-button class="jr_right jr_header_btn jr_profile_icon"></button>\n  <div class="jr_clear"></div>\n</ion-header>\n<ion-content>\n  <div class="jr_profile_wrapper">\n    <button class="jr_more_pop_up" (click)="presentPopover($event)">\n      <img src="assets/img/jr_more.png">\n    </button>\n    <div class="jr_profile_banner">\n      <div class="jr_profile_photo">\n             <div class="jr_profile_photo_edit" (click)="takePicture()">\n           <img src="assets/img/jr_edit.png">\n         \n         \n        </div> \n      </div>\n    </div>\n    <!--     <ion-item (click)="updateName()">\n      <ion-grid class="jr_profile_content">\n        <ion-row>\n          <ion-col col-6> Name </ion-col>\n          <ion-col col-6 *ngIf="userProfile?.firstName || userProfile?.lastName">\n            {{userProfile?.firstName}} {{userProfile?.lastName}}\n          </ion-col>\n          <ion-col col-6 class="placeholder-profile" *ngIf="!userProfile?.firstName">\n            <span> Tap here to edit. </span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item> -->\n\n    <div class="jr_profile_content">\n      <h4 (click)="updateName()">{{userProfile?.firstName}} {{userProfile?.lastName}}</h4>\n      <hr>\n      <br>\n      <div class="jr_profile_tab_bay">\n        <li [class.active]="tab==\'active\'" (click)="tab_swap(\'active\')">Details</li>\n        <li [class.active]="tab==\'inactive\'" (click)="tab_swap(\'inactive\')">Accounts</li>\n        <div class="jr_clear"></div>\n      </div>\n      <div class="jr_profile_tab_content" [hidden]="tab==\'inactive\'">\n        <h4>ABOUT YOU</h4>\n        <ul>\n          <li>{{userProfile?.username}}</li>\n          <li (click)="editbio()">Write my Biography</li>\n          <li (click)="editpreference()">Add my Preferences</li>\n        </ul>\n        <hr>\n        <h4>VERIFICATION</h4>\n        <ul>\n          <li (click)="editid()">Verify my ID</li>\n          <li (click)="addnumber()">Add my Phone</li>\n          <li class="verified">{{userProfile?.email}}</li>\n          <!-- <li class="verified">Facebook Verified</li> -->\n        </ul>\n        <hr>\n        <h4>CAR</h4>\n        <ul>\n          <li (click)="addcar()">Add my Car</li>\n          <br>\n          <li>\n <!--           <div class="jr_car_pic">\n              <div class="jr_edit1" (click)="addcarphoto()">\n                <img src="assets/img/jr_edit1.png">\n              </div>\n            </div>\n             <div class="jr_car_name" (click)="editcar()">\n              <h5>BMW M5</h5>\n              <p>Cherry Red</p>\n            </div> -->\n            <div class="jr_clear"></div>\n          </li>\n          <br>\n          <br>\n        </ul>\n        <div class="jr_bottom_button_bay">\n          <button ion-button class="jr_offer_ride4" (click)="publicprofile()">See my public profile</button>\n        </div>\n      </div>\n      <div class="jr_profile_tab_content" [hidden]="tab==\'active\'">\n        <h4>PREFERENCES</h4>\n        <ul>\n          <li (click)="notification()">Notifications</li>\n        </ul>\n        <hr>\n        <h4>ABOUT</h4>\n        <ul>\n          <li>Help</li>\n          <li>Terms & Conditions</li>\n          <li>Privacy Policy</li>\n          <li>Licenses</li>\n        </ul>\n        <div class="jr_bottom_button_bay">\n          <button ion-button class="jr_offer_ride5">Logout</button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\kolaw\Documents\freelance\ferryMe\modularApp\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=2.js.map