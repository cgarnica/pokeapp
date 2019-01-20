import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { MessagesService } from '../../alerts/services/messages.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { Collection } from '../models/collection';



@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  user: firebase.User;

  favsRef: AngularFireList<any> = null;  
  favsRef1: AngularFireList<any> = null;

  constructor(private alertService: MessagesService, private authFire: AngularFireAuth,
    private rdb: AngularFireDatabase, ) { 
      authFire.authState.subscribe(
        user => {
          this.user = user;
          this.favsRef = rdb.list('collections/' + this.user.uid);
        }
      )
    }

  newCollection(collection:Collection){
      const promise = this.favsRef.push(collection);

      promise.then(
        _ => {
          //alert("Colección creada. ");
          this.alertService.message({msg: "Colección creada. ", type: 'success'});
        }
      );

      //promise.then(() => {
      //  alert("Colección creada. ");
        //this.alertService.message("Colección creada. ", "success");
    //  });
    }

  getListCollections(): AngularFireList<any[]>{
    return this.favsRef;
   
  }

  getPokemonsInCollection(key:string): AngularFireList<any[]>{
    this.favsRef1 = this.rdb.list<any[]>('collections/' + this.user.uid + "/" + key + "/pokemons");
    return this.favsRef1;
  }

  removeCollection(key: string){
    this.rdb.list<any[]>('collections/' + this.user.uid + "/" + key).remove()
  }

  removePokemonFromCollection(key:string, bookId:string){
    this.rdb.list<any[]>('collections/' + this.user.uid + "/" + key + "/pokemons/" + bookId).remove();
  }

  addPokemon(key:string, book: any){
    let favsRef1 = this.rdb.list('collections/' + this.user.uid + "/" + key + "/pokemons");
    const promise = favsRef1.push(book);
    promise.then(
      _ => {
        alert("Pokemon Agregado");
        //this.alertService.message({msg: "Pokemon Agregado", type: 'success'});
      }
    );
   // promise.then(() => {
      //alert("Pokemon agregado");
     // this.alertService.message("Pokemon agregado","success");
    //});

  }
}
