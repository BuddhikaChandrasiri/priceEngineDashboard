import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component'
import {PriceCalculatorComponent} from './price-calculator/price-calculator.component'

const routes: Routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  }, 
  {
    path: 'priceCalculator',
    component: PriceCalculatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
