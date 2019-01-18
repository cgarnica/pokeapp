import { Routes } from "@angular/router";
import { CollectionListComponent } from "./containers/collection-list/collection-list.component";
import { CollectionPokemonComponent } from "./components/collection-pokemon/collection-pokemon.component";

export const routes:Routes = [
    {
        path: 'list',
        component: CollectionListComponent
    },
    {
        path: 'collectionBooks/:id',
        component: CollectionPokemonComponent
    },
    {
        path: '', redirectTo: 'list', pathMatch: 'full'
    }
];