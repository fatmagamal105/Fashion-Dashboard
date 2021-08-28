import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Review } from 'src/app/Interfaces/review';
import { ReviewsService } from 'src/app/service/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Review[] =[];
  total: string | undefined;
  p: number=1;
  i: number=0;
  constructor(private reviewService: ReviewsService, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.reviewService.getAllReviews().subscribe(data=>{
      this.reviews = data.map( element => {
        let r : any = element.payload.doc.data();
        return{
          id: element.payload.doc.id,
          ...r
        }
      })
    });
  }

  openSnackBar(message: string, action: string){
    let snackBarRef = this.snackBar.open(message,action, {duration:2500});
    snackBarRef.afterDismissed().subscribe(() => {
      console.log('action was dismissed');
    });

    snackBarRef.onAction().subscribe(() => {
      console.log('action was triggered');
    });
  }

  onDelete(id: string){
    if(confirm("Are You Sure Delete this Item")){
      this.reviewService.deleteReview(id);
    } 
  }
}
