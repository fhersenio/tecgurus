import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { EncabezadoComponent } from './tarjeta/encabezado/encabezado.component';
import { CuerpoComponent } from './tarjeta/cuerpo/cuerpo.component';
import { PieComponent } from './tarjeta/pie/pie.component';
import { ListaComponent } from './lista/lista.component';
import { EstiloComponent } from './estilo/estilo.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ConvertirPipe } from './pipes/convertir.pipe';




@NgModule({
  declarations: [TarjetaComponent, EncabezadoComponent, CuerpoComponent, PieComponent, ListaComponent, EstiloComponent, SpinnerComponent, ConvertirPipe],
  exports: [TarjetaComponent, ListaComponent, EstiloComponent, SpinnerComponent],
  imports: [
    CommonModule
  ]
})
export class ProductosModule { }
