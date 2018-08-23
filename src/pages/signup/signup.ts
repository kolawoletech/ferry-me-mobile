import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthProvider } from "../../providers/auth/auth";
import { EmailValidator } from "../../validators/email";
import { HomePage } from "../../pages/home/home";
import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook';
import {
  Alert,
  AlertController,
  Loading,
  LoadingController,
  NavController,
  ModalController
} from "ionic-angular";
import { PhonePage } from '../phone/phone';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  userProfile: any = null;
  public signupForm: FormGroup;
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
    this.signupForm = formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.compose([Validators.required, Validators.required])],
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
    console.log('ionViewDidLoad SignupPage');
  }

  login2() {
    console.log("Form Validation Passed")
  }

  login(): void {
    const loading = this.loadingCtrl.create();
    if (!this.signupForm.valid) {
      console.log(this.signupForm.value);
    } else {
      this.authProvider
        .signupUser(
          this.signupForm.value.username,
          this.signupForm.value.firstName,
          this.signupForm.value.lastName,
          this.signupForm.value.email,
          this.signupForm.value.password
        )
        .then(
          () => {
            loading.dismiss().then(() => {
              this.navCtrl.setRoot(PhonePage);
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

  facebookLogin() {
    this.facebook.login(['email']).then((response) => {
      const facebookCredential = firebase.auth.FacebookAuthProvider
        .credential(response.authResponse.accessToken);

      firebase.auth().signInWithCredential(facebookCredential)
        .then((success) => {
          console.log("Firebase success: " + JSON.stringify(success));
          this.userProfile = success;
        })
        .catch((error) => {
          console.log("Firebase failure: " + JSON.stringify(error));
        });

    }).catch((error) => { console.log(error) });
  }

  
  verification() {
    let modal = this.modalCtrl.create('VerificationPage');
    modal.present();
  }

  goBack() {
    this.navCtrl.pop();
  }

}
