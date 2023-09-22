import { Component, Input } from '@angular/core';
import { Coordinate, PropertiesByPostal } from 'src/app/Models/properties-by-postal';
import { PropertyDetails } from 'src/app/Models/property-details';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {

  @Input() favoritePins: PropertyDetails[] = [];
  @Input() listPins: PropertiesByPostal = {} as PropertiesByPostal;
  favoritePinResult: PropertyDetails = {} as PropertyDetails;
  listPinResult:PropertiesByPostal = {} as PropertiesByPostal;
  Lat: number = 0;
  Lon: number = 0;
  coordinates: Coordinate[] = [];


  ngOnInit(): void {
    if (this.favoritePinResult!=null){
      this.GetCoordinates();
    }
    if (this.listPinResult!=null){
      this.GetStartCoordinates();
    }

    
    this.setupMap();
  }



  GetCoordinates(): Coordinate[] {
    // console.log('Get Coordinates')
    // console.log(this.favoritePins);
    let cords: Coordinate[] = [];
    this.favoritePins.forEach((p) => {
      if (p.data.location.address.coordinate.lat != null) {
        let lat = (Number(p.data.location.address.coordinate.lat));
        let lon = (Number(p.data.location.address.coordinate.lon));
        let coord: Coordinate = {} as Coordinate;
        coord.lat = lat;
        coord.lon = lon;
        cords.push(coord);
      }
    })
    // console.log(this.coordinates)
    return cords;
  }
  /////
  GetStartCoordinates(): Coordinate[] {
    // console.log('Get Coordinates')
    // console.log(this.favoritePins);
    let cords: Coordinate[] = [];
    this.listPins.data.home_search.results.forEach((p) => {
      if (p.location.address.coordinate != null) {
        let lat = (Number(p.location.address.coordinate.lat));
        let lon = (Number(p.location.address.coordinate.lon));
        let coord: Coordinate = {} as Coordinate;
        coord.lat = lat;
        coord.lon = lon;
        cords.push(coord);
      }
    })
    // console.log(this.coordinates)
    return cords;
  }


  Click() {
    console.log("mapClicked")
  }


  display: any;
  center: google.maps.LatLngLiteral = {} as google.maps.LatLngLiteral;
  zoom = 7;
  
  setupMap(): void {
    if (this.favoritePinResult != null) {
      this.favoritePinResult = this.favoritePins[0];
      this.Lat = Number(this.favoritePinResult.data.location.address.coordinate.lat);
      this.Lon = Number(this.favoritePinResult.data.location.address.coordinate.lon);
    }

    if (this.listPinResult != null) {
      this.listPinResult = this.listPins;
      this.Lat = Number(this.listPinResult.data.home_search.results[0].location.address.coordinate?.lat);
      this.Lon = Number(this.listPinResult.data.home_search.results[0].location.address.coordinate?.lon);
    }
    
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
