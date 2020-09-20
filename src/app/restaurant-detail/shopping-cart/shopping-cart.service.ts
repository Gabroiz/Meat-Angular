import { MenuItem } from "../menu-item/menu-item.model"
import { CartItem } from "./cart-item.model"

export class ShoppingCartService {
    itens: CartItem[] = []

    clear(){
        this.itens = []
    }

    total(): number{
        return this.itens
            .map(item => item.value())
            .reduce((prev, value) => prev+value, 0)
    }

    addItem(item:MenuItem){
        let foundItem = this.itens.find ((mItem => mItem.menuItem.id === item.id))
        if(foundItem){
            foundItem.quantity += 1
        }else{
            this.itens.push(new CartItem(item))
        }
    }
    
    removeItem(item:CartItem){
        this.itens.splice(this.itens.indexOf(item), 1)
    }
}