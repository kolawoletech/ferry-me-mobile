
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from 'firebase/app';
import 'firebase/database';
import firebase from 'firebase';
import { ImghandlerProvider } from '../../providers/imghandler/imghandler';



/*
  Generated class for the ProfileProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfileProvider {
  firedata = firebase.database().ref('/userProfile');
  public userProfile: firebase.database.Reference;
  public currentUser: User;

  avatar: string;
  displayName: string;
  public phone: number;

  constructor(

    public afAuth: AngularFireAuth,
    public afDb: AngularFireDatabase,
    public imgservice: ImghandlerProvider) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.currentUser = user;
        this.userProfile = firebase.database().ref(`/userProfile/${user.uid}`);
      }
    });
  }


  getUserProfile(): firebase.database.Reference {
    return this.userProfile;
  }

  updateDOB(birthDate:string): Promise<any> {
    return this.userProfile.update({ birthDate });
  }

  updateEmail(newEmail: string, password: string): Promise<any> {
    const credential: firebase.auth.AuthCredential = firebase.auth.
      EmailAuthProvider.credential(
        this.currentUser.email,
        password
      );
    return this.currentUser
      .reauthenticateWithCredential(credential)
      .then(user => {
        this.currentUser.updateEmail(newEmail).then(user => {
          this.userProfile.update({ email: newEmail });
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  updatePassword(newPassword: string, oldPassword: string): Promise<any> {
    const credential: firebase.auth.AuthCredential = firebase.auth
      .EmailAuthProvider.credential(
        this.currentUser.email,
        oldPassword
      );

    return this.currentUser
      .reauthenticateWithCredential(credential)
      .then(user => {
        this.currentUser.updatePassword(newPassword).then(user => {
          console.log('Password Changed');
        });
      })
      .catch(error => {
        console.error(error);
      });
  }


  updateNumber(number: number): Promise<any> {
    return this.userProfile.update({
      phoneNumber: number,
    });
  }

  updateimage(imageurl) {
    var promise = new Promise((resolve, reject) => {
      this.afAuth.auth.currentUser.updateProfile({
        displayName: this.afAuth.auth.currentUser.displayName,
        photoURL: imageurl
      }).then(() => {
        firebase.database().ref('userProfile/' + firebase.auth().currentUser.uid).update({
          displayName: this.afAuth.auth.currentUser.displayName,
          photoURL: imageurl,
          uid: firebase.auth().currentUser.uid
        }).then(() => {
          resolve({ success: true });
        }).catch((err) => {
          reject(err);
        })
      }).catch((err) => {
        reject(err);
      })
    })
    return promise;
  }

  getuserdetails() {
    var promise = new Promise((resolve, reject) => {
      this.firedata.child(firebase.auth().currentUser.uid).once('value', (snapshot) => {
        resolve(snapshot.val());
      }).catch((err) => {
        reject(err);
      })
    })
    return promise;
  }

  updatedisplayname(newname) {
    var promise = new Promise((resolve, reject) => {
      this.afAuth.auth.currentUser.updateProfile({
        displayName: newname,
        photoURL: this.afAuth.auth.currentUser.photoURL
      }).then(() => {
        this.firedata.child(firebase.auth().currentUser.uid).update({
          displayName: newname,
          photoURL: this.afAuth.auth.currentUser.photoURL,
          uid: this.afAuth.auth.currentUser.uid
        }).then(() => {
          resolve({ success: true });
        }).catch((err) => {
          reject(err);
        })
      }).catch((err) => {
        reject(err);
      })
    })
    return promise;
  }

  setBio(){
    
  }
}
