import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../core-data-table/app-date.pipe";
export class DateFormatComponent {
    constructor() {
        this.timezone = 'fr';
    }
    ngOnInit() {
    }
    run(date) {
        if (date) {
            let t = date.replace('-', '').split(' ');
            return `<span class="">
                    <span class="hour">${t[0]}</span><br>
                    <span class="minute">${t[2]}</span>
                </span>`;
        }
        else {
            return `<span class="time-badge">
                    <span class="hour"></span><br>
                    <span class="minute"></span>
                </span>`;
        }
    }
    ngOnChanges(changes) {
    }
}
DateFormatComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: DateFormatComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DateFormatComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: DateFormatComponent, selector: "date-format", inputs: { date: "date", lang: "lang", timezone: "timezone" }, usesOnChanges: true, ngImport: i0, template: "<span  [innerHTML]=\"date| appDate : lang\"></span>\n", styles: ["span.time-badge{display:block;text-align:center!important;padding-right:25px}span.time-badge .hour{display:block;font-weight:900;font-size:12px}span.time-badge .minute{display:block;font-weight:300;font-size:10px}\n"], dependencies: [{ kind: "pipe", type: i1.AppDatePipe, name: "appDate" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: DateFormatComponent, decorators: [{
            type: Component,
            args: [{ selector: 'date-format', template: "<span  [innerHTML]=\"date| appDate : lang\"></span>\n", styles: ["span.time-badge{display:block;text-align:center!important;padding-right:25px}span.time-badge .hour{display:block;font-weight:900;font-size:12px}span.time-badge .minute{display:block;font-weight:300;font-size:10px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { date: [{
                type: Input
            }], lang: [{
                type: Input
            }], timezone: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1mb3JtYXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvZGF0ZS1mb3JtYXQvZGF0ZS1mb3JtYXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvZGF0ZS1mb3JtYXQvZGF0ZS1mb3JtYXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxLQUFLLEVBQW1DLE1BQU0sZUFBZSxDQUFDOzs7QUFPakYsTUFBTSxPQUFPLG1CQUFtQjtJQU01QjtRQUhTLGFBQVEsR0FBWSxJQUFJLENBQUM7SUFJbEMsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO0lBRUQsR0FBRyxDQUFDLElBQVc7UUFDWCxJQUFJLElBQUksRUFBRTtZQUNOLElBQUksQ0FBQyxHQUFhLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuRCxPQUFRO3lDQUNxQixDQUFDLENBQUMsQ0FBQyxDQUFDOzJDQUNGLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZCLENBQUM7U0FDaEI7YUFBTTtZQUNILE9BQU87Ozt3QkFHSyxDQUFDO1NBQ2hCO0lBQ0wsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtJQUVsQyxDQUFDOztpSEE3QlEsbUJBQW1CO3FHQUFuQixtQkFBbUIsc0lDUGhDLHVEQUNBOzRGRE1hLG1CQUFtQjtrQkFML0IsU0FBUzsrQkFDSSxhQUFhOzBFQUtkLElBQUk7c0JBQVosS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2RhdGUtZm9ybWF0JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vZGF0ZS1mb3JtYXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2RhdGUtZm9ybWF0LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0ZUZvcm1hdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgICBASW5wdXQoKSBkYXRlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgbGFuZzogc3RyaW5nO1xuICAgIEBJbnB1dCgpIHRpbWV6b25lIDogc3RyaW5nID0gJ2ZyJztcbiAgICBwdWJsaWMgZGlzcGxheTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG4gICAgcnVuKGRhdGU6c3RyaW5nKSB7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICBsZXQgdDogc3RyaW5nW10gPSBkYXRlLnJlcGxhY2UoJy0nLCAnJykuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHJldHVybiAgYDxzcGFuIGNsYXNzPVwiXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaG91clwiPiR7dFswXX08L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1pbnV0ZVwiPiR7dFsyXX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPmA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwidGltZS1iYWRnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImhvdXJcIj48L3NwYW4+PGJyPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1pbnV0ZVwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+YDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcblxuICAgIH1cblxufVxuIiwiPHNwYW4gIFtpbm5lckhUTUxdPVwiZGF0ZXwgYXBwRGF0ZSA6IGxhbmdcIj48L3NwYW4+XG4iXX0=