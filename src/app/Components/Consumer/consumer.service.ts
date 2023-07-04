import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product, ProductApiModel } from 'src/app/Models/product';

@Injectable({
  providedIn: 'root',
})
export class ConsumerService {
  baseUrl: string = 'https://dummyjson.com';
  constructor(private _http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this._http.get<ProductApiModel>(`${this.baseUrl}/products`).pipe(
      map((res) => res.products),
      map((products) =>
        products.map(
          (product) =>
            ({
              ...product,
              price: product.price * 2,
            } as Product)
        )
      )
    );
  }

  deleteProduct(product: Product) {
    return this._http.delete(`${this.baseUrl}/products/${product.id}`);
  }
}
