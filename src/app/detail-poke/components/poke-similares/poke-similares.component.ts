import { Component, OnInit, Input } from '@angular/core';
import { PokemonsService } from 'src/app/poke-main/services/pokemons.service';
import { IPokeList } from 'src/app/poke-main/models/interfaces/poke-list';
import { Location } from '@angular/common';


@Component({
  selector: 'app-poke-similares',
  templateUrl: './poke-similares.component.html',
  styleUrls: ['./poke-similares.component.css']
})
export class PokeSimilaresComponent implements OnInit {


  _pokeResult: {name: string, url: string};
  _poke: any;

  @Input() 
  get poke() : {name: string, url: string}{
    return this._pokeResult;
  };

  set poke(result : {name: string, url: string}){
    this.pokeService.getPokemonByUrl(result.url)
    .subscribe(
      pokemon => {
        this._poke = pokemon;
      }
    )
  }


  constructor(private pokeService: PokemonsService, private location: Location) { }

  ngOnInit() {
  }

  load(): void {
    location.reload();
  }
}
