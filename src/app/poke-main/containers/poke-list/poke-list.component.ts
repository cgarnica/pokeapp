import { Component, OnInit } from '@angular/core';
import { PokemonsService } from "../../services/pokemons.service";
import { books } from "../../../books";
import { IPokeList } from '../../models/interfaces/poke-list';
import { FavoritesService } from '../../../favorites/services/favorites.service';
import { AngularFireAuth } from "@angular/fire/auth";
import { AlertMessagesComponent } from 'src/app/alerts/components/alert-messages/alert-messages.component';
import { SearchDataService } from 'src/app/services/search-data.service';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  pokeList: IPokeList;
  favoriteList: any[] = [];
  page: any;
  limit:any;

  constructor(private pokeService: PokemonsService, private favoritesServices: FavoritesService, private authFire: AngularFireAuth, private searchService: SearchDataService) { }

  ngOnInit() {
    this.searchService.currentMessage.subscribe(message => {
      if(message)
        alert(message)}
      );
    this.page = 0;
    this.limit = 15;
    //

    this.authFire.authState.subscribe(
      user => {
        if (user) {
          this.favoritesServices.listFavorites(user)
            .subscribe(
              list => {
                this.favoriteList = list;
               // console.log(this.bookList);
              }
            );
        }
      }
    );



    this.list();

  }

  addFavorite(book){
    this.pokeService.addFavorite(book);
  }

  
  list(){
    this.pokeService.listPagination(this.page*this.limit, this.limit)
    .subscribe(
      list => {
        this.pokeList = list;
      }
    );
  }

  next(){
    this.page = this.page+1;
    this.list();
  }

  previous(){
    this.page = this.page-1;
    if(this.page <= 0)
      this.page = 0;
     
    this.list();
  }

  isPageZero():boolean{
    return this.page <= 0;
  }



}
