import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import errCallBack from '../providers/errorCallback';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public uname:any;
    public upwd:any;
    constructor(public service:LoginService,
                public router:Router){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
    public login(data:any):any{
        this.service.signin(data).subscribe((posRes)=>{
            if(posRes.login === "success"){
                window.localStorage.setItem("login_details",JSON.stringify(posRes));
                this.router.navigate(["/dashboard"]);
            }
        },errCallBack);
    };

}
