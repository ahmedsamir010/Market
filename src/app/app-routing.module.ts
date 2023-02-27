import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { CartComponent } from './carts/component/cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsProductComponent } from './User-Compnent/Products/details-product/details-product.component';
import { HomeComponent } from './User-Compnent/Products/home/home.component';
import { LoginComponent } from './Auth-Service/login/login.component';
import { RegisterComponent } from './Auth-Service/register/register.component';
import { AuthCardGuard } from './carts/guard/auth-card.guard';


const routes: Routes =
[
  {path:"",redirectTo:'home',pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"home",component:HomeComponent},
  {path:"details/:id",component:DetailsProductComponent},
  {path:"cart",canActivate:[AuthCardGuard], component:CartComponent},
  {path:"order",component:OrderConfirmComponent},

  {path:"**",component:NotFoundComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
