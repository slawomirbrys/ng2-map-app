//TODO
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

@Injectable()
export class GenericService<T> {

  private _url: string;

  constructor(private _http: Http) {
  }

  setUrl(url: string) {
    this._url = url;
  }

  getHeroes(): Promise<T[]> {
    return new Promise<T[]>((resolve) => {
      this.getJson((json: T[]) => {
        resolve(json);
      });
    });
  }

  getHero(id: number): Promise<T> {
    return new Promise<T>((resolve) => {
      this.getJson((json: T[]) => {
        var foundItem: T = json.filter((item: any) => {
          return item.id === id;
        })[0];
        resolve(foundItem);
      });
    });
  }

  private getJson(callback: Function) {
    this._http.get(this._url).subscribe((response: Response) => {
      callback(response.json());
    });
  }
}
