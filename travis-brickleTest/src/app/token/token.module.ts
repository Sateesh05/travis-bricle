import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { TokenService } from './gettoken.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthFilter } from './aouth.interceptor';
@NgModule({
    imports:[CommonModule],
    providers:[TokenService,{
        provide:HTTP_INTERCEPTORS,
        useClass:AuthFilter,
        multi:true
    }]
})
export class TokenModule{}