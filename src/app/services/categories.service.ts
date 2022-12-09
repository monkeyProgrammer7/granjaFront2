import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

    private categories : Category[] =
    [
      {
          name: "Frutas",
          img: "./assets/images/productos/frutas.jpg",
      },
      {
          name: "Verduras",
          img: "./assets/images/productos/verduras.jpg",
      },
      {
          name: "Carnes",
          img: "./assets/images/productos/carnes.jpg",
      }
  ]

  public getCategories()
  {
    return this.categories;
  }

  public getLabElement(index:string)
  {
    return this.categories[index];
  }
}

export interface Category
{
    name: string;
    img: string;
}
