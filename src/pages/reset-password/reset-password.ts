import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController,LoadingController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthProvider } from "../../providers/auth/auth";
import { EmailValidator } from "../../validators/email";
/**
 * Generated class for the ResetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
  public resetPasswordForm: FormGroup;
  public loading: LoadingController;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
   
    
    public authProvider: AuthProvider,
    public loadingCtrl: LoadingController,
    formBuilder: FormBuilder) {
      this.resetPasswordForm = formBuilder.group({
        email: [
          "",
          Validators.compose([Validators.required, EmailValidator.isValid])
        ]
      });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

  resetPassword(email){
    this.authProvider.resetPassword(this.resetPasswordForm.value.email).then(() => {
      this.navCtrl.push('LoginPage');
    });
  }

  goBack() {
    this.navCtrl.pop();
  }

}
