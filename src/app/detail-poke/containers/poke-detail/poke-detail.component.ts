import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { PokemonsService } from 'src/app/poke-main/services/pokemons.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit {
  
  url:string = environment.apiUrl;
  id: string;
  poke:any;
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
  }

}
