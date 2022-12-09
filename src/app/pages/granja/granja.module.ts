import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GranjaRoutingModule } from './granja-routing.module';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ShoppingCarComponent } from './shopping-car/shopping-car.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ItemComponent } from './item/item.component';


@NgModule({
  declarations: [
    LoginRegisterComponent,
    ShoppingCarComponent,
    CategoriasComponent,
    HomeComponent,
    ProductsComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    GranjaRoutingModule
  ]
})
export class GranjaModule { }
