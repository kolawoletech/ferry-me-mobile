import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class AuthProvider {
  constructor(
    public afAuth: AngularFireAuth,
    public afDb: AngularFireDatabase
  ) {
    console.log('Hello AuthProvider Provider');
  }


  loginUser(email: string, password: string): Promise<any> {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
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


  resetPassword(email: string): Promise<void> {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }

  logoutUser(): Promise<void> {
    return this.afAuth.auth.signOut();
    //afAuth.auth.unsubscribe();
  }
}