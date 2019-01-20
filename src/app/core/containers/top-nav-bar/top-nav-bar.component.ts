import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, select } from "@ngrx/store";
import * as fromRoot from "../../../reducers";
import * as Layout from "../../actions/layout";
import { Observable } from "rxjs";

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {

  @Output() searchTop = new EventEmitter<string>();
  //@Output() stateAside = new EventEmitter<string>();

  _state: String;
  stateAside$:Observable<string> = this.store.pipe(select(fromRoot.getShowSideNav));

  constructor(private store: Store<fromRoot.State>) {  }

  ngOnInit() {
    this.stateAside$.subscribe(
      state => {
        this._state = state
      }
    );
  }

  search(data :string) {
    this.searchTop.emit(data);
  }

  close(){
    if(this._state == 'open'){
      this.store.dispatch(new Layout.CloseSideNav);
      //this._state = 'close';
      //this.stateAside.emit(this._state);
    }else {
      this.store.dispatch(new Layout.OpenSideNav);
      //this._state = 'open';
      //this.stateAside.emit(this._state);
    }
  }

  /*open() {
    if (this._state === 'close') {
      this.store.dispatch(new layout.OpenSideNav());
    } else {
      this.store.dispatch(new layout.CloseSideNav());
    }
  }*/

}
