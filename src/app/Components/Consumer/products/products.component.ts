import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/product';
import { ConsumerService } from '../consumer.service';
import { EMPTY, Observable, catchError, filter } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]> | undefined;
  productViewType: string = 'table';
  constructor(
    private consumerS: ConsumerService,
    private toastrS: ToastrService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.products$ = this.consumerS.getAllProducts().pipe(
      catchError((err) => {
        this.toastrS.error(err.message, 'Errorr');
        return EMPTY;
      })
    );
  }

  deleteProduct(product: Product) {
    let deletedObs = this.consumerS.deleteProduct(product);
  }
}
