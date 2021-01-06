import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './products.service';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
    {
        path: '', component: ProductsComponent
    },
    {
        path: 'feedback', loadChildren: () => import('../feedback/feedback.module').then(obj => obj.FeedbackModule)
    }
]
@NgModule({
    declarations: [ProductsComponent],

    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        NgxPaginationModule,
        MatTableModule,
        MatIconModule,
        MatSortModule,
        ScrollingModule,
        ReactiveFormsModule, RouterModule.forChild(routes)
    ],

    providers: [ProductService],
    exports: [MatTableModule]
})
export class ProductModule { }
