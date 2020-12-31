//import Injectable
//Injectable is used to create the "services" and "filters(interceptors)"
import { Injectable } from "@angular/core";

//import TokenService
//TokenService containes getToken() function
//getToken() function fetches the data from local storage
import { TokenService } from "./gettoken.service";


//import "HttpRequest"
//HttpRequest is used to receive req's
//import "HttpHandler"
//HttpHandler used to send the "req to server"
//import "HttpEvent"  &  "Observable"
//both "HttpEvent" & "Observable" used to handle the Exceptions rainsed by Interceptors
import { HttpRequest,HttpHandler,HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})
export class AuthFilter{
    constructor(public service:TokenService){}
    intercept(req:HttpRequest<any>,handler:HttpHandler):Observable<HttpEvent<any>>{
        if(req.url == "http://localhost:8080/login"){
             return handler.handle(req);
        }else{
            const req1 = req.clone({
                setHeaders:{
                    token : this.service.getToken()
                }
            });
            return handler.handle(req1);
        }
    };
};
