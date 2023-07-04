import { of } from 'rxjs';
import { ProductsComponent } from './products.component';
import { Product } from 'src/app/Models/product';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let mockConsumerService: any;
  let products: Product[];

  beforeEach(() => {
    products = [
      {
        id: 1,
        title: 'test 1',
        description: 'An apple mobile which is nothing like apple',
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: 'Apple',
        category: 'smartphones',
        thumbnail: '...',
        images: ['...', '...', '...'],
      },
      {
        id: 2,
        title: 'test 2',
        description: 'An apple mobile which is nothing like apple',
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: 'Apple',
        category: 'smartphones',
        thumbnail: '...',
        images: ['...', '...', '...'],
      },
    ];

    mockConsumerService = jasmine.createSpyObj([
      'getAllProducts',
      'deleteProduct',
    ]);
    component = new ProductsComponent(mockConsumerService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('delete', () => {
    it('should delete seleted product from product lists', () => {
      mockConsumerService.deleteProduct.and.returnValue(of(true));
      component.allProducts = products;
      component.deleteProduct(products[1]);
      expect(component.allProducts.length).toBe(1);
    });

    it('should delete the actual seleted product from product lists', () => {
      mockConsumerService.deleteProduct.and.returnValue(of(true));
      component.allProducts = products;
      component.deleteProduct(products[1]);

      for (let product of component.allProducts) {
        expect(product).not.toEqual(products[1]);
      }
    });

    it('should call the deleteProduct method in consumer service only once', () => {
      mockConsumerService.deleteProduct.and.returnValue(of(true));
      component.allProducts = products;
      component.deleteProduct(products[1]);
      expect(mockConsumerService.deleteProduct).toHaveBeenCalledTimes(1);
    });
  });
});
