import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeSimilaresComponent } from './poke-similares.component';

describe('PokeSimilaresComponent', () => {
  let component: PokeSimilaresComponent;
  let fixture: ComponentFixture<PokeSimilaresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeSimilaresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeSimilaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
