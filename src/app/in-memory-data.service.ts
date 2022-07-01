import {NgModule} from "@angular/core";
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {POKEMONS} from "./pokemons/constanteTableau-pokemons";


@NgModule({
  imports: [],
  declarations: [],
  providers: [],
  bootstrap: []
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let pokemons = POKEMONS;
    return {pokemons};
  }
}
