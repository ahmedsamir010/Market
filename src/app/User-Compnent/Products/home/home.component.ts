import { Component, OnInit } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { ProductService } from 'src/app/User-Compnent/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

constructor(private _ProductService:ProductService){}
allProducts :any[]=[];
allCategories:any[]=[];
cartProduct:any[]=[];
loading:boolean=false;
indexProduct:number=0;
ngOnInit(): void {
this.getProducts();
this.getCategory();
  }

  //========== Get Products ========
  getProducts()
  {
    this.loading=true;
 this._ProductService.getAllProducts().subscribe(
  (response)=>
  {
    this.loading=false

    this.allProducts=response;

  },

  error=>{
    this.loading=false
    alert("We apologize for you . There is currently an issue with the API, and efforts are underway to resolve it")
  }



)


  }

  // ======== Get Category ========
  getCategory()
  {
    this.loading=true
 this._ProductService.getAllCategories().subscribe(
  (response)=>
  {
    // console.log(response);
    this.loading=false
    this.allCategories=response;
  },

  error=>{
    this.loading=false
    alert("We apologize for you . There is currently an issue with the API, and efforts are underway to resolve it")
  }



)


  }

    // ======== Filter Category ========

  FilterCategory(event:any){
    let value=event.target.value;
    (value =='All')?this.getProducts():this.getProductsCategory(value);
  }

  // ======== Get Product By Category ========

  getProductsCategory(category:string){
    this.loading=true
this._ProductService.getProductsByCategory(category).subscribe(
  response=>{
    this.loading=false
this.allProducts=response
  }
)
  }

    // ======== Add To Cart ========

  addToCart(event:any){
    // console.log(event);

  if("cart" in localStorage)
  {
    this.cartProduct=JSON.parse(localStorage.getItem("cart")!);

    this.checkProduct(event);
    if(this.checkProduct(event) == true)
    {
      this.cartProduct.splice(this.indexProduct,1,event)
      localStorage.setItem('cart',JSON.stringify(this.cartProduct))
      console.log(this.cartProduct);
    }
    else
    {
      this.cartProduct.push(event)
      localStorage.setItem('cart',JSON.stringify(this.cartProduct))
      console.log(this.cartProduct);

    }

  }

  else
  {
    this.cartProduct.push(event)
    localStorage.setItem('cart',JSON.stringify(this.cartProduct))

  }

  }

  //======= Update Cart =======
  checkProduct(e:any):any
  {

    for(let i=0;i<this.cartProduct.length;i++)
    {
      if(this.cartProduct[i].item.id==e.item.id)
      {
        this.indexProduct=i;
        return true;
      }
    }
  }






}
