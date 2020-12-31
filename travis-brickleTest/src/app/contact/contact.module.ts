import { NgModule } from "@angular/core";
import { ContactComponent } from './contact.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { TokenModule } from '../token/token.module';
import { ContactService } from './contact.service';
@NgModule({
    declarations:[ContactComponent],
    imports:[CommonModule,
             HttpClientModule,
             RouterModule.forChild([{path:"",component:ContactComponent}]),
             TokenModule],
    providers:[ContactService],
    exports:[ContactComponent]
})
export class ContactModule{}