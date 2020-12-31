import { Component, Input, OnInit } from '@angular/core';
import errCallBack from '../providers/errorCallback';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public result:any;
  @Input() title:string | undefined;
    constructor(public service:AboutService){}
    ngOnInit(){
        this.service.getData().subscribe((posRes)=>{
            this.result = posRes;
        },errCallBack);
    };


    //animation code
 
}
