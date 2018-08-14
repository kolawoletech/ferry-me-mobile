import { Component } from '@angular/core';
import { Alert,IonicPage, NavController, NavParams, AlertController,PopoverController,ModalController} from 'ionic-angular';
import { ProfileProvider } from "../../providers/profile/profile";
import { AuthProvider } from "../../providers/auth/auth";
import { Camera } from '@ionic-native/camera';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  public userProfile: any;
  public birthDate: string;
  public profilePic: string = null;
  tab: any;
  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthProvider,
    public profileProvider: ProfileProvider,
    public popoverCtrl: PopoverController, 
    public cameraPlugin: Camera,
    public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.tab = "active";
    this.profileProvider.getUserProfile().on("value", userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
      this.profilePic = null;
      //this.birthDate = userProfileSnapshot.val().birthDate;
    });
  }

  logOut(): void {
    this.authProvider.logoutUser().then(() => {
      this.navCtrl.setRoot("LoginPage");
    });
  }

  updateName(): void {
    const alert: Alert = this.alertCtrl.create({
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
          handler: data => {
            this.profileProvider.updateName(data.firstName, data.lastName);
          }
        }
      ]
    });
    alert.present();
  }

  takePicture(): void {
    this.cameraPlugin
      .getPicture({
        quality: 95,
        destinationType: this.cameraPlugin.DestinationType.DATA_URL,
        sourceType: this.cameraPlugin.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: this.cameraPlugin.EncodingType.PNG,
        saveToPhotoAlbum: true
      })
      .then(
        imageData => {
          this.profilePic = imageData;
        },
        error => {
          console.log("ERROR -> " + JSON.stringify(error));
        }
      );
  }

  updateEmail(): void {
    let alert: Alert = this.alertCtrl.create({
      inputs: [{ name: 'newEmail', placeholder: 'Your new email' },
      { name: 'password', placeholder: 'Your password', type: 'password' }],
      buttons: [
        { text: 'Cancel' },
        { text: 'Save',
          handler: data => {
            this.profileProvider
              .updateEmail(data.newEmail, data.password)
              .then(() => { console.log('Email Changed Successfully'); })
              .catch(error => { console.log('ERROR: ' + error.message); });
        }}]
    });
    alert.present();
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

  goBack() {
    this.navCtrl.pop();
  }

  tab_swap(type) {
    this.tab = type;
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create('PopOverPage');
    popover.present({
      ev: myEvent
    });
  }

  editprofile() {
    let modal = this.modalCtrl.create('EditprofilePage');
    modal.present();
  }

  editphoto() {
    let modal = this.modalCtrl.create('EditPhoto');
    modal.present();
  }

  editbio() {
    let modal = this.modalCtrl.create('EditBioPage');
    modal.present();
  }


  editpreference() {
    let modal = this.modalCtrl.create('EditPreferencePage');
    modal.present();
  }

  editid() {
    let modal = this.modalCtrl.create('EditIdPage');
    modal.present();
  }

  addnumber() {
    let modal = this.modalCtrl.create('PhonePage');
    modal.present();
  }

  addcar() {
    let modal = this.modalCtrl.create('AddCar');
    modal.present();
  }

  addcarphoto() {
    let modal = this.modalCtrl.create('AddCarPhotoPage');
    modal.present();
  }

  editcar() {
    let modal = this.modalCtrl.create('EditCarPage');
    modal.present();
  }

  publicprofile() {
    let modal = this.modalCtrl.create('PublicProfilePage');
    modal.present();
  }

  notification() {
    let modal = this.modalCtrl.create(Notification);
    modal.present();
  }

  message() {
    this.navCtrl.push('MessagePage');
  }
}
