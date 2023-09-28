import { Component, Input } from '@angular/core';
import { User } from 'oidc-client';

@Component({
  selector: 'app-heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent {
  // @Input() userId:string = {} as string;
  // @Input() propertyId:string = {} as string;
  @Input() favoriteCheck:Boolean = {} as boolean;
  @Input() isOnDetails:Boolean = false;

}
