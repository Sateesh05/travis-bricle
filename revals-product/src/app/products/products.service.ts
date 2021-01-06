import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    constructor(private http: HttpClient) { }
    private _url = "../../assets/Data/sampleData.json"
    public GetProductList(): Observable<any> {
        return this.http.get(this._url);
    };

};
