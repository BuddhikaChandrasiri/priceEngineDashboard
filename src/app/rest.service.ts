import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/internal/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

export interface PriceEngineRespone <T>{
  data: T;
  success: boolean;
  reason: string;
}

export interface Product {
  id: string;
  name: string;
  unitsPerCarton: number;
  price: number;
}

export interface ProductPriceSummary {
  productName: string;
  cartonPrice: number,
  unitsPerCarton: number;
  units: number,
  price: number;
}

const endpoint = 'http://localhost:8185/';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { 
  }

  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }

  getProducts(): Observable<any> {
    return this.http.get(endpoint + 'v1/product').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  getProductPrices(productId: number): Observable<any> {
    return this.http.get(endpoint + 'v1/product/'+ productId+ '/prices').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
