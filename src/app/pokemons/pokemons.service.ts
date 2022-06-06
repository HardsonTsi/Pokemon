import {Injectable} from '@angular/core';

import {Pokemon} from './pokemon';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable()
export class PokemonsService {

  pokemonTypes: string[];
  private pokemonsUrl = 'api/pokemons';

  constructor(private http: HttpClient) {
  }

  /** GET pokemons */
  getPokemons(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
      tap(_ => this.log(`fetched pokemons`)),
      catchError(this.handleError('getPokemons', []))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };

    return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe(
      tap(_ => this.log(`updated pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>(`updated pokemon`))
    );
  }

  deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
    const url = `${this.pokemonsUrl}/${pokemon.id}`;
    const httpOptions = {
      headers: new HttpHeaders({'Content-type': 'application/json'})
    };
    return this.http.delete(url, httpOptions).pipe(
      tap(_ => this.log(`deleted pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>(`delete pokemon`))
    );

  }

  /** GET pokemon */
  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonsUrl}/${id}`;
    return this.http.get<Pokemon>(url).pipe(
      tap(_ => this.log(`fetched pokemon id = ${id}`)),
      catchError(this.handleError<Pokemon>(`getPokemon id = ${id}`))
    );
  }

  searchPokemons(term: string): Observable<Pokemon[]> {
    if (!term.trim()) {
      return of([]);
    }

    return this.http.get<Pokemon[]>(`${this.pokemonsUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found pokemons matching "${term}"`)),
      catchError(this.handleError<Pokemon[]>(`searchPokemons`, []))
    );
  }



  // Retourne la liste des types des Pokémons
  getPokemonTypes(): Array<string> {
    return [
      'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik',
      'Poison', 'Fée', 'Vol', 'Combat', 'Psy'
    ];
  }

  private log(log: string) {
    console.info(log);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation}
  failed: ${error.message}`);
      return of(result as T);
    };
  }
}
