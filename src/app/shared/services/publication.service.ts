import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publication } from '../interfaces/publication';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
url=http://localhost:3000/api/publication;
  constructor(private http:HttpClient) { }
  getPublications():Observable<Publication[]>
  {
    return this.http.get<Publication[]>(this.url);
  }
  getPublication(id:number):Observable<Publication>
  {
    return this.http.get<Publication>(this.url+"/"+id);
  }
  addPublication(pub:Publication):Observable<Publication>
  {
    return this.http.post<Publication>(this.url,pub);
  }
}
