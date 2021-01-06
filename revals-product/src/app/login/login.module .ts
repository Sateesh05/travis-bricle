import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '', component: LoginComponent
    },
    {
        path: 'products', loadChildren: () => import('../products/products.module').then(obj => obj.ProductModule)
    }
]
@NgModule({
    declarations: [LoginComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)],
    //exports:[LoginComponent]
})
export class LoginModule { }
