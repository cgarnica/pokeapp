import { Component, OnInit } from '@angular/core';
import { PokemonsService } from "../../services/pokemons.service";
import { books } from "../../../books";
import { IPokeList } from '../../models/interfaces/poke-list';
import { FavoritesService } from '../../../favorites/services/favorites.service';
import { AngularFireAuth } from "@angular/fire/auth";
import { AlertMessagesComponent } from 'src/app/alerts/components/alert-messages/alert-messages.component';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  pokeList: IPokeList;
  bookList: any[] = [];

  constructor(private pokeService: PokemonsService, private favoritesServices: FavoritesService, private authFire: AngularFireAuth) { }

  ngOnInit() {
    
    //

    this.authFire.authState.subscribe(
      user => {
        if (user) {
          this.favoritesServices.listFavorites(user)
            .subscribe(
              list => {
                this.bookList = list;
                console.log(this.bookList);
              }
            );
        }
      }
    );
    console.log("bien");
    console.log(this.bookList);


    this.pokeService.list()
    .subscribe(
      list => {
        this.pokeList = list;
      }
    );

  }

  addFavorite(book){
    this.pokeService.addFavorite(book);
  }


}
