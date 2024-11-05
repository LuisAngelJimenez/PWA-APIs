import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { ResponseKanye } from '../data/interfaces/response';

export interface ApiData {
  id?: number ;
  data: ResponseKanye ;
}

export interface AnimeApiData {
  id?: number;
  title: string;
  imageUrl: string;
}

export class AppDB extends Dexie {
  apiData! : Table< ApiData >;
  animeData! : Table< AnimeApiData >; 

  constructor() {
    super( ' AppDatabase ' );
    this.version(1).stores({
      apiData : ' ++id, data ',
      animeData : ' ++id, title, imageUrl ',  
    });
  }
}

@Injectable({
  providedIn: 'root',
})
export class IndexedDbService {
  private db : AppDB ;

  constructor() {
    this.db = new AppDB();
  }

  async saveApiData( apiData : ApiData ) : Promise < number > {
    return await this.db.apiData.add( apiData );
  }

  async getLatestApiData() : Promise< ApiData | undefined > {
    const allData = await this.db.apiData.toArray();
    return allData.length > 0 ? allData[allData.length - 1] : undefined;
  }

  async saveAnimeData( animeData: AnimeApiData ) : Promise < number > {
    return await this.db.animeData.add( animeData );
  }

  async getLatestAnimeData() : Promise < AnimeApiData | undefined > {
    const allData = await this.db.animeData.toArray();
    return allData.length > 0 ? allData[ allData.length - 1 ] : undefined;
  }
}
