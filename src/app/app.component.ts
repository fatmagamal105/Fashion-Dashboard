import { AngularFirestore } from '@angular/fire/firestore';
import { environment  } from '../environments/environment';

import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import {MatSidenavModule,MatSidenav} from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { CategoryService } from './service/category.service';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dashboard';
 @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
 
   constructor(private observer: BreakpointObserver,
     private prodService:CategoryService, 
     private router:Router,
     private dbAuth:AuthService) {}
 
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
