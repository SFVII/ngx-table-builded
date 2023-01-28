import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
export class StatusComponent {
    constructor() { }
    ngOnInit() {
    }
}
StatusComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StatusComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
StatusComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: StatusComponent, selector: "status", inputs: { label: "label" }, ngImport: i0, template: "<span matTooltip=\"{{ label }}\" class=\"status status-{{label?.toLowerCase()}}\">\n    {{ label }}\n</span>", styles: [".status{background:#F6544C;border-radius:1000px;font-style:normal;font-weight:600;font-size:16px;line-height:125%;padding:8px 19px}\n"], dependencies: [{ kind: "directive", type: i1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StatusComponent, decorators: [{
            type: Component,
            args: [{ selector: 'status', template: "<span matTooltip=\"{{ label }}\" class=\"status status-{{label?.toLowerCase()}}\">\n    {{ label }}\n</span>", styles: [".status{background:#F6544C;border-radius:1000px;font-style:normal;font-weight:600;font-size:16px;line-height:125%;padding:8px 19px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { label: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RhYmxlL3NyYy9saWIvY2VsbHMtY29tcG9uZW50L3N0YXR1cy9zdGF0dXMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvc3RhdHVzL3N0YXR1cy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQzs7O0FBT3pELE1BQU0sT0FBTyxlQUFlO0lBRzFCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7SUFDUixDQUFDOzs2R0FOVSxlQUFlO2lHQUFmLGVBQWUsMEVDUDVCLDhHQUVPOzRGREtNLGVBQWU7a0JBTDNCLFNBQVM7K0JBQ0UsUUFBUTswRUFLVCxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3RhdHVzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0YXR1cy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3N0YXR1cy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RhdHVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbn1cbiIsIjxzcGFuIG1hdFRvb2x0aXA9XCJ7eyBsYWJlbCB9fVwiIGNsYXNzPVwic3RhdHVzIHN0YXR1cy17e2xhYmVsPy50b0xvd2VyQ2FzZSgpfX1cIj5cbiAgICB7eyBsYWJlbCB9fVxuPC9zcGFuPiJdfQ==