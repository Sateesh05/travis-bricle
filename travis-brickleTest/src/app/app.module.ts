import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { LoginService } from './login/login.service';
import { AuthGuard } from './providers/auth.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnimationComponent } from './animation/animation.component';

export const appRoutes:Routes = [
  {path:"",loadChildren:()=> import("./login/login.module").then(obj=> obj.LoginModule)},
  {path:"dashboard", loadChildren:()=> import("./dashboard/dashboard.module").then(obj=>obj.DashboardModule)}
];
@NgModule({
  declarations: [
    AppComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,LoginModule,DashboardModule,RouterModule.forRoot(appRoutes), NgbModule
  ],
  providers: [ LoginService,AuthGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
