import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
//import { GoogleAuthProvider, User, AuthCredential } from '@firebase/auth-types';
import { GooglePlus } from '@ionic-native/google-plus';
import { Platform } from 'ionic-angular';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
@Injectable()
export class AuthProvider {
  constructor(
    public afAuth: AngularFireAuth,
    public afDb: AngularFireDatabase,

    public platform: Platform,
    private googlePlus: GooglePlus
  ) {
    console.log('Hello AuthProvider Provider');
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
 
   async googleSignIn() {
     if (this.platform.is('cordova')) {
       try {
         const googleLogin = await this.googlePlus.login({
           webClientId: firebaseSdkConfig.webClientId,
           offline: true,
         });
 
         const credential: AuthCredential = firebase.auth.GoogleAuthProvider.credential(
           googleLogin.idToken
         );
 
         const newUser: User = await this.afAuth.auth.signInWithCredential(
           credential
         );
 
         const userProfileDocument: AngularFirestoreDocument<
           any
         > = this.firestore.doc(`userProfile/${newUser.uid}`);
 
         await userProfileDocument.set({
           id: newUser.uid,
           email: googleLogin.email,
           displayName: googleLogin.displayName,
           imageUrl: googleLogin.imageUrl,
         });
 
         return newUser;
       } catch (error) {
         console.error(error);
       }
     } else {
       try {
         const provider: GoogleAuthProvider = new firebase.auth.GoogleAuthProvider();
         const signInResult = await firebase.auth().signInWithPopup(provider);
 
         const newUser = signInResult.user;
 
         const userProfileDocument: AngularFirestoreDocument<
           any
         > = this.firestore.doc(`userProfile/${newUser.uid}`);
 
         await userProfileDocument.set({
           id: newUser.uid,
           email: newUser.email,
           displayName: newUser.displayName,
         });
 
         return newUser;
       } catch (error) {
         console.error(error);
       }
     }
   } */
}