import { Component, OnInit } from '@angular/core';
import { PokemonsService } from "../../services/pokemons.service";
import { books } from "../../../books";
import { IPokeList } from '../../models/interfaces/poke-list';

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.css']
})
export class PokeListComponent implements OnInit {

  pokeList: IPokeList;
  constructor(private pokeService: PokemonsService) { }

  ngOnInit() {
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
