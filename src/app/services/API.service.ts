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
    return this.http.get< ResponseKanye >( this.url ).pipe(
      tap(async ( data : ResponseKanye ) => {
        console.log( ' Guardando la data en IndexedDB ');
        await this.IndexedDbService.saveApiData( { data } );
      }),
      catchError(async ( error ) => {
        console.error( ' No hay conexión, obteniendo de la db ', error );
        const latestData = await this.IndexedDbService.getLatestApiData();
        if ( latestData && latestData.data ) {
          console.log( " Frase de Kanye desde IndexedDB: " , latestData.data.quote );
          return latestData.data;
        } else {
          console.log(" No hay datos en IndexedDB. ");
          return undefined;
        }
      })
    );
  }
  
}