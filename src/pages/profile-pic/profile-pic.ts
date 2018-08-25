import { Component, NgZone, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController} from 'ionic-angular';
import { ImghandlerProvider } from '../../providers/imghandler/imghandler';
import { ProfileProvider} from '../../providers/profile/profile'
/**
 * Generated class for the ProfilePicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-pic',
  templateUrl: 'profile-pic.html',
})
export class ProfilePicPage {
  imgurl = 'https://firebasestorage.googleapis.com/v0/b/myapp-4eadd.appspot.com/o/chatterplace.png?alt=media&token=e51fa887-bfc6-48ff-87c6-e2c61976534e';
  moveon: boolean = true;
  constructor(public cdr: ChangeDetectorRef, public navCtrl: NavController, public navParams: NavParams, public imgservice: ImghandlerProvider,
    public zone: NgZone, public profileProvider: ProfileProvider, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePicPage');
  }

  
  chooseimage() {
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    })
 
    loader.present();
    
    this.imgservice.uploadimage().then((url: any) => {
      this.cdr.detectChanges();
 
        this.imgurl = url;
        this.moveon = false;
        console.log("isBluetoothConnected---", this.imgurl );

    })
  
  }

  updateproceed() {
    let loader = this.loadingCtrl.create({
      content: 'Please wait'
    })
    loader.present();
    this.profileProvider.updateimage(this.imgurl).then((res: any) => {
      loader.dismiss();
      if (res.success) {
        this.navCtrl.setRoot('PhonePage');
      }
      else {
        alert(res);
      }
    })
    loader.dismiss();
  }

  proceed() {
    this.navCtrl.setRoot('PhonePage');
  }
}
