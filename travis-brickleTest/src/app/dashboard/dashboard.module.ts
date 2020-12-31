import { NgModule } from "@angular/core";
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TokenModule } from '../token/token.module';
import { LogoutService } from './logout.service';
import { AuthGuard } from "../providers/auth.guard";
@NgModule({
    declarations:[DashboardComponent],
    imports:[
        CommonModule,
        HttpClientModule,
        TokenModule,
        RouterModule.forChild([{path:"",component:DashboardComponent,children:[
            {path:"about",loadChildren:()=>import("../about/about.module").then(obj=> obj.AboutModule),canActivate:[AuthGuard]},
            {path:"home",loadChildren:()=>import("../home/home.module").then(obj=> obj.HomeModule),canActivate:[AuthGuard]},
            {path:"contact",loadChildren:()=>import("../contact/contact.module").then(obj=> obj.ContactModule),canActivate:[AuthGuard]},
            {path:"animation",loadChildren:()=>import("../animation/animation.module").then(obj=> obj.AnimationModule)}
        ]}])
    ],
    providers:[LogoutService],
    exports:[DashboardComponent]
})
export class DashboardModule{}