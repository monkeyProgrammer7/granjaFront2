import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShopCarService } from '../../../services/shop-car.service';

@Component({
  selector: 'ngx-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.scss']
})
export class ShoppingCarComponent implements OnInit {

  products : any[]=[];
  cantidad = 1;
  @Input() item : any;
  constructor(private _shoppingCarService: ShopCarService,
    private router : Router) { }

  ngOnInit(): void {
    this.products = this._shoppingCarService.getProducts();

  }
  isEmpty(object : any){
    if (object.length===0) {
      return true;
    } else {
      return false;
    }
  }

  reducirCantidad(){
    if(this.cantidad>1)
    this.cantidad--;

  }
  aumentarCantidad(){
    this.cantidad++;
  }
  descartarProducto(index : number){
    this._shoppingCarService.remove(index);
  }

}
