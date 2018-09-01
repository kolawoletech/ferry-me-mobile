webpackJsonp([31],{

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImghandlerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_file_chooser__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
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
  Generated class for the ImghandlerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var ImghandlerProvider = /** @class */ (function () {
    function ImghandlerProvider(filechooser) {
        this.filechooser = filechooser;
        this.firestore = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.storage();
    }
    /*
    
    For uploading an image to firebase storage.
   
    Called from - profilepic.ts
    Inputs - None.
    Outputs - The image url of the stored image.
     
     */
    ImghandlerProvider.prototype.uploadimage = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.filechooser.open().then(function (url) {
                window.FilePath.resolveNativePath(url, function (result) {
                    _this.nativepath = result;
                    window.resolveLocalFileSystemURL(_this.nativepath, function (res) {
                        res.file(function (resFile) {
                            var reader = new FileReader();
                            reader.readAsArrayBuffer(resFile);
                            reader.onloadend = function (evt) {
                                var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                                var imageStore = _this.firestore.ref('/profileimages').child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid);
                                imageStore.put(imgBlob).then(function (res) {
                                    _this.firestore.ref('/profileimages').child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).getDownloadURL().then(function (url) {
                                        resolve(url);
                                    }).catch(function (err) {
                                        reject(err);
                                    });
                                }).catch(function (err) {
                                    reject(err);
                                });
                            };
                        });
                    });
                });
            });
        });
        return promise;
    };
    ImghandlerProvider.prototype.grouppicstore = function (groupname) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.filechooser.open().then(function (url) {
                window.FilePath.resolveNativePath(url, function (result) {
                    _this.nativepath = result;
                    window.resolveLocalFileSystemURL(_this.nativepath, function (res) {
                        res.file(function (resFile) {
                            var reader = new FileReader();
                            reader.readAsArrayBuffer(resFile);
                            reader.onloadend = function (evt) {
                                var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                                var imageStore = _this.firestore.ref('/groupimages').child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(groupname);
                                imageStore.put(imgBlob).then(function (res) {
                                    _this.firestore.ref('/profileimages').child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child(groupname).getDownloadURL().then(function (url) {
                                        resolve(url);
                                    }).catch(function (err) {
                                        reject(err);
                                    });
                                }).catch(function (err) {
                                    reject(err);
                                });
                            };
                        });
                    });
                });
            });
        });
        return promise;
    };
    ImghandlerProvider.prototype.picmsgstore = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.filechooser.open().then(function (url) {
                window.FilePath.resolveNativePath(url, function (result) {
                    _this.nativepath = result;
                    window.resolveLocalFileSystemURL(_this.nativepath, function (res) {
                        res.file(function (resFile) {
                            var reader = new FileReader();
                            reader.readAsArrayBuffer(resFile);
                            reader.onloadend = function (evt) {
                                var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });
                                var uuid = _this.guid();
                                var imageStore = _this.firestore.ref('/picmsgs').child(__WEBPACK_IMPORTED_MODULE_2_firebase___default.a.auth().currentUser.uid).child('picmsg' + uuid);
                                imageStore.put(imgBlob).then(function (res) {
                                    resolve(res.downloadURL);
                                }).catch(function (err) {
                                    reject(err);
                                })
                                    .catch(function (err) {
                                    reject(err);
                                });
                            };
                        });
                    });
                });
            });
        });
        return promise;
    };
    ImghandlerProvider.prototype.guid = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };
    ImghandlerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_file_chooser__["a" /* FileChooser */]])
    ], ImghandlerProvider);
    return ImghandlerProvider;
}());

//# sourceMappingURL=imghandler.js.map

/***/ }),

/***/ 175:
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
webpackEmptyAsyncContext.id = 175;

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-car-photo/add-car-photo.module": [
		721,
		30
	],
	"../pages/add-car/add-car.module": [
		722,
		29
	],
	"../pages/create-ride-type/create-ride-type.module": [
		723,
		28
	],
	"../pages/edit-bio/edit-bio.module": [
		724,
		27
	],
	"../pages/edit-car/edit-car.module": [
		725,
		26
	],
	"../pages/edit-id/edit-id.module": [
		726,
		25
	],
	"../pages/edit-photo/edit-photo.module": [
		727,
		24
	],
	"../pages/edit-preference/edit-preference.module": [
		728,
		23
	],
	"../pages/edit-profile/edit-profile.module": [
		729,
		22
	],
	"../pages/find-ride/find-ride.module": [
		730,
		21
	],
	"../pages/help/help.module": [
		731,
		20
	],
	"../pages/idedit/idedit.module": [
		732,
		19
	],
	"../pages/idupload/idupload.module": [
		733,
		18
	],
	"../pages/landing/landing.module": [
		734,
		17
	],
	"../pages/login/login.module": [
		735,
		2
	],
	"../pages/message/message.module": [
		736,
		16
	],
	"../pages/notification/notification.module": [
		737,
		15
	],
	"../pages/offer-ride-detail/offer-ride-detail.module": [
		738,
		14
	],
	"../pages/offer-ride/offer-ride.module": [
		739,
		13
	],
	"../pages/password/password.module": [
		740,
		12
	],
	"../pages/phone/phone.module": [
		741,
		11
	],
	"../pages/pop-over-more/pop-over-more.module": [
		742,
		10
	],
	"../pages/pop-over/pop-over.module": [
		743,
		9
	],
	"../pages/profile-pic/profile-pic.module": [
		744,
		8
	],
	"../pages/profile/profile.module": [
		745,
		7
	],
	"../pages/public-profile/public-profile.module": [
		746,
		6
	],
	"../pages/reset-password/reset-password.module": [
		747,
		1
	],
	"../pages/search-main/search-main.module": [
		748,
		5
	],
	"../pages/search-result/search-result.module": [
		749,
		4
	],
	"../pages/signup/signup.module": [
		750,
		0
	],
	"../pages/tabs/tabs.module": [
		751,
		3
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
webpackAsyncContext.id = 220;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_database__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
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






/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProfileProvider = /** @class */ (function () {
    function ProfileProvider(afAuth, afDb, imgservice) {
        var _this = this;
        this.afAuth = afAuth;
        this.afDb = afDb;
        this.imgservice = imgservice;
        this.firedata = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/userProfile');
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.currentUser = user;
                _this.userProfile = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref("/userProfile/" + user.uid);
            }
        });
    }
    ProfileProvider.prototype.getUserProfile = function () {
        return this.userProfile;
    };
    ProfileProvider.prototype.updateDOB = function (birthDate) {
        return this.userProfile.update({ birthDate: birthDate });
    };
    ProfileProvider.prototype.updateEmail = function (newEmail, password) {
        var _this = this;
        var credential = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.
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
        var credential = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth
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
    ProfileProvider.prototype.updateNumber = function (number) {
        return this.userProfile.update({
            phoneNumber: number,
        });
    };
    ProfileProvider.prototype.updateimage = function (imageurl) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afAuth.auth.currentUser.updateProfile({
                displayName: _this.afAuth.auth.currentUser.displayName,
                photoURL: imageurl
            }).then(function () {
                __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('userProfile/' + __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid).update({
                    displayName: _this.afAuth.auth.currentUser.displayName,
                    photoURL: imageurl,
                    uid: __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid
                }).then(function () {
                    resolve({ success: true });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    ProfileProvider.prototype.getuserdetails = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.firedata.child(__WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid).once('value', function (snapshot) {
                resolve(snapshot.val());
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    ProfileProvider.prototype.updatedisplayname = function (newname) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.afAuth.auth.currentUser.updateProfile({
                displayName: newname,
                photoURL: _this.afAuth.auth.currentUser.photoURL
            }).then(function () {
                _this.firedata.child(__WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid).update({
                    displayName: newname,
                    photoURL: _this.afAuth.auth.currentUser.photoURL,
                    uid: _this.afAuth.auth.currentUser.uid
                }).then(function () {
                    resolve({ success: true });
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                reject(err);
            });
        });
        return promise;
    };
    ProfileProvider.prototype.setBio = function () {
    };
    ProfileProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_5__providers_imghandler_imghandler__["a" /* ImghandlerProvider */]])
    ], ProfileProvider);
    return ProfileProvider;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase_auth__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase_database__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



//import { GoogleAuthProvider, User, AuthCredential } from '@firebase/auth-types';






var AuthProvider = /** @class */ (function () {
    function AuthProvider(afAuth, afDb, facebook, platform, googlePlus) {
        this.afAuth = afAuth;
        this.afDb = afDb;
        this.facebook = facebook;
        this.platform = platform;
        this.googlePlus = googlePlus;
        console.log('Hello AuthProvider Provider');
        this.user = this.afAuth.authState;
    }
    AuthProvider.prototype.login = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.signupUser2 = function (displayName, email, password) {
        return __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(function (newUserCredential) {
            __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a
                .database()
                .ref("/userProfile/" + newUserCredential.user.uid)
                .set({
                uid: newUserCredential.user.uid,
                email: email,
                displayName: displayName
            });
        })
            .catch(function (error) {
            console.error(error);
            throw new Error(error);
        });
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.logoutUser = function () {
        return this.afAuth.auth.signOut();
    };
    AuthProvider.prototype.signUpWithFacebook = function () {
        if (this.platform.is('cordova')) {
            return this.facebook.login(['email'])
                .then(function (response) {
                var facebookCredential = __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.auth.FacebookAuthProvider
                    .credential(response.authResponse.accessToken);
                __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.auth().signInWithCredential(facebookCredential)
                    .then(function (success) {
                    console.log("Firebase success: " + JSON.stringify(success));
                }).catch(function (error) {
                    console.log("Firebase failure: " + JSON.stringify(error));
                });
            }).catch(function (error) { console.log(error); });
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.auth().signInWithPopup(new __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.auth.FacebookAuthProvider()).then(function (success) {
                console.log("Firebase success: " + JSON.stringify(success));
            })
                .catch(function (error) {
                console.log("Firebase failure: " + JSON.stringify(error));
            });
        }
    };
    AuthProvider.prototype.signUpWithGoogle2 = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            return this.googlePlus.login({
                'webClientId': '924137236064-766tk41oqe8ldu5p15g4gviujgsgv07e.apps.googleusercontent.com',
                'offline': true,
                'scopes': 'profile email'
            }).then(function (response) {
                _this.afAuth.auth.signInWithCredential(__WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.auth.GoogleAuthProvider.credential(response.gplusUser.idToken)).then(function () {
                    _this.updateUserData(_this.user);
                }).then(function (success) {
                }).catch(function (error) {
                    console.log("Firebase failure: " + JSON.stringify(error));
                });
            }).catch(function (error) { console.log(error); });
        }
        else {
            var provider = new __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.auth.GoogleAuthProvider();
            var credential = this.afAuth.auth.signInWithPopup(provider);
            this.updateUserData(this.user);
        }
    };
    AuthProvider.prototype.nativeGoogleLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var gplusUser, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.googlePlus.login({
                                'webClientId': '924137236064-766tk41oqe8ldu5p15g4gviujgsgv07e.apps.googleusercontent.com',
                                'offline': true,
                                'scopes': 'profile email'
                            })
                            //return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.w))
                        ];
                    case 1:
                        gplusUser = _a.sent();
                        return [4 /*yield*/, this.afAuth.auth.signInWithCredential(__WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.auth.GoogleAuthProvider.credential(gplusUser.idToken)).then(function () {
                                _this.updateUserData(_this.user);
                            })];
                    case 2: 
                    //return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.w))
                    return [2 /*return*/, _a.sent()];
                    case 3:
                        err_1 = _a.sent();
                        console.log(err_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthProvider.prototype.webGoogleLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var provider, credential, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        provider = new __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.auth.GoogleAuthProvider();
                        return [4 /*yield*/, this.afAuth.auth.signInWithPopup(provider)];
                    case 1:
                        credential = _a.sent();
                        this.updateUserData(this.user);
                        return [3 /*break*/, 3];
                    case 2:
                        err_2 = _a.sent();
                        console.log(err_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthProvider.prototype.signUpWithGoogle = function () {
        if (this.platform.is('cordova')) {
            this.nativeGoogleLogin();
        }
        else {
            this.webGoogleLogin();
        }
    };
    AuthProvider.prototype.updateUserData = function (user) {
        // Sets user data to firestore on login
        console.log(__WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.auth().currentUser);
        __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.database()
            .ref("userProfile/" + __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.auth().currentUser.uid).set({
            uid: __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.auth().currentUser.uid,
            email: __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.auth().currentUser.email,
            displayName: __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.auth().currentUser.displayName,
            photoURL: __WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.auth().currentUser.photoURL
        });
    };
    AuthProvider.prototype.googleLogin = function () {
        if (this.platform.is("cordova")) {
            this.nativeGoogleLogin2();
        }
        else {
            this.webGoogleLogin();
        }
    };
    AuthProvider.prototype.nativeGoogleLogin2 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var gplusUser, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.googlePlus.login({
                                'webClientId': '924137236064-766tk41oqe8ldu5p15g4gviujgsgv07e.apps.googleusercontent.com',
                                'offline': true,
                                'scopes': 'profile email'
                            })
                            //return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.w))
                        ];
                    case 1:
                        gplusUser = _a.sent();
                        return [4 /*yield*/, this.afAuth.auth.signInWithCredential(__WEBPACK_IMPORTED_MODULE_5_firebase_app___default.a.auth.GoogleAuthProvider.credential(gplusUser.idToken))];
                    case 2: 
                    //return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.w))
                    return [2 /*return*/, _a.sent()];
                    case 3:
                        err_3 = _a.sent();
                        console.log(err_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\home\home.html"*/'<ion-header class="jr_theme_color jr_header">\n\n    <!-- <button menuToggle ion-button class="jr_left jr_header_btn jr_sidemenu_icon"></button> -->\n\n    <div class="jr_header_title">\n\n      <h4>Your rides</h4>\n\n    </div>\n\n    \n\n    <div class="jr_icon_bar">\n\n     \n\n      <span> <img  width="192px"   alt="logo" src="assets/icon/ico-trans.png"></span>\n\n     \n\n     </div>\n\n\n\n    <div class="jr_clear"></div>\n\n    <div class="jr_home_tab_bay">\n\n      <ul>\n\n        <li [class.active]="tab==\'active\'" (click)="tab_swap(\'active\')">Current</li>\n\n        <li [class.active]="tab==\'inactive\'" (click)="tab_swap(\'inactive\')">History</li>\n\n      </ul>\n\n    </div>\n\n  </ion-header>\n\n  <ion-content class="jr_body_wrapper">\n\n    <div class="jr_home_tab_content"  [hidden]="tab==\'inactive\'">\n\n <!--    <div class="jr_div_half">\n\n      <div class="jr_div_overlay">\n\n        <div class="jr_over_inner">\n\n        <button ion-button class="jr_offer_ride" (click)="offerride()">Offer a ride</button>\n\n        <p>Share your car journey with co- travellers just like you and cover all your fuel costs!</p>\n\n      </div>\n\n      </div>\n\n      <img src="assets/img/jr_div_half1.png">\n\n    </div>\n\n    <div class="jr_div_half">\n\n      <div class="jr_div_overlay">\n\n        <div class="jr_over_inner">\n\n        <button ion-button class="jr_offer_ride1" (click)="findride()"> Find a ride</button>\n\n        <p>Yoyfull and comfortable travel, share your journey with all like you</p>\n\n      </div>\n\n      </div>\n\n      <img src="assets/img/jr_div_half2.png">\n\n    </div> -->\n\n    <div class="jr_home_active">\n\n      <div class="jr_profile_content">\n\n        <div class="jr_home_offer_ride">\n\n          <ul>\n\n            <div class="jr_offer_ride_top">\n\n              Offered Ride\n\n            </div>\n\n            <li>\n\n              <div class="jr_home_offer_photo"><img src="assets/img/jr_car_img.png"></div>\n\n              <div class="jr_home_offer_detail">\n\n                <h5>Saturday 29, August</h5>\n\n                <h6>05: 00 am</h6>\n\n                <p>UP<span><img src="assets/img/jr_forward.png"></span>UCT</p>\n\n                <div class="jr_edit_more" (click)="presentPopover($event)"><img src="assets/img/jr_more.png"></div>\n\n              </div>\n\n              <div class="jr_clear"></div>\n\n  \n\n              <div class="jr_home_btm">\n\n                <hr>\n\n                <p>Request waiting for Approval</p>\n\n              </div>\n\n            </li>\n\n            <li>\n\n              <div class="jr_home_offer_photo"><img src="assets/img/jr_car_img.png"></div>\n\n              <div class="jr_home_offer_detail">\n\n                <h5>Saturday 29, August</h5>\n\n                <h6>05: 00 am</h6>\n\n                <p>Sun City<span><img src="assets/img/jr_forward.png"></span>Menlyn maine</p>\n\n                <div class="jr_edit_more" (click)="presentPopover($event)"><img src="assets/img/jr_more.png"></div>\n\n              </div>\n\n              <div class="jr_clear"></div>\n\n  \n\n            </li>\n\n          </ul>\n\n          <ul>\n\n            <div class="jr_book_ride_top">\n\n              Your Bookings\n\n            </div>\n\n            <li>\n\n              <div class="jr_home_offer_photo"><img src="assets/img/jr_car_img.png"></div>\n\n              <div class="jr_home_offer_detail">\n\n                <h5>Saturday 29, August</h5>\n\n                <h6>05: 00 am</h6>\n\n                <p>Park Staion<span><img src="assets/img/jr_forward.png"></span>Centurion</p>\n\n                <div class="jr_edit_more" (click)="presentPopover($event)"><img src="assets/img/jr_more.png"></div>\n\n              </div>\n\n              <div class="jr_clear"></div>\n\n  \n\n              <div class="jr_home_btm">\n\n                <hr>\n\n                <p>Request waiting for Approval</p>\n\n              </div>\n\n            </li>\n\n          </ul>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div class="jr_home_tab_content jr_theme_color jr_text_center" [hidden]="tab==\'active\'" >\n\n    <div class="jr_ride_wrapper">\n\n      <br><br>\n\n      <img src="assets/img/jr_history.png">\n\n      <p>You have no recent rides. They are auto-<br>matically archived after 10 days.</p>\n\n      <button ion-button class="jr_archive_btn">See archived rides</button>\n\n    </div>\n\n  </div>\n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(378);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__credentials__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase_app__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_chooser__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_path__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_profile_profile__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_imghandler_imghandler__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















__WEBPACK_IMPORTED_MODULE_12_firebase_app__["initializeApp"](__WEBPACK_IMPORTED_MODULE_11__credentials__["a" /* firebaseConfig */]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-car-photo/add-car-photo.module#AddCarPhotoPageModule', name: 'AddCarPhotoPage', segment: 'add-car-photo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-car/add-car.module#AddCarPageModule', name: 'AddCarPage', segment: 'add-car', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-ride-type/create-ride-type.module#CreateRideTypePageModule', name: 'CreateRideTypePage', segment: 'create-ride-type', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-bio/edit-bio.module#EditBioPageModule', name: 'EditBioPage', segment: 'edit-bio', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-car/edit-car.module#EditCarPageModule', name: 'EditCarPage', segment: 'edit-car', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-id/edit-id.module#EditIdPageModule', name: 'EditIdPage', segment: 'edit-id', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-photo/edit-photo.module#EditPhotoPageModule', name: 'EditPhotoPage', segment: 'edit-photo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-preference/edit-preference.module#EditPreferencePageModule', name: 'EditPreferencePage', segment: 'edit-preference', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/find-ride/find-ride.module#FindRidePageModule', name: 'FindRidePage', segment: 'find-ride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/idedit/idedit.module#IdeditPageModule', name: 'IdeditPage', segment: 'idedit', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/idupload/idupload.module#IduploadPageModule', name: 'IduploadPage', segment: 'idupload', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message.module#MessagePageModule', name: 'MessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offer-ride-detail/offer-ride-detail.module#OfferRideDetailPageModule', name: 'OfferRideDetailPage', segment: 'offer-ride-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offer-ride/offer-ride.module#OfferRidePageModule', name: 'OfferRidePage', segment: 'offer-ride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/password/password.module#PasswordPageModule', name: 'PasswordPage', segment: 'password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/phone/phone.module#PhonePageModule', name: 'PhonePage', segment: 'phone', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pop-over-more/pop-over-more.module#PopOverMorePageModule', name: 'PopOverMorePage', segment: 'pop-over-more', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pop-over/pop-over.module#PopOverPageModule', name: 'PopOverPage', segment: 'pop-over', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-pic/profile-pic.module#ProfilePicPageModule', name: 'ProfilePicPage', segment: 'profile-pic', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/public-profile/public-profile.module#PublicProfilePageModule', name: 'PublicProfilePage', segment: 'public-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-main/search-main.module#SearchMainPageModule', name: 'SearchMainPage', segment: 'search-main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search-result/search-result.module#SearchResultPageModule', name: 'SearchResultPage', segment: 'search-result', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__credentials__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_profile_profile__["a" /* ProfileProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_imghandler_imghandler__["a" /* ImghandlerProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(79);
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
            if (user) {
                _this.rootPage = 'TabsPage';
            }
            else {
                _this.rootPage = 'LoginPage';
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\phy\Documents\freelance\ferry-me-mobile\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
/* unused harmony export firebaseSdkConfig */
var firebaseConfig = {
    apiKey: "AIzaSyDOicS3PNywWR3JdO0RgmbOIYya4HClKqc",
    authDomain: "rgengineering-b394c.firebaseapp.com",
    databaseURL: "https://rgengineering-b394c.firebaseio.com",
    projectId: "rgengineering-b394c",
    storageBucket: "rgengineering-b394c.appspot.com",
    messagingSenderId: "924137236064"
};
var firebaseSdkConfig = {
    webClientId: '',
    androidClientId: '',
    webClientSecret: '',
    projectId: '',
    webApiKey: '',
};
//# sourceMappingURL=credentials.js.map

/***/ })

},[373]);
//# sourceMappingURL=main.js.map