import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import "rxjs/add/operator/map"
import { Observable } from "rxjs";
import { Order } from "./order.model";
import { OrderItem } from "./order.model";
import { MEAT_API } from "app/app.api";

@Injectable()
export class OrderService {
   
    constructor(private shoppingCartService: ShoppingCartService, private http: Http){}

    itensValue(): number {
        return this.shoppingCartService.total()
    }

    cartItens(): CartItem[]{
        return this.shoppingCartService.itens
    }

    increaseQty(item: CartItem) {
        return this.shoppingCartService.increaseQty(item)
    }

    decreaseQty(item: CartItem) {
        return this.shoppingCartService.decreaseQty(item)
    }

    remove(item: CartItem) {
        return this.shoppingCartService.removeItem(item)
    }

    clear(){
        this.shoppingCartService.clear()
    }

    checkOrder(order: Order): Observable<string>{
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        return this.http.post(`${MEAT_API}/orders`,
                              JSON.stringify(order),
                              new RequestOptions({headers: headers}))
                .map(response => response.json())
                .map(order => order.id)
    }
}