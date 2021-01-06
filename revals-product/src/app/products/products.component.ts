import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from './products.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Product } from './product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public Dataarray;
  Product: any = new Product();
  ProductRecords = new Array<Product>()
  @ViewChild(MatSort, { static: true })
  public sort: MatSort;
  @ViewChild(MatPaginator, { static: true })
  public paginator: MatPaginator;

  constructor(private _service: ProductService,
    private _router: Router) { }
  config: any;
  ngOnInit(): void {
    this.GetProductList();

    this.config = {
      itemsPerPage: 8,
      currentPage: 1,
      totalItems: this.ProductRecords.length
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
  GetProductList() {
    this._service.GetProductList().subscribe((posRes) => {
      console.log(posRes)
      this.ProductRecords = posRes;
      this.ProductRecords.map((element, index) => {
        element.s_no = index + 1;
      });

      console.log(this.ProductRecords)
    }, (errRes: HttpErrorResponse) => {
      if (errRes.error instanceof Error) {
        console.log('server side error')
      } else {
        console.log('client side side error')
      }
    })
  };
  feedback() {
    this._router.navigate(['/feedback']);
  }
}
