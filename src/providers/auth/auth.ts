import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
//import { GoogleAuthProvider, User, AuthCredential } from '@firebase/auth-types';
import { GooglePlus } from '@ionic-native/google-plus';
import { Platform } from 'ionic-angular';
import firebase from 'firebase/app';
import 'firebase/auth';

import 'firebase/database';
import { Facebook } from '@ionic-native/facebook';
import { Observable } from 'rxjs/Observable';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  phoneNumber?: string;
}

@Injectable()
export class AuthProvider {
  //private user: firebase.User;
  user: Observable<firebase.User>;
  constructor(
    public afAuth: AngularFireAuth,
    public afDb: AngularFireDatabase,
    private facebook: Facebook,
    public platform: Platform,
    private googlePlus: GooglePlus
  ) {
    console.log('Hello AuthProvider Provider');
    this.user = this.afAuth.authState;
  }


  login(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  
  signupUser2(displayName: string, email: string, password: string): Promise<any> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(newUserCredential => {
        firebase
          .database()
          .ref(`/userProfile/${newUserCredential.user.uid}`)
          .set({
            uid: newUserCredential.user.uid,
            email: email,
            displayName: displayName 
          });
      })
      .catch(error => {
        console.error(error);
        throw new Error(error);
      });
  }

  resetPassword(email: string): Promise<void> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  logoutUser(): Promise<void> {
    return this.afAuth.auth.signOut();
    //afAuth.auth.unsubscribe();
  }



  /*  loginUser2(email: string, password: string): Promise<any> {
     return this.afAuth.auth.signInWithEmailAndPassword(email,password);
   }
 
   resetPassword2(email: string): Promise<void> {
     return this.afAuth.auth.sendPasswordResetEmail(email);
   }
 
   logoutUser2(): Promise<void> {
     return this.afAuth.auth.signOut();
   }
 
   async createUserWithEmailAndPassword(
     email: string,
     password: string,
     displayName: string
   ): Promise<void> {
     try {
       const newUser: User = await this.afAuth.auth.createUserWithEmailAndPassword(
         email,
         password
       );
 
       await newUser.sendEmailVerification();
 
       const userProfileDocument: AngularFirestoreDocument<
         any
       > = this.firestore.doc(`userProfile/${newUser.uid}`);
 
       await userProfileDocument.set({
         id: newUser.uid,
         email: email,
         displayName: displayName,
       });
 
       return newUser;
     } catch (error) {
       console.error(error);
       throw new Error();
     }
   }
 
  */

   signUpWithFacebook(): Promise<any> {
    if (this.platform.is('cordova')) {
      return this.facebook.login(['email'])
      .then( response => {
        const facebookCredential = firebase.auth.FacebookAuthProvider
          .credential(response.authResponse.accessToken);
  
        firebase.auth().signInWithCredential(facebookCredential)
          .then( success => { 
            console.log("Firebase success: " + JSON.stringify(success)); 
          }).catch((error) => {
            console.log("Firebase failure: " + JSON.stringify(error));
            alert('Network Error, Check Your Connection And Try Again')
        });
  
      }).catch((error) => { console.log(error) });
    } else {
      return firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()).then((success) => {
        console.log("Firebase success: " + JSON.stringify(success));
      })
      .catch((error) => {
        console.log("Firebase failure: " + JSON.stringify(error));
        alert('Network Error, Check Your Connection And Try Again')
    });

    }

  }

  async nativeGoogleLogin(): Promise<any> {
    try {
  
      const gplusUser = await this.googlePlus.login({
        'webClientId': '924137236064-766tk41oqe8ldu5p15g4gviujgsgv07e.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      })

      //return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.w))
  
      return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken))
  
    } catch(err) {
      console.log(err)
    }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      this.updateUserData(this.user)
  
    } catch(err) {
      console.log(err)
    }
  
  }

  signUpWithGoogle() {
    if (this.platform.is('cordova')) {
      this.nativeGoogleLogin();
    } else {
      this.webGoogleLogin();
    }
  }
  
  private updateUserData(user) {
    // Sets user data to firestore on login
     console.log(firebase.auth().currentUser)
     firebase.database()
     .ref(`userProfile/${firebase.auth().currentUser.uid}`).set({
      uid: firebase.auth().currentUser.uid,
      email: firebase.auth().currentUser.email,
      displayName: firebase.auth().currentUser.displayName,
      photoURL: firebase.auth().currentUser.photoURL 
    })

    

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }

    console.log(data)

  }
}