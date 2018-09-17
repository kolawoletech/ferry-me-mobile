webpackJsonp([16],{

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagePageModule", function() { return MessagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message__ = __webpack_require__(767);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessagePageModule = /** @class */ (function () {
    function MessagePageModule() {
    }
    MessagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__message__["a" /* MessagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__message__["a" /* MessagePage */]),
            ],
        })
    ], MessagePageModule);
    return MessagePageModule;
}());

//# sourceMappingURL=message.module.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagePage; });
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
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessagePage = /** @class */ (function () {
    function MessagePage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    MessagePage.prototype.ionViewDidLoad = function () {
        this.tab = "active";
    };
    MessagePage.prototype.tab_swap = function (type) {
        this.tab = type;
    };
    MessagePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    MessagePage.prototype.profile = function () {
        this.navCtrl.push('ProfilePage');
    };
    MessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-message',template:/*ion-inline-start:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\message\message.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <!--   <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n -->\n\n <div  center text-center >\n\n  <h4  class="light" text-center>Messages</h4>\n\n</div>\n\n\n\n\n\n  <div class="jr_clear"></div>\n\n  <div class="jr_home_tab_bay1">\n\n    <ul>\n\n      <li [class.active]="tab==\'active\'" (click)="tab_swap(\'active\')">Messages</li>\n\n      <li [class.active]="tab==\'inactive\'" (click)="tab_swap(\'inactive\')">Notifications</li>\n\n      <div class="jr_clear"></div>\n\n    </ul>\n\n  </div>\n\n</ion-header>\n\n<ion-content class="jr_body_wrapper">\n\n  <div class="jr_message_wrapper">\n\n    <div class="jr_home_tab_content" [hidden]="tab==\'inactive\'">\n\n      <div class="jr_profile_content">\n\n        <div class="jr_no_msg">\n\n          <div class="jr_offer_bg">\n\n            <img src="assets/img/jr_nomsg.png">\n\n          </div>\n\n          <div class="jr_text_center">\n\n            <div class="jr_edit_row jr_text_center">\n\n              <br><br>\n\n              <hr>\n\n              <br><br>\n\n              <h4 class="jr_padding0 jr_margin0">currently you have</h4>\n\n              <h3 class="jr_margintop0">no Messages</h3>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class="jr_home_tab_content" [hidden]="tab==\'active\'">\n\n      <div class="jr_profile_content">\n\n        <div class="jr_no_msg">\n\n          <div class="jr_offer_bg">\n\n            <img src="assets/img/jr_no_not.png">\n\n          </div>\n\n          <div class="jr_text_center">\n\n            <div class="jr_edit_row jr_text_center">\n\n              <br><br>\n\n              <hr>\n\n              <br><br>\n\n              <h4 class="jr_padding0 jr_margin0">currently you have</h4>\n\n              <h3 class="jr_margintop0">no Notification</h3>\n\n            </div>\n\n          </div>\n\n        </div>\n\n        <!-- <div class="jr_notification_main">\n\n            <ul>\n\n                <li>\n\n                  <div class="jr_not_left">\n\n                  <h4>Verify your Govt. ID</h4>\n\n                  <p>Verify your Govt. ID and more people will choose to travel with you.</p>\n\n                  </div>\n\n                  <div class="jr_not_close">\n\n                    <img src="assets/img/jr_not_close.png">\n\n                  </div>\n\n                  <div class="jr_clear"></div>\n\n                </li>\n\n            </ul>\n\n          </div> -->\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\message\message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], MessagePage);
    return MessagePage;
}());

//# sourceMappingURL=message.js.map

/***/ })

});
//# sourceMappingURL=16.js.map