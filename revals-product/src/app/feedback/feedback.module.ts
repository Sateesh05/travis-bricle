import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
    {
        path: '', component: FeedbackComponent
    }

]
@NgModule({
    declarations: [FeedbackComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule.forChild(routes)],
    //exports:[LoginComponent]
})
export class FeedbackModule { }
