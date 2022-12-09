import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService, Category } from '../../../services/categories.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  categories : Category[] = [];

  constructor(private _categoriesService: CategoriesService,
              private router:Router) { }

  ngOnInit(): void {
    this.categories = this._categoriesService.getCategories();
    console.log(this.categories);
  }

  verProductos(index:number)
  {
    this.router.navigate(['/pages/granja/products',index]);
  }

}
