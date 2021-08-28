import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { CategoryService } from 'src/app/service/category.service';
import { WomenService } from 'src/app/service/women.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  fname = "";
  lname = "";
  phone = 0;
  email = "";
  username = "";
  constructor(private womenService:WomenService,private observer: BreakpointObserver,
    private prodService:CategoryService, 
    private router:Router,
    private dbAuth:AuthService) { }

  ngOnInit(): void {
    this.womenService.getAdminInfo().subscribe(res => {
      let x : any = res;
      this.fname = x.fname;
      this.lname = x.lname;
      this.email = x.email;
      this.phone = x.phone;
      this.username = x.fname + " "+x.lname;
    })
  }
  msg=""
  onSubmit(f:any){
    let data = f.value;
    this.womenService.updateAdminInfo(data.firstname,data.lastname,data.phoneNumber,data.adminEmail).then(()=>
      this.msg="done"
    )
  }
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
 
 
   ngAfterViewInit() {
     this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
       if (res.matches) {
         this.sidenav.mode = 'over';
         this.sidenav.close();
       } else {
         this.sidenav.mode = 'side';
         this.sidenav.open();
       }
     });
   }
 
   women(){
     this.prodService.setProductName("women");
     this.router.routeReuseStrategy.shouldReuseRoute = () => false;
     this.router.onSameUrlNavigation = "reload";
     this.router.navigate(['/read-products/:women']);
   }
 
   men(){
     this.prodService.setProductName("men");
     this.router.routeReuseStrategy.shouldReuseRoute = () => false;
     this.router.onSameUrlNavigation = "reload";
     this.router.navigate(['/read-products/:men'])
   }
 
   girls(){
     this.prodService.setProductName("girls");
     this.router.routeReuseStrategy.shouldReuseRoute = () => false;
     this.router.onSameUrlNavigation = "reload";
     this.router.navigate(['/read-products/:girls'])
   }
  
   boys(){
     this.prodService.setProductName("boys");
     this.router.routeReuseStrategy.shouldReuseRoute = () => false;
     this.router.onSameUrlNavigation = "reload";
     this.router.navigate(['/read-products/:boys']);
   }
 
   logout(){
     this.dbAuth.logout();
   }
}
