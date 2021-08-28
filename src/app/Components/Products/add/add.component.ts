import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { WomenService } from 'src/app/service/women.service';
import { Women } from 'src/app/Interfaces/women';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {


  public womenForm:FormGroup;
  path:string='';
  type: string | null = "";
  productName: string ="";

  constructor(
    public route : Router,
    public womenService: WomenService,
    public formBuilder: FormBuilder,
    public router: Router,
    public active: ActivatedRoute) { 
      this.womenForm = this.formBuilder.group({
        name: FormControlName.name,
        type: '',
        details: [''],
        amount: '',
        color:[''],
        size:[''],
        price:'',
        oldprice: '',
        discount:''
      }) 
      this.productName = active.snapshot.params.name.slice(1);
    }

    
    ngOnInit(): void {}
    
    upload($event:any){
      this.path = $event.target.files[0];
    }
    onSubmit(form:any){
      let data = form.value;
      data.color = data.color.split(",");
      data.size = data.size.split(",");
      data.details = data.details.split(",");
      this.womenService.insertItem(this.productName,data.name,data.price,data.oldprice,data.type,data.discount,data.amount,this.path,data.color,data.size,data.details).then(() => {
        this.route.navigate([`read-products/:${this.productName}`])
      })
    }
}
