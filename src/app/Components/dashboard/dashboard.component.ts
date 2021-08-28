import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalSales=0;
  totalOrders=0;
  totalUsers=0;
  orders:any[]=[];
  constructor(private or : OrderService) { }
  ngOnInit(): void {
    this.or.getAllOrders().subscribe(data =>{
      let y:any[] = data
      this.totalOrders = y.length;
      this.orders = data.map(element => {
        let x : any = element;
        x = element.payload.doc.data();
        this.totalSales += x.totalprice;
        return{
          ...x
        }
      })
    })
    this.or.getAllUsers().subscribe(res => {
      let x:any[] = res;
      this.totalUsers = x.length;
    })
  }

}
