import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-poke-info',
  templateUrl: './poke-info.component.html',
  styleUrls: ['./poke-info.component.css']
})
export class PokeInfoComponent implements OnInit {

  @Input()
  id:string;

  constructor() { }

  ngOnInit() {
  }

}
