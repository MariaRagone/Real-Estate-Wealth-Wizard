import { Component, Input } from '@angular/core';
import { Favorite } from 'src/app/Models/favorite';
import { User } from 'src/app/Models/user';
import { FavoriteService } from 'src/app/Services/favorite.service';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent {

  

name:string = "";
@Input() DisplayFavorite:User = {} as User;
FavoriteListResult:Favorite[] = [];
UserListResult:User[] = [];

constructor(private _favoriteService:FavoriteService) { }

   ngOnInit(): void {
    this.DisplayFavorites(this.name);
    // this.DisplayEvents();
    }

   DisplayFavorites(googleId:string):void{
     
     this._favoriteService.GetFavorites(googleId).subscribe((response:Favorite[]) =>{
       console.log(response);
      this.FavoriteListResult = response;
     });

   }

  //  DisplayEvents(): void {
  //   this._favoriteService.GetEvents().subscribe((response:Event[]) => {
  //     console.log(response);
  //     this.EventListResult = response;
  //   });
  // }

  DeleteFavorite(id:number):void{
    //feedback for user
    let target:number = this.FavoriteListResult.findIndex(e => e.id ==id);
    this.FavoriteListResult.splice(target,1);

    this._favoriteService.DeleteFavorite(id).subscribe((response:Favorite) => {
      console.log(response);
    });
  }
}
