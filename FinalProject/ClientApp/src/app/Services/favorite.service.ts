import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Favorite } from '../Models/favorite';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private http:HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  GetFavorites(googleId:string):Observable<Favorite[]>{
    return this.http.get<Favorite[]>(`${this.baseUrl}api/Favorite/${googleId}`)
  }

  AddFavorite(newFavorite:Favorite):Observable<Favorite>{
    return this.http.post<Favorite>(`${this.baseUrl}api/Favorite`, newFavorite);
  }

  DeleteFavorite(id:number):Observable<Favorite>{
    return this.http.delete<Favorite>(`${this.baseUrl}api/Favorite/${id}`);
  }
}
