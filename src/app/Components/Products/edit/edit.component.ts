import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Women } from 'src/app/Interfaces/women';
import { ItemIdentiferService } from 'src/app/service/item-identifer.service';
import { WomenService } from 'src/app/service/women.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  womenPro:Women[]=[];
  id: any;
  name:any
  productname : string="";
  prodPrice = 0;
  prodOldPrice = 0;
  prodDiscount = 0;
  prodDetails:string[]=[];
  prodAmount=0;
  prodColor:string[]=[]
  prodSize:string[]=[]
  product : any;
  prodType: string | null ="0";
  category : string | null =""
  constructor(private womenService:WomenService,
    private route:Router,
    private ourActivated: ActivatedRoute){ 
       this.id = ourActivated.snapshot.params.id.slice(1);
       this.category = ourActivated.snapshot.params.name.slice(1);
      // this.ourActivated.queryParamMap.subscribe(params => {
      //   this.type = params.get('type');
      //  console.log(this.type);
      // })
      // this.productName = ourActivated.snapshot.params.name.slice(1);
    }

        
  ngOnInit(): void {
    this.womenService.getItemById(this.id,this.category).subscribe(res => {
      let x = res.payload.data();
      //console.log(x)
      this.product = x;
      this.productname = this.product.name;
      this.prodType = this.product.type;
      this.prodPrice = this.product.price;
      this.prodOldPrice = this.product.oldprice;
      this.prodDiscount = this.product.discount;
      this.prodAmount = this.product.amount;
      this.prodDetails = this.product.details;
      this.prodColor = this.product.color;
      this.prodSize = this.product.size;
    })
  }
  onSubmit(f:any){
    let data = f.value;
     if(typeof(data.color)=="string") data.color = data.color.split(",");
     else  data.color = data.color;
     if(typeof(data.size)=="string") data.size = data.size.split(",");
     else  data.size = data.size 
     if(typeof(data.details)=="string") data.details = data.details.split(",");
     else  data.details = data.details 
    this.womenService.updateItem(this.category,this.id,data.name,data.price,data.oldprice,data.type,data.discount,data.amount,data.color,data.size,data.details) //
    .then(()=>{
      this.route.navigateByUrl(`read-products/:${this.category}`)
    })
  }
}

