import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { EmailValidator } from "../../validators/email";
import { ProfileProvider } from '../../providers/profile/profile';
import { AuthProvider } from '../../providers/auth/auth';

import {
  Alert,
  AlertController,
  Loading,
  LoadingController,
  NavController,
  ModalController
} from "ionic-angular";
//import { NavController,ViewController } from 'ionic-angular';
/**
 * Generated class for the EditBioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-bio',
  templateUrl: 'edit-bio.html',
})
export class EditBioPage {


  public userProfile: any;
  public birthDate: string;
  public bioForm: FormGroup;
  public loading: Loading;

  public person: { name: string, company: string, birthdate?: number };


  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    formBuilder: FormBuilder,
    public profileProvider: ProfileProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
  ) {
    this.bioForm = formBuilder.group({


      addressLineOne: [''],
      addressLineTwo: [''],
      city: [''],
      province: [''],
      zip: ['']

    });
  }

  ionViewDidLoad() {
    this.profileProvider.getUserProfile().on("value", userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
      this.birthDate = userProfileSnapshot.val().birthDate;
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  reset() {

  }

  save() {


  }

  getAge(birthdate) {
    let currentTime = new Date().getTime();
    return ((currentTime - birthdate) / 31556952000).toFixed(0);
  }

  test(){
 /*    firstName: [''],
    lastName: [''],
    sex: [''],
    dob: [''],
    bio: [''], */
  }

  saveBio(): void {
    const loading = this.loadingCtrl.create();
    if (!this.bioForm.valid) {
      console.log(this.bioForm.value);
    } else {
       this.profileProvider.setBio();
    }
  }


  updateDOB(birthDate:string):void {
    this.profileProvider.updateDOB(birthDate);
  }

  updatePassword(): void {
    let alert: Alert = this.alertCtrl.create({
      inputs: [
        { name: 'newPassword', placeholder: 'New password', type: 'password' },
        { name: 'oldPassword', placeholder: 'Old password', type: 'password' }],
      buttons: [
        { text: 'Cancel' },
        { text: 'Save',
          handler: data => {
            this.profileProvider.updatePassword(
              data.newPassword,
              data.oldPassword
            );
          }
        }
      ]
    });
    alert.present();
  }

}
