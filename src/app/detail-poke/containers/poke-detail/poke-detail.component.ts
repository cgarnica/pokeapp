import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { PokemonsService } from 'src/app/poke-main/services/pokemons.service';
import { environment } from 'src/environments/environment';
import { IPokeList } from 'src/app/poke-main/models/interfaces/poke-list';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit {
  
  url:string = environment.apiUrl;
  id: string;
  poke:any;
  pokeList: IPokeList;

  constructor(private router: ActivatedRoute, private pokemonService : PokemonsService) { }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {  
      return this.pokemonService.getPokemonByUrl(this.url+"pokemon/"+params.id).toPromise().then(
        p => {
          this.poke = p;
          this.id = params.id;    
        }
      );
    });

    let n = this.randomInt(0,200);
    this.pokemonService.listPagination(n, 4)
    .subscribe(
      list => {
        this.pokeList = list;
      }
    );
  }

  randomInt(min, max){
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
