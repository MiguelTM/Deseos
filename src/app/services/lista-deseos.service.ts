import { Injectable } from '@angular/core';
import { Lista } from '../clases/Listas';
@Injectable()
export class ListaDeseosService {

  listas: Lista[] = [];

  constructor() {

    let lista1 = new Lista("super");
    let lista2 = new Lista("juegos");
    let lista3 = new Lista("universidad");

    this.listas.push(lista1);
    this.listas.push(lista2);
    this.listas.push(lista3);

    console.log("Servicio inicializado!!");


  }
}
