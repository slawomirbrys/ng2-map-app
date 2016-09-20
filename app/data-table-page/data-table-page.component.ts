import {Component} from '@angular/core';
import {HeroService} from "../services/hero.service";
import {Hero} from "../models/hero";

@Component({
  selector: 'data-table-page',
  templateUrl: "app/data-table-page/data-table-page.component.html"
})
export class DataTablePageComponent {

  heroes:Hero[];
  selectedHero:Hero;
  tableHeaders:Object[];

  constructor(private _heroesService:HeroService) {
    this.tableHeaders = [
      {value: "universe", text: "Komiksowe Uniwersum"},
      {value: "name", text: "Imie"},
      {value: "secretIdentity", text: "Tozsamosc"}
    ];

    this._heroesService.getHeroes().then((data) => {
      console.log("data table PAGE", data);
      this.heroes = <Hero[]>data;
    }, function (error) {
      console.log(error);
    });
  }

  onHeroClick(hero:Hero) {
    console.log("data table PAGE, selected:", hero);
    this.selectedHero = hero;
  }

}
