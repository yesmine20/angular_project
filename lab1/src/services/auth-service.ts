import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //les fct qui genrent jwt 
  //1 avec cnx aevc email et password 
  // log out su serveur
  constructor(private afAuth: AngularFireAuth, private router: Router) {
  }
  signInWithEmailAndPassword(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }
  signOut() {
    return this.afAuth.signOut();
  }

}
