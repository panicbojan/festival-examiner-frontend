import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router:Router) { }

  username:any;
  password:any;

  ngOnInit() {
  }

  loginUser(){
    
    var logData = {'email': this.username, 'password': this.password };
    return this.http.post('http://127.0.0.1:8000/api/login',logData).subscribe(
      data => {
        
      localStorage.setItem('token',data['token']);
      this.router.navigate(['/dashboard']);
      });
  }

}
