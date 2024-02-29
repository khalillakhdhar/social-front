import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Use proxy for development
  url = '/api';

  constructor(private http: HttpClient) { }
 
  login(user: any) {
    console.log(user);
    // Post data or return error
    return this.http.post(`${this.url}/auth`, user);
  }

  register(user: any) {
    console.log(user);
    // Post data or return error
    return this.http.post(`${this.url}/user`, user);
  }

  getUsers() {
    // Get data or return error
    return this.http.get(`${this.url}/user`);
  }

  getUser(id: number) {
    // Get data or return error
    return this.http.get(`${this.url}/user/${id}`);
  }

  updateUser(id: number, user: any) {
    console.log(user);
    // Put data or return error
    return this.http.put(`${this.url}/user/${id}`, user);
  }

  deleteUser(id: number) {
    // Delete data or return error
    return this.http.delete(`${this.url}/user/${id}`);
  }
}
