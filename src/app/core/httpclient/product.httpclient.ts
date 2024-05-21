import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProductResponse } from '../responses/product.response';
import { ApiResponse } from '../responses/base.response';
import { map } from 'rxjs';

@Injectable()
export class ProductHttpClient {
  apiurl = 'https://localhost:7204/api/product';
  constructor(private http: HttpClient) { }
  getProductsData() {
    return this.http.get<ApiResponse<IProductResponse[]>>(`${this.apiurl}`)
      .pipe(map((data) => data.response));
  }
  getProductsBySearch(searchtext: string) {
    return this.http.get<ApiResponse<IProductResponse[]>>(`${this.apiurl + '/search'}/${searchtext}`)
      .pipe(map((data) => data.response));
  }

  saveProduct(newProduct: IProductResponse) {
    return this.http.post<ApiResponse<boolean>>(`${this.apiurl}`, newProduct).pipe(map((data) => data.response));
  }
}
