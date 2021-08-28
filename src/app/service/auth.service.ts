import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:Observable<firebase.User|null>= new Observable;
  constructor(private dbAuth : AngularFireAuth) {
    this.user = this.dbAuth.user
  }
  login(email:string,password:string){
    return this.dbAuth.signInWithEmailAndPassword(email,password)
  }

  logout(){
    return this.dbAuth.signOut()
  }
  
}
