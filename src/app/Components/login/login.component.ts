import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg : string = '';
  constructor(private as: AuthService, private router:Router) { }
  

  ngOnInit(): void {
  }
  signin(form:any){
    let data = form.value;
    this.as.login(data.email,data.password)
    .then(result => {
      this.errorMsg = '';
      this.router.navigate(['/dashboard'])
    })
    .catch(err => {
      this.errorMsg = err.message
    })
  }
}
