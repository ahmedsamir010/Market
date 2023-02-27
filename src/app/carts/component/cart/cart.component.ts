import { Router } from '@angular/router';
import { CartsService } from './../../services/carts.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartProducts: any[] = [];
  totalPriceCart:number=0;
  successOrder:boolean=false
  productId:number=0;
  constructor(private _CartsService:CartsService,private _Router:Router){}
  ngOnInit(): void {
    this.getProductCart();
  }
  // To Get All Cart When Start
  getProductCart(): void {
    if ('cart' in localStorage)
    {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      // console.log(this.cartProducts);
    }
    this.getTotalCart();

  }
    // get Total Cart
    getTotalCart()
    {
      this.totalPriceCart=0;
      for(let i in this.cartProducts)
          this.totalPriceCart+=this.cartProducts[i].item.price * this.cartProducts[i].Quantity;
    }
    // add Quantity
    addQuantity(item:number){
      this.cartProducts[item].Quantity++;
      this.getTotalCart();
      localStorage.setItem('cart',JSON.stringify(this.cartProducts))
    }
    // minus Quantity
    minusQuantity(item:number){
      if(this.cartProducts[item].Quantity>1){
      this.cartProducts[item].Quantity--;
      this.getTotalCart();
      localStorage.setItem('cart',JSON.stringify(this.cartProducts))
      }
    }
    // Change Quantity in Input
    changeAmount(){
      this.getTotalCart();
      localStorage.setItem('cart',JSON.stringify(this.cartProducts))
    }
    // Delete Product
    deleteProduct()
    {
      // index=this.productId
      this.cartProducts.splice(this.productId,1)
      localStorage.setItem('cart',JSON.stringify(this.cartProducts))
      this.getProductCart();
    }
    // Passing The Correct Index on Loop To Function In Modal To Delete Item
    // Update productId Variable and delete From Function deleteProduct() 

      passingIndex(indexItem:number)
      {
          this.productId= indexItem;
      }

    // Check Carts
    clearCart()
    {
      this.cartProducts=[];
      localStorage.setItem('cart',JSON.stringify(this.cartProducts))
    }

    // addOrder
    addOrder()
    {
      let product=this.cartProducts.map(item=>{
      return  {productId:item.item.id,Quantity:item.Quantity}
      })
      let model={
        userId:1,
        date:new Date(),
        products:[product]
      }
       this._CartsService.cartOrder(model).subscribe(res=>{
        this.successOrder=true;
       })
    this._Router.navigate(['/order'])
    }


}
