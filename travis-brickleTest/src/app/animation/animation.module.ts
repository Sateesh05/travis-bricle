import { NgModule } from "@angular/core";
import { AnimationComponent } from './animation.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { TokenModule } from '../token/token.module';
@NgModule({
    declarations:[AnimationComponent],
    imports:[CommonModule,
             HttpClientModule,
             RouterModule.forChild([{path:"",component:AnimationComponent}]),
             TokenModule],
    providers:[],
    exports:[AnimationComponent]
})
export class AnimationModule{}