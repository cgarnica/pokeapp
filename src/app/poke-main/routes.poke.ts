import { Routes } from "@angular/router";
import { PokeListComponent } from "./containers/poke-list/poke-list.component";
import { PokeDetailComponent } from "../detail-poke/containers/poke-detail/poke-detail.component";

export const routes: Routes = [
    {
        path: 'list',
        component: PokeListComponent
    },
    {
        path: 'detail-poke/:id',
        component: PokeDetailComponent
    },
    {
        path: '', redirectTo: 'list', pathMatch: 'full'
    }
];