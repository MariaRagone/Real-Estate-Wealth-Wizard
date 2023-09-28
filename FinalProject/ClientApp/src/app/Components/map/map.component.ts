import { Component, Input,SimpleChanges,ViewChild } from '@angular/core';
import { PropertiesByPostal } from 'src/app/Models/properties-by-postal';
import { PropertyDetails } from 'src/app/Models/property-details';
import { Router } from '@angular/router';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { CoordinateModel } from 'src/app/Models/coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @ViewChild(MapInfoWindow)
  infoWindow!: MapInfoWindow;
  @Input() favoritePins: PropertyDetails[] = [];
  @Input() listPins: CoordinateModel[] = [];
  favoritePinResult: PropertyDetails = {} as PropertyDetails;
  listPinResult:PropertiesByPostal = {} as PropertiesByPostal;
  Lat: number = 43.0125;
  Lon: number = -83.6875;
  coordinates: CoordinateModel[] = [];
  propertyId:string="";
  constructor(private router: Router) { };
 InfoPicture?:string ="";
 displayCoord: CoordinateModel = {} as CoordinateModel;


  ngOnInit(): void {
    this.RestartMape();
    this.setupMap();
  }
  RestartMape(){
    this.GetCenter();
    this.setupMap();
  }
  ngOnChanges(changes: SimpleChanges) {
    this.listPins;
    console.log('listPins')
    console.log(this.listPins)
    this.displayCoord=this.listPins[0]
    this.RestartMape();
  }

  Click(PropertyId:string) {
    this.router.navigate(['/property-details', PropertyId]);
    
  }
  openInfoWindow(marker: MapMarker, coordprop:CoordinateModel) {
    this.displayCoord=coordprop;
    this.infoWindow.open(marker);
  }

  display: any;
  center: google.maps.LatLngLiteral = {} as google.maps.LatLngLiteral;
  zoom = 9;

  GetCenter():void{
    this.Lat = this.displayCoord.lat;
    this.Lon = this.displayCoord.lon;
}


  setupMap(): void {
    this.center = {
      lat: this.Lat, //this.GetCenter().lat,
      lng: this.Lon //this.GetCenter().lon
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
