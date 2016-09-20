import {Injectable} from '@angular/core';
import {Marker} from './marker';

const google = window['google'];

@Injectable()
export class GoogleMapService {

  private _map: any;
  private _markers: any[];
  private _latLngs: any[];

  constructor(element: HTMLElement) {
    var center = new google.maps.LatLng(52.14, 21.0);
    this._map = new google.maps.Map(element, {
      center: center,
      zoom: 6
    });
    this._markers = [];
    this._latLngs = [];
  }

  createMarker(object: any) {
    var latLng = new google.maps.LatLng(object.lat, object.lng);
    this._latLngs.push(latLng);
    var marker = new google.maps.Marker({
      position: latLng,
      map: this._map,
      title: object.title
    });
    this._markers.push(marker);
    return new Marker(marker, object);
  }

  //TODO
  /*
   fitMarkerBounds() {
   var lats = _(this._latLngs).pluck("lat");
   var lngs = _(this._latLngs).pluck("lng");
   var south = _(lats).min();
   var north = _(lats).max();
   var east = _(lngs).max();
   var west = _(lats).min();
   var bounds = new gm.LatLngBounds(new gm.LatLng(south, west), new gm.LatLng(north, east));
   this._map.fitBounds(bounds);
   }
   */

}
