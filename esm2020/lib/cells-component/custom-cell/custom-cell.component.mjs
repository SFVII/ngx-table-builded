import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../core-data-table/app-date.pipe";
export class CustomCellComponent {
    constructor() { }
    ngOnInit() {
    }
}
CustomCellComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CustomCellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
CustomCellComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: CustomCellComponent, selector: "lib-custom-cell", inputs: { title: "title", subTitle: "subTitle", class: "class", subTitleFormat: "subTitleFormat", lang: "lang" }, ngImport: i0, template: "<div class=\"custom-cell\" [class]=\"class\">\n    <span>{{title}}</span>\n    <span *ngIf=\"!!subTitle\">{{ subTitleFormat ==='date' ? (subTitle | appDate : lang) : subTitle}}</span>\n</div>", styles: [""], dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "pipe", type: i2.AppDatePipe, name: "appDate" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CustomCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-custom-cell', template: "<div class=\"custom-cell\" [class]=\"class\">\n    <span>{{title}}</span>\n    <span *ngIf=\"!!subTitle\">{{ subTitleFormat ==='date' ? (subTitle | appDate : lang) : subTitle}}</span>\n</div>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                type: Input
            }], subTitle: [{
                type: Input
            }], class: [{
                type: Input
            }], subTitleFormat: [{
                type: Input
            }], lang: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvY3VzdG9tLWNlbGwvY3VzdG9tLWNlbGwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvY3VzdG9tLWNlbGwvY3VzdG9tLWNlbGwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7Ozs7QUFPekQsTUFBTSxPQUFPLG1CQUFtQjtJQU05QixnQkFBZ0IsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7aUhBVFUsbUJBQW1CO3FHQUFuQixtQkFBbUIseUtDUGhDLGlNQUdNOzRGRElPLG1CQUFtQjtrQkFML0IsU0FBUzsrQkFDRSxpQkFBaUI7MEVBS2xCLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxjQUFjO3NCQUF0QixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItY3VzdG9tLWNlbGwnLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tLWNlbGwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdXN0b20tY2VsbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tQ2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN1YlRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN1YlRpdGxlRm9ybWF0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhbmc6IHN0cmluZztcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiY3VzdG9tLWNlbGxcIiBbY2xhc3NdPVwiY2xhc3NcIj5cbiAgICA8c3Bhbj57e3RpdGxlfX08L3NwYW4+XG4gICAgPHNwYW4gKm5nSWY9XCIhIXN1YlRpdGxlXCI+e3sgc3ViVGl0bGVGb3JtYXQgPT09J2RhdGUnID8gKHN1YlRpdGxlIHwgYXBwRGF0ZSA6IGxhbmcpIDogc3ViVGl0bGV9fTwvc3Bhbj5cbjwvZGl2PiJdfQ==