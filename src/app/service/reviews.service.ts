import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(private db:AngularFirestore) { }

  x = this.db.collection('reviews');

  getAllReviews(){
    return this.x.snapshotChanges();
  }

  deleteReview(id:string){
    return this.x.doc(id).delete();
  }
}
