import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Observable } from 'rxjs';
import { ICollection } from 'src/app/collections/models/collection';
import { CollectionService } from 'src/app/collections/services/collections.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';
import { PokemonsService } from 'src/app/poke-main/services/pokemons.service';

@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.css'],
  animations: [
    trigger('popupAnimation', [
      state('closed', style({
        height: '0px',
        display: 'none'
      })),
      state('opened', style({
        height: '200px',
      })),
      transition('closed => opened', animate('90ms')),
      transition('opened => closed', animate('90ms'))
    ])
  ]
})
export class PokeInfoComponent implements OnInit {

  @Input()
  id:string;
  @Input()
  get poke():any {
    return this._poke;
  } 
  set poke(data: any) {
    this._poke = data;
    
      this.pokeService.getPokemonByUrl(this.poke.species.url).subscribe(
        p => {
         this.description = p.flavor_text_entries[3].flavor_text;
        }
      );
    
  }
 
  _poke:any;

  description:string;


  listCollections: Observable<any[]>;
  collectionSelected:ICollection;
  state:string;
  popupState:string;


  constructor(private collectionService:CollectionService, private authFire: AngularFireAuth, private pokeService: PokemonsService) {
    this.listCollections = null;
    this.collectionSelected = null;
    this.state = 'open';
    this.popupState = 'closed';
   }

  ngOnInit() {


    this.authFire.authState
    .subscribe(
      user => {          
        this.listCollections =  this.collectionService.getListCollections().snapshotChanges().pipe(
          map(changes => 
            changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
          ));
      }
    ); 

  
    


   



  }

  addToCollection(event:any){

    this.collectionService.addPokemon(event.target.value, this.poke);
  }

  onNavImageClick(){
    if(this.popupState == 'closed')
      this.popupState = 'opened'
    else
      this.popupState = 'closed'
  }

}
