import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseKanye } from '../data/interfaces/response';
import { IndexedDbService } from './IndexedDB.service';
import { of, tap, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private url = 'https://api.kanye.rest';

  constructor( private http : HttpClient , private IndexedDbService : IndexedDbService ) {}

  public getData() {
    return this.http.get< ResponseKanye > ( this.url ).pipe(
      tap( async ( data: ResponseKanye ) => {
        console.log( ' guardando la data en indexedDB ' );
        await this.IndexedDbService.saveApiData( { data } );

        
      }),
      catchError( async ( error ) => {
        console.error(' no hay conexion, obteniendo de la db ' , error );
        return await this.IndexedDbService.getLatestApiData();
      } )
    );
  }
}