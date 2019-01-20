import { Routes } from "@angular/router";
import { PokeDetailComponent } from "./containers/poke-detail/poke-detail.component";

export const routes: Routes = [
   {
        path: 'detail-poke/:id',
        component: PokeDetailComponent
    },
    {
        path: '', redirectTo: 'list', pathMatch: 'full'
    }
];