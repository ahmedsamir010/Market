import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss']
})
export class DetailsProductComponent implements OnInit{
  details:any=[];
  loading:boolean=false;
constructor(private _ActivatedRoute:ActivatedRoute,private _ProductService:ProductService){}


ngOnInit(): void {
  let {id}=this._ActivatedRoute.snapshot.params
  this.getDetailProduct(id)
}
getDetailProduct(id:string)
{
  this.loading=true
  this._ProductService.getDetailsProduct(id).subscribe({
    next:(response)=>
    {
      this.loading=false
      this.details=response;
    }
  })
}
}
