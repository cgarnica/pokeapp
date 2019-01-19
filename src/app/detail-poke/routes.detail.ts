import { Routes } from "@angular/router";
import { PokeDetailComponent } from "./containers/poke-detail/poke-detail.component";

export const routes: Routes = [
    {
        path: 'list',
        component: PokeDetailComponent
    },{
        path: 'detail-poke/:id',
        component: PokeDetailComponent
    },
    {
        path: '', redirectTo: 'list', pathMatch: 'full'
    }
];