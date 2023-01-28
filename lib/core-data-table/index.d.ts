import { BehaviorSubject, Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
export interface Sort {
    active: string;
    direction: 'asc' | 'desc';
}
export interface PageRequest {
    page: number;
    size: number;
    sort?: Sort;
}
export interface Page {
    content: any;
}
export interface CoreMatTableInterface {
    page$: Observable<any>;
    totalElements: number;
    search: BehaviorSubject<string>;
    paginator: MatPaginator;
    number: number;
    data: any[];
    size: number;
    fetch: (page: any) => void;
    connect: () => void;
    disconnect: () => void;
    sort: MatSort;
    sortIt: (sortidea: any) => void;
    filter: (myFilter: any) => void;
    filterData: (data: any, filter: any) => void;
    filterDate: (dateFilter: FilterDateInterface) => void;
    setData: (data: Array<any>) => void;
    pageNumber: BehaviorSubject<number>;
    startWith: number;
    pageFilter: BehaviorSubject<any>;
    pageFilterDate: BehaviorSubject<FilterDateInterface>;
    update: () => void;
    getRaw: () => any[];
}
export interface FilterDateInterface {
    active: string;
    valueStart: Date;
    valueEnd: Date;
}
export declare class CoreMatTable extends DataSource<Element> {
    page$: Observable<Page>;
    totalElements: number;
    number: number;
    size: any;
    sort: MatSort;
    paginator: MatPaginator;
    data: any;
    pageNumber: BehaviorSubject<number>;
    startWith: number;
    private _update;
    private pageSort;
    pageFilter: BehaviorSubject<any>;
    pageFilterDate: BehaviorSubject<FilterDateInterface>;
    private _totalElements;
    search: BehaviorSubject<string>;
    private backUpData;
    private emptyRow;
    private filterTable;
    private dataAfterSearch;
    private currentPage;
    constructor(data: any, sortRules: Sort, rangeRules: FilterDateInterface, size?: number, detailRaws?: boolean, emptyRow?: boolean, filterT?: any, startswith?: number);
    filterDateRange(data: any, range: FilterDateInterface): any;
    update(): void;
    getRaw(): any;
    ponderation(str: string, searchKey: string): number;
    filterData(data: any, filter: any): any;
    private _search;
    formatCharacters(text: any): string;
    filterDataObject(data: any, filter: any): any;
    setData(data: any[], override?: boolean): void;
    sortData(data: any, sortAction: any): any;
    compare(a: number | string | any[], b: number | string | any[], isAsc: boolean): number;
    fetch(page: number): void;
    sortIt(sortidea: any): void;
    filter(myFilter: any): void;
    filterDate(dateFilter: FilterDateInterface): void;
    connect(): Observable<any>;
    disconnect(): void;
    slice(data: any[], start?: number, end?: number, detailRow?: boolean): any;
    checkTotalPage(): void;
}
