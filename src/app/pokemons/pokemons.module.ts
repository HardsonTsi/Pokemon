import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ListPokemonsComponent} from './list-pokemons/list-pokemons.component';
import {DetailPokemonComponent} from './detail-pokemon/detail-pokemon.component';
import {BorderCardDirective} from './border-card.directive';
import {PokemonTypeColorPipe} from './pokemon-type-color.pipe';
import {PokemonRoutingModule} from "./pokemons-routing.module";
import {PokemonsService} from "./pokemons.service";
import {PokemonFormComponent} from './edit-pokemon/pokemon-form.component';
import {FormsModule} from "@angular/forms";
import {EditPokemonComponent} from "./edit-pokemon/edit-pokemon.component";
import {PokemonSearchComponent} from "./search-pokemon/search-pokemon.component";
import {AuthentificationGuard} from "../authentification.guard";

@NgModule({
  imports: [
    CommonModule, FormsModule, PokemonRoutingModule
  ],
  declarations: [
    ListPokemonsComponent,
    DetailPokemonComponent,
    EditPokemonComponent,
    PokemonFormComponent,
    PokemonSearchComponent,
    BorderCardDirective,
    PokemonTypeColorPipe],
  providers: [PokemonsService, AuthentificationGuard]
})

export class PokemonsModule{

}
