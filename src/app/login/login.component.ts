import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

// import { url } from 'inspector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  ipAddress = "http://127.0.0.1:8000"
  // ipAddress = "3.6.69.205:8000"

  httpOptions = {
    headers: new HttpHeaders({ 
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json'
    })
  };
  
  loginApi = this.ipAddress + "/api/login"
  public userName: string
  public passWord: string
  public loginBody: any

  constructor(private httpclient: HttpClient, private http: HttpClient, private router : Router) { }
  ngOnInit() {
  }

  onLogin() {
    console.log("username & Password is =>>> " + this.userName, this.passWord)
    // this.loginBody = { "body": { "username": this.userName, "password": this.passWord } }
    // this.httpclient.post(this.loginApi, this.loginBody).subscribe(
    //   data => {
    //     console.log("data====>" + data)
    //   }
    // )
    console.log("Clicked On Login Button")
    this.router.navigate(['/home'])
    return true
    // return this.router.navigate(['/home'])
  }

}
