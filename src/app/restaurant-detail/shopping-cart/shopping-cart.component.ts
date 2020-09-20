import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item.model';
import { CartItem } from './cart-item.model';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html'
})
export class ShoppingCartComponent implements OnInit {

  constructor(private ShoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  itens(): any[]{
    return this.ShoppingCartService.itens
  }

  total(): number {
    return this.ShoppingCartService.total()
  }

  clear(){
    return this.ShoppingCartService.clear()
  }

  removeItem(item: CartItem){
    return this.ShoppingCartService.removeItem(item)
  }

  addItem(item: MenuItem){
    return this.ShoppingCartService.addItem(item)
  }
}
