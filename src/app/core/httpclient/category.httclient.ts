import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../responses/base.response';
import { map } from 'rxjs';
import { ICategoryResponse } from '../responses/category.response';

@Injectable()
export class CategoryHttpClient {

  apiurl = 'https://localhost:7204/api/category';
  constructor(private http: HttpClient) { }

  getCategoryData() {
    return this.http.get<ApiResponse<ICategoryResponse[]>>(`${this.apiurl}`)
      .pipe(map((response) => response.response));
  }
}
