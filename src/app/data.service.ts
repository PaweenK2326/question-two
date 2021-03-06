import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'https://api.publicapis.org/categories';

  constructor(private http: HttpClient) { }

  getData(): Observable<string[]>{
    return this.http.get<string[]>(this.dataUrl);
  }
}
