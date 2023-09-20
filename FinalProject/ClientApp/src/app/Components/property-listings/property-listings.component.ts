import { Component } from '@angular/core';
import { Favorite } from 'src/app/Models/favorite';
import { PropertiesByPostal } from 'src/app/Models/properties-by-postal';
import { PropertyDetails } from 'src/app/Models/property-details';
import { FavoriteService } from 'src/app/Services/favorite.service';
import { PropertiesService } from 'src/app/Services/properties.service';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { MortgageFormService } from 'src/app/Services/mortgage-form.service';
import { User } from 'src/app/Models/user';
import { RentService } from 'src/app/Services/rent.service';
import { Rent } from 'src/app/Models/rent';


@Component({
  selector: 'app-property-listings',
  templateUrl: './property-listings.component.html',
  styleUrls: ['./property-listings.component.css'],
})
export class PropertyListingsComponent {
  PropertyListResult: PropertiesByPostal = {} as PropertiesByPostal;
  postal_code:string = "";
  user: SocialUser = {} as SocialUser;
  loggedIn: boolean = false;
  FavoriteListResult: Favorite[] = [];
  appUser:User = {} as User;
  vacancyRate:number = 0;
  numBeds:number = 0;
  RentListResult: Rent = {} as Rent;
  rent_prices:number[] = [];
  averageRent:number = 0;
  //appUser: User = {} as User;

  constructor(private _propertiesService: PropertiesService, private _favoriteService: FavoriteService,private authService: SocialAuthService, private _mortgageFormService: MortgageFormService,  private _rentService:RentService) {}


  //Run the method location based on the IP Run the method location based on the IP address
  ngOnInit():void{
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    // this.GetProperties("48420");


}

//this method runs when form is submitted
NewMortgage(newUser:User){
  this.appUser = newUser;
  // console.log(newUser.zipCode);
  // console.log("newMortgageMethod")
  this.GetProperties(this.appUser.zipCode, this.appUser.maxPrice, this.numBeds);
  this.GetRentals(this.appUser.zipCode,this.numBeds);
}

GetRentals(ZipCode:string, BedsMin:number):void{
  this._rentService.GetRentByPostal(ZipCode, BedsMin).subscribe((response:Rent)=> {
    console.log(response);
    console.log("Rentals work");
    this.RentListResult = response;
    response.data.home_search.results.forEach( p => {
      if(p.list_price != null){
      this.rent_prices.push(p.list_price);
      }
    })
    this.calculateRentIncome(this.rent_prices);
    this.rent_prices = []; 
    });
}

  calculateRentIncome(list_price: number[]): void {
    // Initialize a variable to keep track of the sum of rent prices.
    let sum = 0;
    let averageRent = 0;
    // Loop through the array of rent prices and add each rent price to the sum.
    for (const price of list_price) {
        sum += price;
    }

    // Calculate the average rent price by dividing the sum by the number of rentals.
    if (list_price.length > 0) {
       
        averageRent = sum / list_price.length;
        console.log(averageRent);
        this.averageRent = averageRent;
        
    } else {
        // Handle the case where the array is empty to avoid division by zero.
        this.averageRent = 0;
    };
    
}
    



AddFavorites(googleId:string, propertyId:string):void{
  let favorite:Favorite = {} as Favorite;
  // this._eventService.AddFavorite();
  favorite.googleId = googleId;
  favorite.propertyId = propertyId;
  this._favoriteService.AddFavorite(favorite).subscribe((response:Favorite) =>{
    // console.log(response)
    this.FavoriteListResult.push(response);
  });
}
GetProperties(ZipCode:string, PriceMax:number, MinBeds:number):void{
  this._propertiesService.GetAllByPostalCode(ZipCode, PriceMax, MinBeds).subscribe((response:PropertiesByPostal)=> {
    console.log(response);
    this.PropertyListResult = response
  });
}

RemoveFavorite(googleId: string, propertyId:string):void{
  let favorite:Favorite = {} as Favorite;
  // this._eventService.AddFavorite();
  favorite.googleId = googleId;
  favorite.propertyId = propertyId;
  this._favoriteService.RemoveFavorite(googleId, propertyId).subscribe((response:Favorite) =>{
    // console.log(response)
    this.FavoriteListResult.push(response);
  });
}

VacancyRate(vacancyRate:number){
  this.vacancyRate = vacancyRate;

}
NumBeds(numBeds:number){
  this.numBeds = numBeds;
}


// calculateLoanAmount(list_price:number, downPayment:number):number{
//   let result:number = 0;
//   result = list_price - downPayment;
//   return result;
// }



// RemoveFavorite(id: number): void {
//   //feedback for user
//   let target: number = this.FavoriteListResult.findIndex((e) => e.id == id);
//   this.FavoriteListResult.splice(target, 1);

//   this._favoriteService.DeleteFavorite(id).subscribe((response: Favorite) => {
//     console.log(response);
//   });
// }

}


