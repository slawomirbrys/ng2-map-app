//TODO
import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Hero} from "../models/hero";
import {ITableHeader} from "./ITableHeader";


@Component({
    moduleId: module.id,
    selector: 'data-table',
    templateUrl: './data-table.component.html'
})
export class DataTableComponent<T> implements OnInit {

    @Input() items: T[];
    @Input() selectedItem: T;
    @Input() headers: ITableHeader[];
    @Output() itemClick: EventEmitter<T> = new EventEmitter<T>();

    constructor() { }

    ngOnInit() { }

    selected(item:T)
    {
        //this.selectedItem = item;
        this.itemClick.emit(item);
    }

}