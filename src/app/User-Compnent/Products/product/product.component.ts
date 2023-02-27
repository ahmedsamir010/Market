import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  @Input() product: any={};
  @Output() item=new EventEmitter()
  Quantity:number[]=[];
  add:boolean=true;
amount: number=0;
  constructor(){}


ngOnInit(): void{}

addToCart(){
  if(this.amount>=1 && this.amount<=50){
  this.item.emit({item:this.product,Quantity:this.amount})
}else{
  alert("Please Enter Number Betwwen 1 and 50 ")
}
}

changeAmount(e: any) {
  this.amount = e.target.value;
}


}
