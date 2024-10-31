import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseAnime } from '../data/interfaces/response';
import { IndexedDbService } from './IndexedDB.service';
import { of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeApiService {
  private url = 'https://api.jikan.moe/v4/random/anime'

  constructor( private http : HttpClient, private IndexedDbService : IndexedDbService ) { 

  }
  public ObtainData( ){ 
    return this.http.get< ResponseAnime >( this.url ).pipe(
      tap(async ( error ) =>{
        console.error('no hay conexion, obteniendo la info de la base de datos', error);
        
        return await this.IndexedDbService.getLatestApiData();
       
      })
    );
  }

}
