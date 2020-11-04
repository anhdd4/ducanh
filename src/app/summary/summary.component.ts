import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
})
export class SummaryComponent {
  @Input() products: Product[];
 
  getSubTotal(){
    debugger;
    let total = 0;
    for(let i=0; i<this.products.length; i++){
      total += this.products[i].price * this.products[i].quanlity;
    }
    return total;
  }
  
}


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
