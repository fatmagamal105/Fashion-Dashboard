import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  productName = new Subject<string>();

  constructor(private db:AngularFirestore) {
    this.productName.next("women");
   }
   getProductName(){
     this.productName.asObservable();
   }
   setProductName(name:string){
     this.productName.next(name)
   }
}
