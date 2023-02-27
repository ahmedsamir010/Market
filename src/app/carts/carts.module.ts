import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './component/cart/cart.component';
import { SharedModule } from '../shared/services/shared.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    CartComponent,
    SharedModule
  ]
})
export class CartsModule { }
