export class Marker {
  private _marker: any;
  private _object: any;

  constructor(googleMarker: any, object: any) {
    this._marker = googleMarker;
    this._object = object;
  }

  on(eventName: string, listenerFn: Function) {
    var that = this;
    this._marker.addListener(eventName, function () {
      listenerFn.call(that._marker, that._object, that);
    });
  }

  highlight(): void {
    console.log("TODO Marker#highlight", this._object); // TODO
  }
}
