import { Component, NgZone } from '@angular/core';
import { Alert, IonicPage, ViewController, NavController, NavParams, AlertController, PopoverController, ModalController } from 'ionic-angular';
import { ProfileProvider } from "../../providers/profile/profile";
import { AuthProvider } from "../../providers/auth/auth";
import { Camera } from '@ionic-native/camera';
import firebase from 'firebase';
import { ImghandlerProvider } from '../../providers/imghandler/imghandler';

/**
 * Generated class for the PublicProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-public-profile',
  templateUrl: 'public-profile.html',
})
export class PublicProfilePage {
  avatar: string;
  displayName: string;
  email: string;
  phoneNumber: string;
  birthDate: any;
  currentAge: any;
  age : string;
  public userProfile: any;

  constructor( public alertCtrl: AlertController,
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public authProvider: AuthProvider,
    public profileProvider: ProfileProvider,
    public popoverCtrl: PopoverController,
    public cameraPlugin: Camera,
    public modalCtrl: ModalController,
    public zone: NgZone,
    public imgservice: ImghandlerProvider) {}

  ionViewDidLoad() {
      this.loaduserdetails();
      
      this.profileProvider.getUserProfile().on("value", userProfileSnapshot => {
        this.userProfile = userProfileSnapshot.val();
        this.birthDate = userProfileSnapshot.val().birthDate;
      });

  }


  getAge(birthDate: any) {
    let currentTime = new Date().getTime();
    console.log(birthDate)
    this.currentAge = ((currentTime - this.birthDate) / 31556952000).toFixed(0)
    return this.currentAge;
  }

  dismiss() {
   this.viewCtrl.dismiss();
 }

 loaduserdetails() {
  this.profileProvider.getuserdetails().then((res: any) => {
    console.log(res)
    this.displayName = res.displayName;
    this.email = res.email;
    this.age = res.age;
    this.phoneNumber = res.phoneNumber;
    
    this.zone.run(() => {
      this.avatar = res.photoURL;
      this.birthDate = res.birthDate;
    })
  })
}

}
