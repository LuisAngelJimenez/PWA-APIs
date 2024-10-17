import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseKanye } from '../data/interfaces/response';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  private url = 'https://api.kanye.rest';

  constructor(private http:HttpClient) {}

  public getData() {
    return this.http.get<ResponseKanye>(this.url);
  }
}