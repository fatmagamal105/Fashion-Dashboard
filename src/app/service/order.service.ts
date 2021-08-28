import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(public db:AngularFirestore) { }

  x = this.db.collection('orders');
  getAllOrders(){
    return this.x.snapshotChanges();
  }
  deleteItem(id:string){
    return this.x.doc(id).delete()
  }
  getTotalSales(){
    return this.db.collection('sales').doc('yLYmRWc6jzEDS6KW6Eeo').valueChanges()
  }
  /* Get num of users */
  getAllUsers(){
    return this.db.collection('users').valueChanges()
  }
}
