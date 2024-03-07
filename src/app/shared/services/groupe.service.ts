import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupeService {
  url = '/api';

  constructor(private http: HttpClient) { }
  
  addgroupe(groupe: any) {
    console.log(groupe);
    // Post data or return error
    return this.http.post(`${this.url}/groupe`, groupe);
  }

  getGroupes() {
    // Get data or return error
    return this.http.get(`${this.url}/groupe`);
  }
  
  deleteGroupe(id: number) {
    // Delete data or return error
    return this.http.delete(`${this.url}/groupe/${id}`);
  }
}
