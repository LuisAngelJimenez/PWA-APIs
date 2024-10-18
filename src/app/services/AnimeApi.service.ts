import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseAnime } from '../data/interfaces/response';

@Injectable({
  providedIn: 'root'
})
export class AnimeApiService {
  private url = 'https://api.jikan.moe/v4/random/anime'

  constructor( private http : HttpClient ) { 

  }
  public ObtainData( ){ 
    return this.http.get< ResponseAnime >( this.url );
  }

}
