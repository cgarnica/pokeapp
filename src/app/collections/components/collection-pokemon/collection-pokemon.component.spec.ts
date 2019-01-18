import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionPokemonComponent } from './collection-pokemon.component';

describe('CollectionPokemonComponent', () => {
  let component: CollectionPokemonComponent;
  let fixture: ComponentFixture<CollectionPokemonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionPokemonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
