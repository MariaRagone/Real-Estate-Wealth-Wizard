import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { User } from '../Models/user';
import { Observable } from 'rxjs';
import { SocialUser } from '@abacritt/angularx-social-login';

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

  addGoogleUser(u: User): Observable<User>{
    return this.http.post<User>(`${this.baseUrl}api/User/initial` , u);
  }

  updateUser(u: User): Observable<User>{
    return this.http.patch<User>(`${this.baseUrl}api/User`, u);
  }

  getByGoogleId(googleId:string): Observable<User>{
    return this.http.get<User>(`${this.baseUrl}api/User/googleId/${googleId}`)
  }
}

