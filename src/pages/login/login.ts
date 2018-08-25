import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { HomePage } from "../../pages/home/home";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthProvider } from "../../providers/auth/auth";
import { EmailValidator } from "../../validators/email";

import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';
import {
  Alert,
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

}
