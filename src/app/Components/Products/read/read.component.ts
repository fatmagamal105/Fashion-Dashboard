import { Component, OnInit} from '@angular/core';
import { environment  } from '../../../../environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { WomenService } from 'src/app/service/women.service';
import { from, Observable } from 'rxjs';
import { Women } from 'src/app/Interfaces/women';
import { ItemIdentiferService } from 'src/app/service/item-identifer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { __param } from 'tslib';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { Order } from 'src/app/Interfaces/order';
import { Pipe, PipeTransform } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from 'src/app/service/auth.service';
import { CategoryService } from 'src/app/service/category.service';
//import { orderBy } from 'lodash';


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  products:any;
  // id:any;
  womenPro: Women[] =[];
  itemService: any;
  type: string | null = "";
  productName: string ="";
  total: string | undefined;
  p: number=1;
  i: number =0;

  //@Pipe({ name: 'orderBy' })
  //| orderBy: key: reverse"
  constructor(private womenService:WomenService,
              private itemId:ItemIdentiferService,
              private snackBar:MatSnackBar,
              private active:ActivatedRoute,
              private router:Router,private observer: BreakpointObserver,
              private prodService:CategoryService, 
              private dbAuth:AuthService) {
                this.productName = active.snapshot.params.name.slice(1);
                  //console.log(this.productName);
              }


  ngOnInit() : void{
    this.womenService.getAll(this.productName).subscribe(data => {
      this.womenPro = data.map(element => {
        let x : any = element;
        x = element.payload.doc.data();
        return{
          id : element.payload.doc.id,
          ...x
        }
      })
    })
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

  /**MAIN CODE */
  onDelete(id:string){
    if(confirm("Are You Sure Delete this Item")){
      this.womenService.deleteItem(id,this.productName);
    }
  }

  key: string = 'id';
  reverse: boolean = false;

  sort(key: string){
    this.key = key;
    this.reverse = !this.reverse
  }
}
// const ELEMENT_DATA: Order[] = [
//   {
//     id: "id",
//     username: 'username',
//     date: 'date',
//     totalprice:0,
//   }
// ];

