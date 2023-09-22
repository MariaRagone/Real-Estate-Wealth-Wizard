import { Component, Input } from '@angular/core';
import { Coordinate } from 'src/app/Models/properties-by-postal';
import { PropertyDetails } from 'src/app/Models/property-details';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  @Input() favoritePins:PropertyDetails[] = [];
  favoritePinResult: PropertyDetails = {} as PropertyDetails;

  Lat:number = 0;
  Lon:number = 0;
  coordinates:Coordinate[] = [];


  ngOnInit():void{
    this.GetCoordinates();
    this.setupMap();
  }

  // GetCoordinates():void{
  //   this.favoritePins.forEach((c:PropertyDetails) => {
  //     this.coordinates.push(c.data.location.address.coordinate)
  //   })
  // }

  // GetCoordinates():void{
  //   console.log('Get Coordinates')
  //   console.log(this.favoritePins);
  //   // for (let index = 0; index < this.favoritePins.length; index++) {
  //   //   this.coordinates[index].lat = (Number(this.favoritePins[index].data.location.address.coordinate.lat));
  //   //   this.coordinates[index].lon = (Number(this.favoritePins[index].data.location.address.coordinate.lon));
  //   // }
  //   this.favoritePins.forEach((p) => {
  //     if (p.data.location.address.coordinate.lat != null)
  //     {
  //     let lat = (Number(p.data.location.address.coordinate.lat));
  //     let lon = (Number(p.data.location.address.coordinate.lon));
  //     let coord:Coordinate = {} as Coordinate;
  //     coord.lat = lat;
  //     coord.lon = lon;
  //     this.coordinates.push(coord);
  //     }
  //   })
  //   console.log(this.coordinates)
  // }

  GetCoordinates():Coordinate[]{
    // console.log('Get Coordinates')
    // console.log(this.favoritePins);
    let cords:Coordinate[] = [];
    this.favoritePins.forEach((p) => {
      if (p.data.location.address.coordinate.lat != null)
      {
      let lat = (Number(p.data.location.address.coordinate.lat));
      let lon = (Number(p.data.location.address.coordinate.lon));
      let coord:Coordinate = {} as Coordinate;
      coord.lat = lat;
      coord.lon = lon;
      cords.push(coord);
      }
    })
    // console.log(this.coordinates)
    return cords;
  }

  Click(){
    console.log("mapClicked")
  }
  
  
  display: any;
    center: google.maps.LatLngLiteral = {} as google.maps.LatLngLiteral;
  zoom = 7;
  
  setupMap():void {
    this.favoritePinResult = this.favoritePins[0];
    this.Lat=Number(this.favoritePinResult.data.location.address.coordinate.lat);
    this.Lon=Number(this.favoritePinResult.data.location.address.coordinate.lon);
  
  this.center = {
    lat: this.Lat,
    lng: this.Lon
  };
  }
  
  /*------------------------------------------
  --------------------------------------------
  moveMap()
  --------------------------------------------
  --------------------------------------------*/
  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }
  
  /*------------------------------------------
  --------------------------------------------
  move()
  --------------------------------------------
  --------------------------------------------*/
  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}
