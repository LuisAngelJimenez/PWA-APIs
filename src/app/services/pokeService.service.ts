import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Pokemon, ResponsePokemon } from '../data/interfaces/response';

@Injectable({
  providedIn: 'root',
})
export class PokeServiceService {
  private url = ' https://pokeapi.co/api/v2/pokemon/?limit=10 ';

  constructor( private http : HttpClient ) {

  }

  public getPokemon(): Observable < Pokemon[] > {
    return this.http.get< ResponsePokemon >( this.url ).pipe(
      switchMap(( response ) =>
        forkJoin(
          response.results.map(( Pokemon ) =>
            this.http.get< Pokemon >(`https://pokeapi.co/api/v2/pokemon/${ Pokemon.name }`)
          )
        )
      )
    );
  }
}
