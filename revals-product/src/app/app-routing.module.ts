import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'', loadChildren:()=>import('./login/login.module ').then(obj=>obj.LoginModule)
  }
  // {
  //   path:'products', loadChildren:()=>import('./products/products.module').then(obj=>obj.ProductModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
