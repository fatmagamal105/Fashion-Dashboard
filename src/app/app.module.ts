import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule }  from '@angular/fire/auth';

/*angular material */

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminProfileComponent } from './Components/admin-profile/admin-profile.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { ReviewsComponent } from './Components/reviews/reviews.component';
import { ReadComponent } from './Components/Products/read/read.component';
import { EditComponent } from './Components/Products/edit/edit.component';
import { AddComponent } from './Components/Products/add/add.component';
import { NavbarComponent } from './Components/SharedComponents/navbar/navbar.component';
import { FooterComponent } from './Components/SharedComponents/footer/footer.component';
import { SidebarComponent } from './Components/SharedComponents/sidebar/sidebar.component';
import { MaterialModule } from './material/material.module';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module



const config = {
  apiKey: "AIzaSyCUXhu3orefq_ailE0SkR-1c3axM_WZHPE",
  authDomain: "e-commerce-project-7.firebaseapp.com",
  projectId: "e-commerce-project-7",
  storageBucket: "e-commerce-project-7.appspot.com",
  messagingSenderId: "655024452506",
  appId: "1:655024452506:web:b93e337c799aed09638023"
};

@NgModule({
  declarations: [
    AppComponent,
    AdminProfileComponent,
    DashboardComponent,
    HomeComponent,
    LoginComponent,
    OrdersComponent,
    ReviewsComponent,
    ReadComponent,
    EditComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(config),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
