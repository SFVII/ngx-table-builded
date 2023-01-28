import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
export class StatusIconComponent {
    constructor() { }
    ngOnInit() {
        switch (this.label.toLocaleLowerCase()) {
            case 'closed':
            case 'cloturé':
                this.src = '/assets/icons/status/green-dot.svg';
                break;
            default:
                this.src = '/assets/icons/status/yellow-dot.svg';
                break;
        }
    }
}
StatusIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StatusIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
StatusIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: StatusIconComponent, selector: "status-icon", inputs: { label: "label" }, ngImport: i0, template: "<span matTooltip=\"{{ label }}\" class=\"status status-{{label?.toLowerCase()}}\">\n    <img src=\"{{ src }}\">\n    {{ label }}\n</span>", styles: [""], dependencies: [{ kind: "directive", type: i1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: StatusIconComponent, decorators: [{
            type: Component,
            args: [{ selector: 'status-icon', template: "<span matTooltip=\"{{ label }}\" class=\"status status-{{label?.toLowerCase()}}\">\n    <img src=\"{{ src }}\">\n    {{ label }}\n</span>" }]
        }], ctorParameters: function () { return []; }, propDecorators: { label: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLWljb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvc3RhdHVzLWljb24vc3RhdHVzLWljb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvc3RhdHVzLWljb24vc3RhdHVzLWljb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7OztBQU96RCxNQUFNLE9BQU8sbUJBQW1CO0lBSzlCLGdCQUFnQixDQUFDO0lBRWpCLFFBQVE7UUFDTixRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsRUFBRTtZQUN0QyxLQUFLLFFBQVEsQ0FBQztZQUNkLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsR0FBRyxHQUFHLG9DQUFvQyxDQUFBO2dCQUNqRCxNQUFNO1lBQ047Z0JBQ0UsSUFBSSxDQUFDLEdBQUcsR0FBRyxxQ0FBcUMsQ0FBQztnQkFDbkQsTUFBTTtTQUNQO0lBQ0gsQ0FBQzs7aUhBakJVLG1CQUFtQjtxR0FBbkIsbUJBQW1CLCtFQ1BoQywySUFHTzs0RkRJTSxtQkFBbUI7a0JBTC9CLFNBQVM7K0JBQ0UsYUFBYTswRUFLZCxLQUFLO3NCQUFiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3RhdHVzLWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vc3RhdHVzLWljb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdGF0dXMtaWNvbi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3RhdHVzSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGxhYmVsOiBzdHJpbmc7XG4gIFxuICBzcmM6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHN3aXRjaCAodGhpcy5sYWJlbC50b0xvY2FsZUxvd2VyQ2FzZSgpKSB7XG4gICAgICBjYXNlICdjbG9zZWQnOlxuICAgICAgY2FzZSAnY2xvdHVyw6knOlxuICAgICAgICB0aGlzLnNyYyA9ICcvYXNzZXRzL2ljb25zL3N0YXR1cy9ncmVlbi1kb3Quc3ZnJ1xuICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBcbiAgICAgICAgdGhpcy5zcmMgPSAnL2Fzc2V0cy9pY29ucy9zdGF0dXMveWVsbG93LWRvdC5zdmcnO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbn1cbiIsIjxzcGFuIG1hdFRvb2x0aXA9XCJ7eyBsYWJlbCB9fVwiIGNsYXNzPVwic3RhdHVzIHN0YXR1cy17e2xhYmVsPy50b0xvd2VyQ2FzZSgpfX1cIj5cbiAgICA8aW1nIHNyYz1cInt7IHNyYyB9fVwiPlxuICAgIHt7IGxhYmVsIH19XG48L3NwYW4+Il19