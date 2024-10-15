import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http:HttpClient) {
  }
  getData():Observable<any>{
    const url='https://api.kanye.rest';
    return this.http.get<any>(url);
  }
}
