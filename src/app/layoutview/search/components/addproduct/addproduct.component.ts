import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber'
import { ButtonModule } from 'primeng/button';
import { CategoryHttpClient } from '../../../../core/httpclient/category.httclient';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ProductHttpClient } from '../../../../core/httpclient/product.httpclient';
import { IProductResponse } from '../../../../core/responses/product.response';
import { Router } from '@angular/router';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-addproduct',
  standalone: true,
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.scss',
  imports: [AutoCompleteModule, ButtonModule, ReactiveFormsModule, FormsModule, InputTextModule, FloatLabelModule, InputNumberModule],
  providers: [CategoryHttpClient, ProductHttpClient]
})

export class AddproductComponent implements OnInit {

  newProduct: IProductResponse | undefined;
  productdescription: any;
  productname: any;
  price: any;
  stock: any;
  formGroup!: FormGroup;
  productthumbnail: any;

  categories: any[] | undefined;
  selectedcategory: any;
  filteredCategories: any[] | undefined;

  constructor(
    private categoryHttpClient: CategoryHttpClient,
    private productHttpClient: ProductHttpClient,
    private route: Router
  ) { }
  ngOnInit() {
    this.categoryHttpClient.getCategoryData().pipe().subscribe((categories) => {
      this.categories = categories;
    });
  }

  filterCategory(event: AutoCompleteCompleteEvent) {
    let filtered: any[] = [];
    let query = event.query;

    for (let i = 0; i < (this.categories as any[]).length; i++) {
      let category = (this.categories as any[])[i];
      if (category.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(category);
      }
    }

    this.filteredCategories = filtered;
  }
  saveproduct() {
    this.newProduct = {} as IProductResponse;

    this.newProduct.name = this.productname;
    this.newProduct.price = this.price;
    this.newProduct.category = this.selectedcategory.name;
    this.newProduct.stock = this.stock;
    this.newProduct.description = this.productdescription;
    this.newProduct.thumbnail = this.productthumbnail;
    this.newProduct.categoryId = parseInt(this.selectedcategory.id!);

    this.productHttpClient.saveProduct(this.newProduct).pipe().subscribe((isSave) => {
      console.log(isSave);
      if (isSave) {
        this.route.navigate(['search']);
      }
      //showtoast
      //realod grid
    })
  }
}



