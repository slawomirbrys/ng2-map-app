import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {Hero} from '../models/hero';

@Injectable()
export class HeroService {

  constructor(private _http: Http) {
  }

  getHeroes(): Promise<Hero[]> {
    return new Promise<Hero[]>((resolve) => {
      this.getJson((json: Hero[]) => {
        resolve(json);
      });
    });
  }

  getHero(id: number): Promise<Hero> {
    return new Promise<Hero>((resolve) => {
      this.getJson((json: Hero[]) => {
        let hero: Hero = json.filter((hero: any) => hero.id === id)[0];
        resolve(hero);
      });
    });
  }

  private getJson(callback: Function) {
    this._http.get("server/heroes.json").subscribe((response: Response) => {
      callback(response.json());
    });
  }
}
