import { Component, OnInit } from '@angular/core';
import errCallBack from '../providers/errorCallback';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public result:any;
  message='welcome';
  constructor(public service:ContactService){}
  ngOnInit(){
      this.service.getData().subscribe((posRes)=>{
          this.result = posRes;
      },errCallBack
      );
  };
}
