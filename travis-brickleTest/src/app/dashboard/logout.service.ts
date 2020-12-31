import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn:"root"
})
export class LogoutService{
    constructor(public http:HttpClient){}
    public signout():Observable<any>{
        debugger;
        return this.http.get("http://localhost:8080/logout");
    };
};