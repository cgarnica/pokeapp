import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import {CollectionService} from '../../services/collections.service';
import { Observable } from '../../../../../node_modules/rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';


import { AngularFireList } from '../../../../../node_modules/angularfire2/database';

@Component({
  selector: 'app-collection-pokemon',
  templateUrl: './collection-pokemon.component.html',
  styleUrls: ['./collection-pokemon.component.css']
})
export class CollectionPokemonComponent implements OnInit {

  pokemons: Observable<any[]>;
  id: string;
  @Input()  status: string;

  constructor(private route: ActivatedRoute, private collectionService:CollectionService, 
    private authFire: AngularFireAuth) { 
    this.pokemons = null;
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
    });
    this.authFire.authState
    .subscribe(
      user => {          
        this.pokemons =  this.collectionService.getPokemonsInCollection(this.id).snapshotChanges().pipe(
          map(changes => 
            changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
          ));
      
      }
    ); 
  };

  removeBook(title: string, key: string){
    
      this.collectionService.removePokemonFromCollection(this.id, key);
  };

}
