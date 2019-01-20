import { Component, OnInit, Input } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {
  
  _pokeResult: {name: string, url: string};
  _poke: any;
  _pokeFavorites:any[];

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



  @Input() 
  get pokeFavorites() : any[]{
    return this._pokeFavorites;
  };

  set pokeFavorites(favo:any[]){

    this._pokeFavorites = favo;
  };


  addFavorite(book){
  
    this.pokeService.addFavorite(book);
  }

  isFavorite():boolean{
    for (let entry of this._pokeFavorites) {
 
  
     if(entry && this._poke && entry.id == this._poke.id){
       return true;
     }
    }
    return false;
  }

  
  constructor(private pokeService: PokemonsService) { }

  ngOnInit() {
  }

}
