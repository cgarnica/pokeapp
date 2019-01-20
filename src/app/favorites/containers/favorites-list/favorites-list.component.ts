import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { PokemonsService } from '../../../poke-main/services/pokemons.service';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.css']
})
export class FavoritesListComponent implements OnInit {

  pokemonList: any[] = [];

  constructor(private authFire: AngularFireAuth, private favoritesService: FavoritesService, private pokeService: PokemonsService) { }

  ngOnInit() {
    this.authFire.authState.subscribe(
      user => {
        if (user) {
          this.favoritesService.listFavorites(user)
            .subscribe(
              list => {
                this.pokemonList = list;
                //console.log(this.bookList);
              }
            );
        }
      }
    );
  }

  removeFavorite(poke){
    //console.log(poke);
    this.pokeService.removeFavorite(poke);
  }

}
