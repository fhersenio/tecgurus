import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  @Input() precio: number;
  @Output() onDescuento: EventEmitter<number> = new EventEmitter<number>();



  constructor() { }

  ngOnInit() {

  }

  public aplicarDescuento() {
      this.precio = this.precio - 10;
      this.onDescuento.emit(this.precio);
  }

}
