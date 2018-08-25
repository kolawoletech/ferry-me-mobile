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

  signupUser(
    username: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,


  ): Promise<any> {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(
        newUser => {
          this.afDb
            .object(`/userProfile/${newUser.user.uid}`)
            .set({
              email,
              username,
              firstName,
              lastName
            })
        },
        error => {
          console.error(error);
        }
      );
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

 /*  signInWithGoogle() {
		console.log('Sign in with google');
		return this.oauthSignIn(new firebase.auth.GoogleAuthProvider());
	}

	private oauthSignIn(provider: GoogleAuthProvider) {
		if (!(<any>window).cordova) {
			return this.afAuth.auth.signInWithPopup(provider);
		} else {
			return this.afAuth.auth.signInWithRedirect(provider)
			.then(() => {
				return this.afAuth.auth.getRedirectResult().then( result => {
					// This gives you a Google Access Token.
					// You can use it to access the Google API.
				//	let token = result.credential.accessToken;
					// The signed-in user info.
					let user = result.user;
				//	console.log(token, user);
				}).catch(function(error) {
					// Handle Errors here.
					alert(error.message);
				});
			});
		}
  } */
  
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
  
}