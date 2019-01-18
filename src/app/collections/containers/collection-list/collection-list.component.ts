import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { CollectionService } from '../../services/collections.service';
import { ICollection } from '../../models/collection';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.css']
})
export class CollectionListComponent implements OnInit {

  listCollections: Observable<any[]>;
  @Input()  status: string;
  show:boolean;

  constructor(private route: ActivatedRoute, private collectionService:CollectionService,  private authFire: AngularFireAuth) { 
    this.listCollections = null;
    this.show=false;
  }

  ngOnInit() {
    this.authFire.authState
    .subscribe(
      user => {          
        this.listCollections =  this.collectionService.getListCollections().snapshotChanges().pipe(
          map(changes => 
            changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
          ));
        console.log(this.listCollections);
      }
    );   
  }

  removeCollection(collectionName: string, collectionKey: string){
      this.collectionService.removeCollection(collectionKey);
  }

  newCollection(event : ICollection) {
    if(event) {
      this.collectionService.newCollection(event);
    }
  }

  showCreate(){
    this.show= !this.show;

  }

}
