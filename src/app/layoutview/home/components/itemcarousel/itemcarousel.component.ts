import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ProductHttpClient } from '../../../../core/httpclient/product.httpclient';
import { IProductResponse } from '../../../../core/responses/product.response';

@Component({
  selector: 'app-itemcarousel',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './itemcarousel.component.html',
  styleUrl: './itemcarousel.component.scss',
  providers: [ProductHttpClient]
})
export class ItemcarouselComponent implements OnInit {

  products: IProductResponse[] | undefined;
  responsiveOptions: any[] | undefined;

  constructor(private productHttpClient: ProductHttpClient) { }
  ngOnInit(): void {
    this.productHttpClient.getProductsData().pipe().subscribe((products) => {
      this.products = products;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '1220px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '1100px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return ''; // Add a default case that returns a default value.
    }
  }
}
