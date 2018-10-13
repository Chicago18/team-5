import { Injectable } from '@angular/core';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDsy1VZpSlGJ-03yY56lDABTQ7-nfXx_WQ",
  authDomain: "code-for-good-group-5.firebaseapp.com",
  databaseURL: "https://code-for-good-group-5.firebaseio.com",
  projectId: "code-for-good-group-5",
  storageBucket: "code-for-good-group-5.appspot.com",
  messagingSenderId: "150252170136"
};

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  constructor() {
    firebase.initializeApp(firebaseConfig);
    firebase.firestore().settings({timestampsInSnapshots: true});
  }

  loginUser(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  signUpUser(email: string, password: string, firstName: string, lastName: string): Promise<any> {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then( newUser => {
          firebase
          .firestore()
          .collection('profile')
          .doc()
          .set({ userID: newUser.user.uid, email: email, firstName: firstName, lastName: lastName});
      })
      .catch((error) => console.log('Error creating new user', error));
  }
}
