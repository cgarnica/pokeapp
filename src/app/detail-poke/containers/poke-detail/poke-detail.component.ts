import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit {

  id: string;
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((params: Params) => {
      this.id = params.id;
    });
  }

}
