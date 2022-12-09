import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCarComponent } from './shopping-car/shopping-car.component';

const routes: Routes = [
  {path:'login', component:LoginRegisterComponent},
  {path:'register', component:LoginRegisterComponent},
  {path:'car', component:ShoppingCarComponent},
  {path:'home', component: HomeComponent},
  {path:'categories', component:CategoriasComponent},
  {path:'products/:id', component:ProductsComponent},
  {path:'item/:id', component: ItemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GranjaRoutingModule { }
