import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class DateFormatComponent implements OnInit, OnChanges {
    date: string;
    lang: string;
    timezone: string;
    display: string;
    constructor();
    ngOnInit(): void;
    run(date: string): string;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateFormatComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateFormatComponent, "date-format", never, { "date": "date"; "lang": "lang"; "timezone": "timezone"; }, {}, never, never, false>;
}
