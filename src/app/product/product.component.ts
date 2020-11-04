import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  @Input() products: Product[];

  
  // change(){
  //   this.calculatorAndEmiter();
  // }
  // calculatorAndEmiter(){
  //   let sum = 0;
  //   let totalPrice = 0;

  //   for (const item of this.products) {
  //     sum += item.quanlity;
  //     totalPrice += item.quanlity * item.price;
  //   }

  // }
  removeProduct(productId: String) {
    alert('Xóa sản phẩm có id là ' + productId);
    const i = this.products.findIndex(product => product.id === productId)
    this.products.splice(i, 1);
  }
  confirm(productId: String){
    if(confirm("Xác nhận xóa")){
      this.removeProduct(productId);
    }
  }
}


