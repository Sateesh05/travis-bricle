import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { TokenModule } from '../token/token.module';
import { HomeService } from './home.service';
@NgModule({
    declarations:[HomeComponent],
    imports:[CommonModule,
             HttpClientModule,
             RouterModule.forChild([{path:"",component:HomeComponent}]),
             TokenModule],
    providers:[HomeService],
    exports:[HomeComponent]
})
export class HomeModule{}