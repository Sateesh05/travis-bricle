import { NgModule } from "@angular/core";
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { LoginService } from './login.service';
@NgModule({
    declarations:[LoginComponent],
    imports:[CommonModule,
             HttpClientModule,
             FormsModule,
             RouterModule.forChild([{path:"",component:LoginComponent}])],
    providers:[LoginService],
    exports:[LoginComponent]
})
export class LoginModule{}