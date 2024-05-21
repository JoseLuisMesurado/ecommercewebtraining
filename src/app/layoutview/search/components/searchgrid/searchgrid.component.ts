import { Component, OnInit } from '@angular/core';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ProductHttpClient } from '../../../../core/httpclient/product.httpclient';
import { IProductResponse } from '../../../../core/responses/product.response';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-searchgrid',
  standalone: true,
  imports: [
    DataViewModule,
    TagModule,
    RatingModule,
    ButtonModule,
    CommonModule,
  ],
  templateUrl: './searchgrid.component.html',
  styleUrl: './searchgrid.component.scss',
  providers: [ProductHttpClient],
})
export class SearchgridComponent implements OnInit {

  products: IProductResponse[] | undefined;
  layout: string = 'list';
  constructor(
    private productHttpClient: ProductHttpClient,
    private activatedroute: ActivatedRoute,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.activatedroute.queryParamMap.subscribe((params) => {
      let searchtext = params.get('searchtext');
      if (searchtext && searchtext.length > 0) {
        this.productHttpClient.getProductsBySearch(searchtext).pipe().subscribe((products) => {
          this.products = products;
        });
      } else {
        this.productHttpClient.getProductsData().pipe().subscribe((products) => {
          this.products = products;
        });
      }

    });

  }
  getSeverity(product: IProductResponse) {
    switch (product.inventoryStatus) {
      case 'INSTOCK':
        return 'success';

      case 'LOWSTOCK':
        return 'warning';

      case 'OUTOFSTOCK':
        return 'danger';

      default:
        return null;
    }
  };
  addproduct() {
    this.route.navigate(['addproduct']);
  }

}
