import {Component, OnInit, EventEmitter, Input, Output, ElementRef, NgZone} from '@angular/core';
import {GoogleMapService} from '../services/google-map.service';

@Component({
    moduleId: module.id,
    selector: 'google-map',
    templateUrl: '/app/google-map-page/google-map.component.html'
})
export class GoogleMapComponent<T> implements OnInit {
    ngOnInit(): void {
    }
    @Input() geoObjectsPromise: Promise<T[]>;
    @Output() markerClick:EventEmitter<T> = new EventEmitter<T>();

    constructor(private elRef: ElementRef, private zone: NgZone) {

    }

    ngOnAfterViewInit() {
        let elDom = this.elRef.nativeElement.firstElementChild;
        let map = new GoogleMapService(elDom);

        // this === cmp
        this.geoObjectsPromise.then((geoObjects) => {
            // this == cmp
            for(let i =0; i<geoObjects.length; i++){
                let obj = geoObjects[i];
                let marker = map.createMarker(obj);
                marker.on("click", (originalObj: any) => {
                    // this == cmp;
                    this.zone.run(() => {
                        this.markerClick.emit(originalObj);
                    });
                    //marker.toggleHighlight(true);
                });
            }
        }, (error) => {
            console.error(error);
        })
    }

}