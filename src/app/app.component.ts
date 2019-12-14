import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tecgurus';
  id:string='externo';
  mostrar: boolean=false;


  public abrir(identificador: string){
    if(identificador == 'spinner') {
      setTimeout(() => {
        this.mostrar=true;
      }, 3000);
    }
    this.id = identificador;
  }
}
