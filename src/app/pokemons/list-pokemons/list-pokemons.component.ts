import {Component, OnInit} from '@angular/core';

import {Pokemon} from "../pokemon";
import {Router} from "@angular/router";
import {PokemonsService} from "../pokemons.service";

@Component({
  selector: 'list-pokemons',
  templateUrl: './list-pokemons.component.html'
})

export class ListPokemonsComponent implements OnInit {

  pokemons: Pokemon[] = null;

  constructor(
    private router: Router,
    private pokemonsService: PokemonsService) {
  }

  ngOnInit() {
    this.pokemonsService.getPokemons()
      .subscribe(pokemons => this.pokemons = pokemons)
  }

  selectPokemon(pokemon: Pokemon) {
    let link = ['pokemon/', pokemon.id];
    this.router.navigate(link);
  }

}

