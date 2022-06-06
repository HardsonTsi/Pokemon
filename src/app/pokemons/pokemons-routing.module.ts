import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ListPokemonsComponent} from './list-pokemons/list-pokemons.component';
import {DetailPokemonComponent} from './detail-pokemon/detail-pokemon.component';
import {EditPokemonComponent} from "./edit-pokemon/edit-pokemon.component";
import {AuthentificationGuard} from "../authentification.guard";

const pokemonsRoutes: Routes = [
  {
    path: 'pokemon', canActivate: [AuthentificationGuard],
    children: [
      {path: 'all', component: ListPokemonsComponent},
      {path: 'edit/:id', component: EditPokemonComponent},
      {path: ':id', component: DetailPokemonComponent}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(pokemonsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PokemonRoutingModule {
}
