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
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    SocialLoginModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'favorite-list', component: FavoriteListComponent},
      { path: 'property-details', component: PropertyDetailsComponent}
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
