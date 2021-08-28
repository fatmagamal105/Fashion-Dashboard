import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';;
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',

})
export class WomenService {

  constructor(private db:AngularFirestore,private storage:AngularFireStorage) { }

  getAll(Product:string){
    return this.db.collection(`${Product}`).snapshotChanges();
  }

  insertItem(category: string,name:string,price:number,oldprice:number,type:string,discount:number,amount:number,imageUrl:any,color:[],size:[],details:[]){
    return new Promise((resolve,reject)=>{
      let ref = this.storage.ref(`${category}/`+name);
    ref.put(imageUrl).then(() => {
      ref.getDownloadURL().subscribe(imageUrl => {
        this.db.collection(`${category}`).add({productCategoryName:category, name:name,price:price,oldprice:oldprice,type:type,discount:discount
          ,amount:amount,imageUrl:imageUrl,color:color,size:size,details:details})
        .then((resolve))
      })
    })
    })
  }

  deleteItem(id:string,Product:string){
    return this.db.collection(`${Product}`).doc(id).delete(); 
  }

  getItemById(id:string, Product:any){
    return this.db.collection(`${Product}`).doc(id).snapshotChanges();
  }

  updateItem(category:any,id:string,name:string,price:number,oldprice:number,type:string,discount:number,amount:number,color:[],size:[],details:[]){
    return this.db.collection(`${category}`).doc(id).update({name:name,price:price,oldprice:oldprice,type:type,discount:discount,amount:amount,color:color,size:size,details:details})
  }

  /* Get items by type */
  getItemByType(Product:string,type:any){
    return this.db.collection(`${Product}`, ref => ref.where('type', '==', type)).snapshotChanges()
  }
  /* Get Admin Info */
  getAdminInfo(){
    return this.db.collection('admins').doc('WqTIQVjBhQgY7NhrTWgszDRwMrr1').valueChanges()
  }
  updateAdminInfo(fname:string,lname:string,phone:number,email:string){
    return this.db.collection('admins').doc('WqTIQVjBhQgY7NhrTWgszDRwMrr1').update({fname:fname,lname:lname,phone:phone,email:email})
  }
}


