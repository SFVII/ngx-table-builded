import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
import * as i2 from "@angular/common";
import * as i3 from "nowboard-icon";
export class CustomButtonComponent {
    constructor() {
        this.callHandler = new EventEmitter();
    }
    ngOnInit() {
    }
    action() {
        this.callHandler.emit(this.element);
    }
}
CustomButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CustomButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CustomButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: CustomButtonComponent, selector: "custom-button", inputs: { config: "config", element: "element" }, outputs: { callHandler: "callHandler" }, ngImport: i0, template: "<button (click)=\"action()\" [matTooltip]=\"config?.matTooltip\" [ngClass]=\"config?.class\">\n    <nb-icon [icon]=\"config?.icon?.icon\" [size]=\"config?.icon?.size\"></nb-icon>\n</button>", styles: [""], dependencies: [{ kind: "directive", type: i1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: i3.NowboardIconComponent, selector: "nb-icon", inputs: ["size", "primary", "disabled_color", "disabled", "icon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CustomButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'custom-button', template: "<button (click)=\"action()\" [matTooltip]=\"config?.matTooltip\" [ngClass]=\"config?.class\">\n    <nb-icon [icon]=\"config?.icon?.icon\" [size]=\"config?.icon?.size\"></nb-icon>\n</button>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { config: [{
                type: Input
            }], element: [{
                type: Input
            }], callHandler: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL2NlbGxzLWNvbXBvbmVudC9jdXN0b20tYnV0dG9uL2N1c3RvbS1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvY3VzdG9tLWJ1dHRvbi9jdXN0b20tYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBTy9FLE1BQU0sT0FBTyxxQkFBcUI7SUFZaEM7UUFGVSxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBRW5ELENBQUM7SUFFakIsUUFBUTtJQUNSLENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7O21IQW5CVSxxQkFBcUI7dUdBQXJCLHFCQUFxQixnSkNQbEMsK0xBRVM7NEZES0kscUJBQXFCO2tCQUxqQyxTQUFTOytCQUNFLGVBQWU7MEVBS2hCLE1BQU07c0JBQWQsS0FBSztnQkFRRyxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0ksV0FBVztzQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3VzdG9tLWJ1dHRvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b20tYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tLWJ1dHRvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY29uZmlnOiB7XG4gICAgY2xhc3M6IHN0cmluZyxcbiAgICBpY29uOiB7XG4gICAgICBzaXplOiBudW1iZXIsXG4gICAgICBpY29uOiBzdHJpbmcsXG4gICAgfSxcbiAgICBtYXRUb29sdGlwOiBzdHJpbmdcbiAgfTtcbiAgQElucHV0KCkgZWxlbWVudDogYW55O1xuICBAT3V0cHV0KCkgY2FsbEhhbmRsZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIFxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgYWN0aW9uKCkge1xuICAgIHRoaXMuY2FsbEhhbmRsZXIuZW1pdCh0aGlzLmVsZW1lbnQpO1xuICB9XG59XG4iLCI8YnV0dG9uIChjbGljayk9XCJhY3Rpb24oKVwiIFttYXRUb29sdGlwXT1cImNvbmZpZz8ubWF0VG9vbHRpcFwiIFtuZ0NsYXNzXT1cImNvbmZpZz8uY2xhc3NcIj5cbiAgICA8bmItaWNvbiBbaWNvbl09XCJjb25maWc/Lmljb24/Lmljb25cIiBbc2l6ZV09XCJjb25maWc/Lmljb24/LnNpemVcIj48L25iLWljb24+XG48L2J1dHRvbj4iXX0=