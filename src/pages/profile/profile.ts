import { Component, NgZone } from '@angular/core';
import { Alert, IonicPage, NavController, NavParams, AlertController, PopoverController, ModalController } from 'ionic-angular';
import { ProfileProvider } from "../../providers/profile/profile";
import { AuthProvider } from "../../providers/auth/auth";
import { Camera } from '@ionic-native/camera';
import firebase from 'firebase';
import { ImghandlerProvider } from '../../providers/imghandler/imghandler';

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


  tab: any;

  avatar: string;
  displayName: string;
  email: string;

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public authProvider: AuthProvider,
    public profileProvider: ProfileProvider,
    public popoverCtrl: PopoverController,
    public cameraPlugin: Camera,
    public modalCtrl: ModalController,
    public zone: NgZone,
    public imgservice: ImghandlerProvider) {
  }

  ionViewWillEnter() {
    this.loaduserdetails();
  }







  logOut(): void {
    this.authProvider.logoutUser().then(() => {
      this.navCtrl.setRoot("LoginPage");
    });
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
          this.avatar = imageData;
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
        {
          text: 'Save',
          handler: data => {
            this.profileProvider
              .updateEmail(data.newEmail, data.password)
              .then(() => { console.log('Email Changed Successfully'); })
              .catch(error => { console.log('ERROR: ' + error.message); });
          }
        }]
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
        {
          text: 'Save',
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
    let modal = this.modalCtrl.create('AddCarPage');
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
    let modal = this.modalCtrl.create('NotificationPage');
    modal.present();
  }

  message() {
    this.navCtrl.push('MessagePage');
  }

  loaduserdetails() {
    this.profileProvider.getuserdetails().then((res: any) => {
      console.log(res)
      this.displayName = res.displayName;
      this.email = res.email
      this.zone.run(() => {
        this.avatar = res.photoURL;
      })
    })
  }

  editimage() {
    let statusalert = this.alertCtrl.create({
      buttons: ['okay']
    });
    this.imgservice.uploadimage().then((url: any) => {
      this.profileProvider.updateimage(url).then((res: any) => {
        if (res.success) {
          statusalert.setTitle('Updated');
          statusalert.setSubTitle('Your profile pic has been changed successfully!!');
          statusalert.present();
          this.zone.run(() => {
            this.avatar = url;
          })
        }
      }).catch((err) => {
        statusalert.setTitle('Failed');
        statusalert.setSubTitle('Your profile pic was not changed');
        statusalert.present();
      })
    })
  }

  editname() {
    let statusalert = this.alertCtrl.create({
      buttons: ['okay']
    });
    let alert = this.alertCtrl.create({
      title: 'Edit Nickname',
      inputs: [{
        name: 'nickname',
        placeholder: 'Nickname'
      }],
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler: data => {

        }
      },
      {
        text: 'Edit',
        handler: data => {
          if (data.nickname) {
            this.profileProvider.updatedisplayname(data.nickname).then((res: any) => {
              if (res.success) {
                statusalert.setTitle('Updated');
                statusalert.setSubTitle('Your nickname has been changed successfully!!');
                statusalert.present();
                this.zone.run(() => {
                  this.displayName = data.nickname;
                })
              }

              else {
                statusalert.setTitle('Failed');
                statusalert.setSubTitle('Your nickname was not changed');
                statusalert.present();
              }

            })
          }
        }

      }]
    });
    alert.present();
  }

  logout() {
    firebase.auth().signOut().then(() => {
      this.navCtrl.parent.parent.setRoot('LoginPage');
    })
  }
}
