import { DetailsProductComponent } from './User-Compnent/Products/details-product/details-product.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './Auth-Service/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './User-Compnent/Products/product/product.component';
import { RegisterComponent } from './Auth-Service/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './User-Compnent/Products/home/home.component';

// import From Angular Matrial
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
// import modules
import { SharedModule } from './shared/services/shared.module';

import { CartsModule } from './carts/carts.module';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { SpinnerComponent } from './User-Compnent/spinner/spinner.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    NotFoundComponent,
    DetailsProductComponent,
    HomeComponent,
    ProductComponent,
    RegisterComponent,
    OrderConfirmComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    SharedModule,
    CartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
