import { NgModule } from "@angular/core";
import { AboutComponent } from './about.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { TokenModule } from '../token/token.module';
import { AboutService } from './about.service';
@NgModule({
    declarations:[AboutComponent],
    imports:[CommonModule,
             HttpClientModule,
             RouterModule.forChild([{path:"",component:AboutComponent}]),
             TokenModule],
    providers:[AboutService],
    exports:[AboutComponent]
})
export class AboutModule{}