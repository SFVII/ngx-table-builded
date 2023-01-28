import { ChangeDetectorRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TableService } from "../../table.service";
import { TranslateService } from '../../translate.service';
import * as i0 from "@angular/core";
export declare class EquipementStatusComponent implements OnInit, OnChanges {
    private changeDetectorRefs;
    private service;
    private translate;
    type: string;
    icon: string;
    size: number | string;
    css: any;
    lang: string;
    status: string;
    constructor(changeDetectorRefs: ChangeDetectorRef, service: TableService, translate: TranslateService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EquipementStatusComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EquipementStatusComponent, "app-equipement-status", never, { "type": "type"; "size": "size"; "lang": "lang"; }, {}, never, never, false>;
}
