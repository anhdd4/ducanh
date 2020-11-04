import { Component } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-shopping-cart';
  products: Product[] = [
    {
      id: '1',
      name: 'product 1',
      description: ' chu y',
      image: 'https://via.placeholder.com/200x150',
      price: 100000000,
      quanlity: 2,
    },
    {
      id: '2',
      name: 'product 2',
      description: ' chu y',
      image: 'https://via.placeholder.com/200x150',
      price: 30000000000,
      quanlity: 3,
    },
  ];

  removeProduct(productId: string) {
    alert('xoa san pham co ten la' + productId);
    let index = this.products.findIndex((item) => item.id == productId);
    this.products.splice(index, 1);
  }
  confirm(productId: string) {
    if (confirm('Xác nhận xóa')) {
      this.removeProduct(productId);
    }
  }
}
