import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponsePokemon } from '../data/interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class PokeServiceService {
  private url = 'https://pokeapi.co/api/v2/pokemon/?limit=10'

  constructor( private http : HttpClient ) {
  }

  public getPokemon() {
    return this.http.get< ResponsePokemon > ( this.url ); 
  }
  
}
