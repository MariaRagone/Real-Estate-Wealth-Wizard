import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { PropertyListingsComponent } from './Components/property-listings/property-listings.component';
import { PropertyDetailsComponent } from './Components/property-details/property-details.component';
import { MortgageFormComponent } from './Components/mortgage-form/mortgage-form.component';
import { UserComponent } from './Components/user/user.component';
import { FavoriteListComponent } from './Components/favorite-list/favorite-list.component';
import {
  GoogleLoginProvider,
  SocialAuthServiceConfig,
  SocialLoginModule,
} from '@abacritt/angularx-social-login';
import { MortgageResultComponent } from './Components/mortgage-result/mortgage-result.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './Components/map/map.component';
import { HeartComponent } from './Components/heart/heart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    PropertyListingsComponent,
    PropertyDetailsComponent,
    MortgageFormComponent,
    UserComponent,
    FavoriteListComponent,
    MortgageResultComponent,
    MapComponent,
    HeartComponent,
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    SocialLoginModule,
    FormsModule,
    GoogleMapsModule, 
    // Angular routing setup. 
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      // to home component
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'favorite-list', component: FavoriteListComponent},
      { path: 'property-list', component: PropertyListingsComponent},
      //to favorites list
      { path: 'property-details/:propertyId', component: PropertyDetailsComponent}
      //to property details. Connected by property id, which connects to favorite list component. 
    ])
  ],
    providers: [
      {


    provide: 'SocialAuthServiceConfig',
  	useValue: {
    	autoLogin: false,
    	providers: [
      	{
        	id: GoogleLoginProvider.PROVIDER_ID,
        	provider: new GoogleLoginProvider(
          	'591233259108-7r5kjrjo59uhpoak4qukqgqb0uvs29q8'
        	)
      	}
    	]
  	} as SocialAuthServiceConfig,
	} 
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
