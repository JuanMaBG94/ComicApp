import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';
import { BuscadorComponent } from '../buscador/buscador.component';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  
})
export class HeroeComponent implements OnInit {

public heroe:any={};

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService) {
    this.activatedRoute.params.subscribe(params=>{
      this.heroe=this._heroesService.getHeroe(params['id']);
      console.log(this.heroe);
    })
   }

  ngOnInit(): void {
  }

}
