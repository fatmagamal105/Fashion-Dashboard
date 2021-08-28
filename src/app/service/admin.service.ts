import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private db:AngularFirestore) { }
  addNewAdmin(id:any,fname:string,lname:string,phone:number){
    return this.db.doc('admins/' + id).set({
      fname,lname,phone
    })
  }
}
