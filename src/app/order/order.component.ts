import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { Order, OrderItem } from './order.model';
import { OrderService } from './order.service';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Debito', value: 'DEB'},
    {label: 'Vale Refeição', value: 'REF'}
  ]

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {
  }

  itensValue(): number {
    return this.orderService.itensValue()
  }

  cartItens(): CartItem[]{
    return this.orderService.cartItens()
  }

  increaseQty(item: CartItem){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: CartItem){
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItem){
    this.orderService.remove(item)
  }

  checkOrder(order: Order){
    order.orderItens = this.cartItens()
      .map((item:CartItem) => new OrderItem(item.quantity, item.menuItem.id))

    this.orderService.checkOrder(order)
    .subscribe((orderId: string) => {
      this.router.navigate(['/order-summary'])
      console.log(`Compra concluida ${orderId}`)
      this.orderService.clear()
    })

    console.log(order)
  }
}
