import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { ShopCarService } from '../../../services/shop-car.service';

@Component({
  selector: 'ngx-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  item:any={};
  products: any[];

constructor(private activatedRoute:ActivatedRoute,private _especificCategoriesServices: ProductService,
private _shoppingCarService: ShopCarService) {

this.activatedRoute.params.subscribe(params=>{

  this.item=this._especificCategoriesServices.pedirItem(params['id']);
});

}

ngOnInit(): void {
this.products=this._shoppingCarService.getProducts();
}

agregarItem(item:any){
if (this.products.length==0) {
  this._shoppingCarService.add(item);
        console.log(this.products.length+"");
} else {
  for (const producto in this.products) {
    if(JSON.stringify(item) === JSON.stringify(producto)){

      return;
    }

    else{

      this._shoppingCarService.add(item);
      console.log("producto agregado");
      return;
    }

}
}



}

}
