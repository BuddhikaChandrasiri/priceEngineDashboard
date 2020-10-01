import { Component, OnInit } from '@angular/core';
import { RestService, Product, ProductPriceSummary} from '../rest.service';
// import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  priceSummary: ProductPriceSummary[];

  constructor(public rest: RestService, private router: Router) { 
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.rest.getProducts().subscribe((resp:any) => {
      console.log("products: " + JSON.stringify(resp.data));
      this.products = resp.data.products;
    });
  }

  onCangeProductId(productId: number) {
    this.getProductPriceList(productId);
  }

  getProductPriceList(productId: number): void {
    this.rest.getProductPrices(productId).subscribe((resp: any) => {
      if (resp.success == true) {
        this.priceSummary = resp.data.pricesList;
      }
    });
  }
}
