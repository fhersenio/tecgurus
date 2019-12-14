import { Component, OnInit } from '@angular/core';
import { Tarjeta } from '../../models/tarjeta';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  tarjeta: Tarjeta ={
    titulo: 'Titulo',
    cuerpo: 'Cuerpo',
    precio: 100.23409857202384578903
  }

  descuento: number;

  constructor() { }

  ngOnInit() {

    
  }

  obtenerDescuento(event: number) {
    this.descuento = event;
  }

  public abrirPagina(event: string) {
    window.location.href= event;
  }
}
