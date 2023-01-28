import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class DoubleLineComponent {
    constructor() {
        this.line1 = '';
        this.line2 = '';
    }
    ngOnInit() {
    }
}
DoubleLineComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: DoubleLineComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DoubleLineComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: DoubleLineComponent, selector: "double-line", inputs: { line1: "line1", line2: "line2" }, ngImport: i0, template: "<div class=\"line-1\">\n    {{ line1 }}\n</div>\n\n<div class=\"line-2\">\n    {{ line2 }}\n</div>", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: DoubleLineComponent, decorators: [{
            type: Component,
            args: [{ selector: 'double-line', template: "<div class=\"line-1\">\n    {{ line1 }}\n</div>\n\n<div class=\"line-2\">\n    {{ line2 }}\n</div>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { line1: [{
                type: Input
            }], line2: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG91YmxlLWxpbmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvZG91YmxlLWxpbmUvZG91YmxlLWxpbmUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvZG91YmxlLWxpbmUvZG91YmxlLWxpbmUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBT3pELE1BQU0sT0FBTyxtQkFBbUI7SUFJOUI7UUFIUyxVQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ25CLFVBQUssR0FBVyxFQUFFLENBQUM7SUFFWixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOztpSEFQVSxtQkFBbUI7cUdBQW5CLG1CQUFtQiwrRkNQaEMsb0dBTU07NEZEQ08sbUJBQW1CO2tCQUwvQixTQUFTOytCQUNFLGFBQWE7MEVBS2QsS0FBSztzQkFBYixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkb3VibGUtbGluZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kb3VibGUtbGluZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2RvdWJsZS1saW5lLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBEb3VibGVMaW5lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbGluZTE6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBsaW5lMjogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgfVxuXG59XG4iLCI8ZGl2IGNsYXNzPVwibGluZS0xXCI+XG4gICAge3sgbGluZTEgfX1cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwibGluZS0yXCI+XG4gICAge3sgbGluZTIgfX1cbjwvZGl2PiJdfQ==