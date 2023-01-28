import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class CustomButtonComponent implements OnInit {
    config: {
        class: string;
        icon: {
            size: number;
            icon: string;
        };
        matTooltip: string;
    };
    element: any;
    callHandler: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    action(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomButtonComponent, "custom-button", never, { "config": "config"; "element": "element"; }, { "callHandler": "callHandler"; }, never, never, false>;
}
