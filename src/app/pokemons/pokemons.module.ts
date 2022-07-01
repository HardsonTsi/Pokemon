import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {BorderCardDirective} from './border-card.directive';
import {DetailPokemonComponent} from './detail-pokemon/detail-pokemon.component';
import {EditPokemonComponent} from "./edit-pokemon/edit-pokemon.component";
import {PokemonFormComponent} from './edit-pokemon/pokemon-form.component';

import {ListPokemonsComponent} from './list-pokemons/list-pokemons.component';
import {PokemonTypeColorPipe} from './pokemon-type-color.pipe';
import {PokemonRoutingModule} from "./pokemons-routing.module";
import {PokemonsService} from "./pokemons.service";
import {PokemonSearchComponent} from "./search-pokemon/search-pokemon.component";

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
  providers: [PokemonsService]
})

export class PokemonsModule {

}
