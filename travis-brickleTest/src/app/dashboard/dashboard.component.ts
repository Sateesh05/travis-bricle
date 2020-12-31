import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import errCallBack from '../providers/errorCallback';
import { LogoutService } from './logout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(public service: LogoutService,
    public router: Router) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  public logout(): any {
    this.service.signout().subscribe((posRes) => {
      if (posRes.logout === "success") {
        debugger
        window.localStorage.removeItem("login_details");
        this.router.navigate(["/"]);
      } else {
        alert("Logout Fail");
      }
    }, errCallBack);
  };
}
