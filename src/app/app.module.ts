import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { PriceCalculatorComponent } from './price-calculator/price-calculator.component';
import { CommonModule } from "@angular/common";
import { ProductsComponent} from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PriceCalculatorComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
