import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeDetailComponent } from './containers/poke-detail/poke-detail.component';
import { PokeInfoComponent } from './components/poke-info/poke-info.component';
import { PokeSimilaresComponent } from './components/poke-similares/poke-similares.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { routes } from './routes.detail';

@NgModule({
  declarations: [PokeDetailComponent, PokeInfoComponent, PokeSimilaresComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DetailPokeModule { }
