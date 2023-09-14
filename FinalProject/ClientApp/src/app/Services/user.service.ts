import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { User } from '../Models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  getUserById(id:number): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}api/User/${id}`);
  }

  addUser(u: User): Observable<User>{
    return this.http.post<User>(`${this.baseUrl}api/User`, u);
  }
}