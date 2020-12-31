import { StringMapWithRename } from "@angular/compiler/src/compiler_facade_interface";
import { Injectable } from "@angular/core";
@Injectable({
    providedIn:"root"
})
export class TokenService{
   public getToken():string{
       let str = window.localStorage.getItem(`login_details`);
        let obj = JSON.parse(str);
        return obj.token;
   };
   //this method denotes if it have token it will return true
   public isLoggodInToken(){
       return !!localStorage.getItem('login_details');
   }
};