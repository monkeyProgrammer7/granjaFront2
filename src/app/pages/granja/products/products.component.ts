import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../../models/product.model';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'ngx-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  items: Product[]=[];

constructor(private activatedRoute:ActivatedRoute,private _especificCategoriesServices: ProductService, private router:Router) {
this.activatedRoute.params.subscribe(params=>{

  this.items=this._especificCategoriesServices.pedirCategoria(params['id']);
});
console.log(this.items);
}

ngOnInit(): void {

}

verItem(index:number){
this.router.navigate(['/pages/granja/item',index]);
}
}
