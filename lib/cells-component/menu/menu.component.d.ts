import { OnInit, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
interface IMenuSettings {
    DataParam: any;
    Label: string;
    Icon?: string;
    IconColor?: string;
    Type: 'link' | 'modal';
    Value: any;
    Data?: any;
    Class?: string;
    Route?: string;
}
export declare class MenuComponent implements OnInit {
    menuSettings: IMenuSettings[];
    element: any;
    callHandler: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    action(menu: IMenuSettings): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MenuComponent, "menu", never, { "menuSettings": "menuSettings"; "element": "element"; }, { "callHandler": "callHandler"; }, never, never, false>;
}
export {};
