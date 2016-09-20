import {Component, OnInit} from '@angular/core';

import {RealEstate} from "../models/real-estate";

@Component({
  selector: 'map-search-page',
  templateUrl: "app/map-search-page/map-search-page.component.html"
})
export class MapSearchPageComponent implements OnInit {

  realEstatesPromise: Promise<RealEstate[]>;
  realEstates: RealEstate[];
  o: any;
  listHeaders: Object[];

  constructor(/*private service: RealEstateService*/) {
    this.o = {selectedRealEstate: null};
    this.listHeaders = [
      {value: "street", text: "Ulica"},
      {value: "lat", text: "Wysokosc geo."},
      {value: "lng", text: "Dlugosc geo."}
    ];
  }

  ngOnInit() {
    // this.realEstatesPromise = this.service.getRealEstates();
    // this.realEstatesPromise.then((realEstates: RealEstate[]) => {
    //   this.realEstates = realEstates;
    // }, (error) => {
    //   console.error(error);
    // });
  }

  onRealEstateClick(realEstate: RealEstate) {
    console.log("RE clicked:", realEstate.street, "index:", this.realEstates.indexOf(realEstate));
    this.o.selectedRealEstate = realEstate;
  }

}
