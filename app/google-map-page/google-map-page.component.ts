import {Component} from '@angular/core';

@Component({
  selector: 'google-map-page',
  templateUrl: "app/google-map-page/google-map-page.component.html"
})
export class GoogleMapPageComponent {

  citiesPromise:Promise<Object[]>;
  selectedCity:any;
  private _myCities:Object[];

  constructor() {
    this._myCities = [
      {title: "Lublin", lat: 51.15, lng: 22.34},
      {title: "Rzeszów", lat: 50.0409, lng: 21.9992},
      {title: "Łódź", lat: 51.45, lng: 19.27},
      {title: "Kraków", lat: 50.06465, lng: 19.94498},
      {title: "Warszawa", lat: 52.14, lng: 21.0},
      {title: "Szczecin", lat: 53.25, lng: 14.35}
    ];

    this.citiesPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(this._myCities);
      }, 2000);
    });
  }

  onPlaceClick(city:any) {
    this.selectedCity = city
    console.log("map search PAGE click:", city, "index:", this._myCities.indexOf(city));
  }

}
