import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  
    modalRef: BsModalRef;
    constructor(private modalService: BsModalService) {}
   
    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
    }
  

}
