import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProfileComponent } from './Components/admin-profile/admin-profile.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { AddComponent } from './Components/Products/add/add.component';
import { EditComponent } from './Components/Products/edit/edit.component';
import { ReadComponent } from './Components/Products/read/read.component';
import { ReviewsComponent } from './Components/reviews/reviews.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component:LoginComponent},
  { path: 'admin-login', component:LoginComponent},
  { path: 'home', component:HomeComponent,canActivate:[AuthGuard]},
  { path: 'dashboard', component:DashboardComponent,canActivate:[AuthGuard]},
  { path:'read-products/:name', component:ReadComponent,canActivate:[AuthGuard]},
  { path:'edit-products/:name/:id', component:EditComponent,canActivate:[AuthGuard]},
  { path: 'add-prodcuts/:name', component:AddComponent,canActivate:[AuthGuard]},
  { path:'reviews', component:ReviewsComponent,canActivate:[AuthGuard]},
  { path: 'orders', component:OrdersComponent,canActivate:[AuthGuard]},
  { path: 'admin-profile', component:AdminProfileComponent,canActivate:[AuthGuard]},
  { path:'admin-profile', component:AdminProfileComponent,canActivate:[AuthGuard]},
  { path: 'reviews', component:ReviewsComponent,canActivate:[AuthGuard]},
  { path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
