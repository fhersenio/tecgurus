import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {
  productos: Producto[] = [
  
    {
      id: 'a',
      descripcion: 'muy bonito',
      nombre: 'coca',
      precio: 10
    },
    {
      id: 'b',
      descripcion: 'mas muy bonito',
      nombre: 'coca cola',
      precio: 100
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}
