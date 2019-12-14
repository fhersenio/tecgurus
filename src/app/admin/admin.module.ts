import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { UsuariosComponent } from './usuarios/usuarios.component';



@NgModule({
  declarations: [UsuariosComponent],
  exports: [UsuariosComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot()
  ]
})
export class AdminModule { }
