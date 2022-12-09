import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  items: Product[]=[];
  constructor() {
    console.log();

  }
  pedirFrutas(){

    const frutas : Product[]=[];
    const tipoFrutas: string[]= ['manzana', 'naranja', 'banano'];
    for (let index = 0; index < 2; index++) {
      tipoFrutas.forEach((fruta)=>{
        frutas.push({  name: fruta,
        image_url: `./assets/images/productos/${fruta}.jpg`,
        quantity: 0,
        unity: 0,
        category: 'frutas',
        id_farm: index,
      price: 5})
      })
    }
   return frutas;
  }
  pedirVerduras(){
    const verduras : Product[]=[];
    const tipoVerdura: string[]= ['cebolla', 'cilantro', 'zanahoria'];
    for (let index = 0; index < 2; index++) {
      tipoVerdura.forEach((verdura)=>{
        verduras.push({  name: verdura,
      image_url: `./assets/images/productos/${verdura}.jpg`,
      quantity: 0,
      unity: 0,
      category: 'verduras',
      id_farm: index,
      price: 5})

      })

    }
    return verduras;
  }
  pedirCarnes(){
    const carnes : Product[]=[];
    const tipoCarne: string[]= ['cerdo', 'res', 'pollo'];
    tipoCarne.forEach((carne)=>{
      for (let index = 0; index < 2; index++) {
        carnes.push({  name: carne,
        image_url: `./assets/images/productos/${carne}.jpg`,
        quantity: 0,
        unity: 0,
        category: 'carnes',
        id_farm: index,
        price: 5})

      }
    })

    return carnes;
  }

  pedirCategoria(index){
    console.log(index, "indice");

    switch(index) {

      case '0':
        console.log("aca");
        this.items=this.pedirFrutas();
         break;

      case '1':
         this.items=this.pedirVerduras();
         break;
         case '2':
           this.items=this.pedirCarnes();
           break;

      default:
       console.log ("entre");
       break;

   }
   return this.items;
}
pedirItem(i){
  return this.items[i];
}
}
