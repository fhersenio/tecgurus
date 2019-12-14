import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit {

  @Input() cuerpo: string;

  url: string="http://www.w3schools.com";

  @Output() onUrl: EventEmitter<string>= new EventEmitter<string>();

  constructor() { 
    console.log (this.cuerpo);
  }

  ngOnInit() {   
    console.log(this.cuerpo);
    this.cuerpo= this.cuerpo.toUpperCase();
  }
  public ir(){
    this.onUrl.emit(this.url);
  }
  ngOnDestroy() {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('Estoy destruyendo');
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log('cur', cur);
      console.log('prev', prev);

    }
  }
}
