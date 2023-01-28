import { ChangeDetectorRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableService } from "../../table.service";
import { TranslateService } from '../../translate.service';
import * as i0 from "@angular/core";
export declare class CustomerRankComponent implements OnInit, OnChanges {
    private changeDetectorRefs;
    private service;
    private local;
    type: string;
    lang: string;
    typeClass: string;
    private _type;
    notSpecified: boolean;
    tooltip: string;
    constructor(changeDetectorRefs: ChangeDetectorRef, service: TableService, local: TranslateService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomerRankComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomerRankComponent, "app-customer-rank", never, { "type": "type"; "lang": "lang"; }, {}, never, never, false>;
}
