import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // crud and other methods from url http://localhost:3000/api/auth
   url="http://localhost:3000/api";
  constructor(private http: HttpClient) { }
 
  login(user:any){
    console.log(user);
    // post data or return error
    return this.http.post(this.url+"/auth",user);
  }
  register(user:any){
    console.log(user);
    // post data or return error
    return this.http.post(this.url+"/user",user);
  }
  getUsers(){
    // get data or return error
    return this.http.get(this.url+"/user");
  }
  getUser(id:number){
    // get data or return error
    return this.http.get(this.url+"/user/"+id);
  }
  updateUser(id:number,user:any){
    console.log(user);
    // put data or return error
    return this.http.put(this.url+"/user/"+id,user);
  }
  deleteUser(id:number){
    // delete data or return error
    return this.http.delete(this.url+"/user/"+id);
  }
  

}
