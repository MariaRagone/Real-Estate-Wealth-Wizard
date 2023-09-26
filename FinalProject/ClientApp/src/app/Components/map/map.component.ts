import { Component, Input,ViewChild } from '@angular/core';
import { PropertiesByPostal } from 'src/app/Models/properties-by-postal';
import { PropertyDetails } from 'src/app/Models/property-details';
import { Router } from '@angular/router';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Coordinate } from 'src/app/Models/coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @ViewChild(MapInfoWindow)
  infoWindow!: MapInfoWindow;
  @Input() favoritePins: PropertyDetails[] = [];
  @Input() listPins: Coordinate[] = [];
  favoritePinResult: PropertyDetails = {} as PropertyDetails;
  listPinResult:PropertiesByPostal = {} as PropertiesByPostal;
  Lat: number = 43.0125;
  Lon: number = -83.6875;
  coordinates: Coordinate[] = [];
  constructor(private router: Router) { };


  ngOnInit(): void {
    this.listPins.forEach((p)=>{
      console.log(p.photo)
    })
    // if (this.favoritePinResult!=null){
    //   this.GetCoordinates();
    // }
    // if (this.listPinResult!=null){
    //   this.GetStartCoordinates();
    // }

    
    this.setupMap();
  }



  // GetCoordinates(): Coordinate[] {
  //   // console.log('Get Coordinates')
  //   // console.log(this.favoritePins);
  //   let cords: Coordinate[] = [];
  //   this.favoritePins.forEach((p) => {
  //     if (p.data.location.address.coordinate.lat != null) {
  //       let lat = (Number(p.data.location.address.coordinate.lat));
  //       let lon = (Number(p.data.location.address.coordinate.lon));
  //       let coord: Coordinate = {} as Coordinate;
  //       coord.propertyDetails=p.data.property_id;
  //       coord.lat = lat;
  //       coord.lon = lon;
  //       cords.push(coord);
  //     }
  //     console.log(`Coordinates = ${cords}`);
  //     console.log(cords)
  //   })
    // console.log(this.coordinates)
    
  //   return cords;
  // }
  /////
  // GetStartCoordinates(): Coordinate[] {
    // console.log('Get Coordinates')
    // console.log(this.favoritePins);
  //   let cords: Coordinate[] = [];
  //   this.listPins.data.home_search.results.forEach((p) => {
  //     if (p.location.address.coordinate != null) {
  //       let lat = (Number(p.location.address.coordinate.lat));
  //       let lon = (Number(p.location.address.coordinate.lon));
  //       let coord: Coordinate = {} as Coordinate;
  //       coord.lat = lat;
  //       coord.lon = lon;
  //       cords.push(coord);
  //     }
  //   })
  //   // console.log(this.coordinates)
  //   return cords;
  // }


  Click(PropertyId:string) {
    this.router.navigate(['/property-details', PropertyId]);
    
  }
  openInfoWindow(marker: MapMarker) {
    this.infoWindow.open(marker);
  }

  display: any;
  center: google.maps.LatLngLiteral = {} as google.maps.LatLngLiteral;
  zoom = 7;
  

  //this method needs some work
  GetCenter():Coordinate{
    let bob:Coordinate={} as Coordinate;
    
    if (this.favoritePinResult != null) {
     
      this.Lat =  Number(this.favoritePinResult.data.location.address.coordinate.lat);
      this.Lon = Number(this.favoritePinResult.data.location.address.coordinate.lon);
    }
    if (this.favoritePins != null)
      this.Lat = Number(this.favoritePins[0].data.location.address.coordinate.lat)
      this.Lon = Number(this.favoritePins[0].data.location.address.coordinate.lon)
    if (this.listPins != null) {
      
      this.Lat = Number(this.listPins[0].lat);
      this.Lon = Number(this.listPins[0].lon);
    }
    bob.lat=43.0125;
    bob.lon=-83.6875;
    return bob;
  }


  setupMap(): void {
    this.center = {
      lat: 43.0125,//this.GetCenter().lat,
      lng: -83.6875//this.GetCenter().lon
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
