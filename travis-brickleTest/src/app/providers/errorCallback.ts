import { HttpErrorResponse } from "@angular/common/http";
let errCallBack = (err:HttpErrorResponse):any=>{
    if(err.error instanceof Error){
        console.log("client side errors");
    }else{
        console.log("server side errors");
    }
};
export default errCallBack;