import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { HomePage } from "../../pages/home/home";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthProvider } from "../../providers/auth/auth";
import { EmailValidator } from "../../validators/email";

import { GooglePlus } from '@ionic-native/google-plus';

import { Facebook,  FacebookLoginResponse} from '@ionic-native/facebook';
import {

  AlertController,
  Loading,
  LoadingController,

} from "ionic-angular";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userProfile: any = null;
  public loginForm: FormGroup;
  public loading: Loading;

  constructor(
    private googlePlus: GooglePlus,
    private facebook: Facebook,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public authProvider: AuthProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: [
        "",
        Validators.compose([Validators.required, EmailValidator.isValid])
      ],
      password: [
        "",
        Validators.compose([Validators.minLength(6), Validators.required])
      ]
    });
  }

  ionViewDidLoad() {
  }

  home() {
    this.navCtrl.push('HomePage');
  }

  goBack() {
    this.navCtrl.pop();
  }

  loginWithFacebook() {
    this.facebook.login(['public_profile', 'user_friends', 'email'])
    .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
    .then(() =>this.navCtrl.setRoot(HomePage))
    .catch(e => console.log('Error logging into Facebook', e));
  }

  loginWithGoogle() {
    this.googlePlus.login({})
    .then(res => console.log(res))
    .then(() =>this.navCtrl.setRoot(HomePage))
    .catch(err => console.error(err));
  }

  
  login(): void {
    const loading = this.loadingCtrl.create();
    if (!this.loginForm.valid) {
      console.log(this.loginForm.value);
    } else {
      this.authProvider
        .login(
          this.loginForm.value.email,
          this.loginForm.value.password
        )
        .then(
          () => {
            loading.dismiss().then(() => {
              this.navCtrl.setRoot(HomePage);
            });
          },
          error => {
            loading.dismiss().then(() => {
              console.log(error);
            });
          }
        );
    }
    loading.present();
  }

  password() {
    let modal = this.modalCtrl.create('PasswordPage');
    modal.present();
  }


  resetPassword() {
    this.navCtrl.push('ResetPasswordPage');
  }
}
