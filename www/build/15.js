webpackJsonp([15],{

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function() { return NotificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notification__ = __webpack_require__(768);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationPageModule = /** @class */ (function () {
    function NotificationPageModule() {
    }
    NotificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notification__["a" /* NotificationPage */]),
            ],
        })
    ], NotificationPageModule);
    return NotificationPageModule;
}());

//# sourceMappingURL=notification.module.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationPage; });
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
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotificationPage = /** @class */ (function () {
    function NotificationPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    NotificationPage.prototype.ionViewDidLoad = function () {
    };
    NotificationPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    NotificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notification',template:/*ion-inline-start:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\notification\notification.html"*/'<ion-header class="jr_theme_color jr_header">\n\n  <button ion-button class="jr_left jr_header_btn jr_back_icon" (click)="dismiss()"></button>\n\n  <div class="jr_header_title">\n\n    <h4>Notifications</h4>\n\n  </div>\n\n  <button ion-button class="jr_right jr_header_btn jr_mail_icon"></button>\n\n  <button ion-button class="jr_right jr_header_btn jr_profile_icon"></button>\n\n  <div class="jr_clear"></div>\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <div class="jr_profile_wrapper">\n\n    <div class="jr_profile_content">\n\n    <div class="jr_profile_tab_content">\n\n      <div class="jr_edit_row">\n\n        <h4>PUSH NOTIFICATIONS</h4>\n\n        <h6>Receive push notifications for the following actions</h6>\n\n        <div class="jr_notification">\n\n          <ul>\n\n            <li>\n\n              <div class="child1">\n\n                New co- traveller confirmed\n\n              </div>\n\n              <div class="child2">\n\n                <div class="jr_custom1">\n\n                    <input id="check1" type="checkbox" name="check" value="check1">\n\n                    <label for="check1"></label>\n\n                </div>\n\n              </div>\n\n              <div class="jr_clear"></div>\n\n            </li>\n\n            <li>\n\n              <div class="child1">\n\n                Messages Received\n\n              </div>\n\n              <div class="child2">\n\n                <div class="jr_custom1">\n\n                    <input id="check2" type="checkbox" name="check" value="check1">\n\n                    <label for="check2"></label>\n\n                </div>\n\n              </div>\n\n              <div class="jr_clear"></div>\n\n            </li>\n\n            <li>\n\n              <div class="child1">\n\n                Ratings\n\n              </div>\n\n              <div class="child2">\n\n                <div class="jr_custom1">\n\n                    <input id="check3" type="checkbox" name="check" value="check1">\n\n                    <label for="check3"></label>\n\n                </div>\n\n              </div>\n\n              <div class="jr_clear"></div>\n\n            </li>\n\n            <hr>\n\n          </ul>\n\n        </div>\n\n      </div>\n\n      <div class="jr_edit_row">\n\n        <h4 class="jr_paddingtop0">SMS</h4>\n\n        <h6>Receive a SMS at for the following actions</h6>\n\n        <div class="jr_notification">\n\n          <ul>\n\n            <li>\n\n              <div class="child1">\n\n              Messages from a new co- traveller\n\n              </div>\n\n              <div class="child2">\n\n                <div class="jr_custom1">\n\n                    <input id="check1" type="checkbox" name="check" value="check1">\n\n                    <label for="check1"></label>\n\n                </div>\n\n              </div>\n\n              <div class="jr_clear"></div>\n\n            </li>\n\n            <hr>\n\n          </ul>\n\n        </div>\n\n      </div>\n\n      <div class="jr_edit_row">\n\n        <h4 class="jr_paddingtop0">EMAIL</h4>\n\n        <h6>Receive an email for the following actions</h6>\n\n        <div class="jr_notification">\n\n          <ul>\n\n            <li>\n\n              <div class="child1">\n\n              Ride offer published\n\n              </div>\n\n              <div class="child2">\n\n                <div class="jr_custom1">\n\n                    <input id="check1" type="checkbox" name="check" value="check1">\n\n                    <label for="check1"></label>\n\n                </div>\n\n              </div>\n\n              <div class="jr_clear"></div>\n\n            </li>\n\n            <li>\n\n              <div class="child1">\n\n              Ride offer updated\n\n              </div>\n\n              <div class="child2">\n\n                <div class="jr_custom1">\n\n                    <input id="check1" type="checkbox" name="check" value="check1">\n\n                    <label for="check1"></label>\n\n                </div>\n\n              </div>\n\n              <div class="jr_clear"></div>\n\n            </li>\n\n            <li>\n\n              <div class="child1">\n\n              New message received\n\n              </div>\n\n              <div class="child2">\n\n                <div class="jr_custom1">\n\n                    <input id="check1" type="checkbox" name="check" value="check1">\n\n                    <label for="check1"></label>\n\n                </div>\n\n              </div>\n\n              <div class="jr_clear"></div>\n\n            </li>\n\n            <li>\n\n              <div class="child1">\n\n              Pending ratings after a ride taken\n\n              </div>\n\n              <div class="child2">\n\n                <div class="jr_custom1">\n\n                    <input id="check1" type="checkbox" name="check" value="check1">\n\n                    <label for="check1"></label>\n\n                </div>\n\n              </div>\n\n              <div class="jr_clear"></div>\n\n            </li>\n\n            <li>\n\n              <div class="child1">\n\n              New rating received\n\n              </div>\n\n              <div class="child2">\n\n                <div class="jr_custom1">\n\n                    <input id="check1" type="checkbox" name="check" value="check1">\n\n                    <label for="check1"></label>\n\n                </div>\n\n              </div>\n\n              <div class="jr_clear"></div>\n\n            </li>\n\n            <li>\n\n              <div class="child1">\n\n            Useful informations\n\n              </div>\n\n              <div class="child2">\n\n                <div class="jr_custom1">\n\n                    <input id="check1" type="checkbox" name="check" value="check1">\n\n                    <label for="check1"></label>\n\n                </div>\n\n              </div>\n\n              <div class="jr_clear"></div>\n\n            </li>\n\n            <hr>\n\n          </ul>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n\n\n    <div class="jr_bottom_button_bay">\n\n      <button ion-button class="jr_offer_ride5">Logout</button>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\notification\notification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], NotificationPage);
    return NotificationPage;
}());

//# sourceMappingURL=notification.js.map

/***/ })

});
//# sourceMappingURL=15.js.map