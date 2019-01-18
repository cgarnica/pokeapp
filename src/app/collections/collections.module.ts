import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CollectionListComponent } from './containers/collection-list/collection-list.component';
import { routes } from "./routes.collections";
import { CollectionPokemonComponent } from './components/collection-pokemon/collection-pokemon.component';
import { CollectionFormComponent } from './components/collection-form/collection-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [CollectionListComponent, CollectionPokemonComponent, CollectionFormComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CollectionsModule { }
