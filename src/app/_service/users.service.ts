import { Injectable } from '@angular/core';
import { Users } from '../_models/users';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
usersArr:Users[]=[];
getUsers(){
return this.http.get<Users[]>("http://localhost:61777/orders/DisplayUsers");
}
  constructor(private http:HttpClient) { }
}
