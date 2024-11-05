import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseAnime } from '../data/interfaces/response';
import { AnimeApiData, IndexedDbService } from './IndexedDB.service';
import { catchError, of, switchMap, Observable, map, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeApiService {
  private url = 'https://api.jikan.moe/v4/random/anime'

  constructor( private http : HttpClient, private IndexedDbService : IndexedDbService ) { 

  }
  ObtainData(): Observable < ResponseAnime | AnimeApiData | undefined > {
    return this.http.get< ResponseAnime >( this.url ).pipe(
      map( ( data ) => data ),
      catchError( ( error ) => {
        console.error( ' No hay conexión, obteniendo la info de la base de datos ', error );
        return from( this.IndexedDbService.getLatestAnimeData() ).pipe(
          switchMap( ( latestAnimeData ) => of( latestAnimeData || undefined ) )
        );
      })
    );
  }
  

}
