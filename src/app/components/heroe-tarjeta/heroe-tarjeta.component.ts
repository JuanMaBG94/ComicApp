import { Heroe } from './../../servicios/heroes.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

@Input()  heroe:any={};
@Input() index:number=0;

@Output() heroeSeleccionado: EventEmitter<number>=new EventEmitter<number>(); 

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  verHeroe(){
   // console.log(this.index);
    this.router.navigate(['/heroe', this.index]);
    //this.heroeSeleccionado.emit(this.index);
  }

}
