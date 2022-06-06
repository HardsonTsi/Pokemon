import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Pokemon} from '../pokemon';
import {PokemonsService} from "../pokemons.service";
import {Observable} from "rxjs";

@Component({
  selector: 'detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
})

export class DetailPokemonComponent implements OnInit {

  pokemon: Pokemon = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonsService: PokemonsService) {
  }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.pokemonsService.getPokemon(id)
      .subscribe(pokemon => this.pokemon = pokemon);
  }

  goEdit(pokemon: Pokemon){
    let link = ['/pokemon/edit', this.pokemon.id];
    this.router.navigate(link);
  }

  deletePokemon(pokemon: Pokemon): void{
    this.pokemonsService.deletePokemon(pokemon)
      .subscribe(() => this.goBack());
  }

  goBack() {
    this.router.navigate(['/pokemon/all']);
  }

}
