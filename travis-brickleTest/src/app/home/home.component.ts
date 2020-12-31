import { Component, OnInit } from '@angular/core';
import errorCallback from '../providers/errorCallback';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public result:any;
    constructor(public service:HomeService){}
    ngOnInit(){
        this.service.getData().subscribe((posRes)=>{
            this.result = posRes;
        },errorCallback);
    };

}
