import { Component, Input } from '@angular/core';
import * as database from './ngx-flags.database';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NgxFlagsComponent {
    constructor() {
        this.size = 48;
        this.class = '';
        this.database = database.db;
        this.countryCode = '';
    }
    ngOnChanges(changes) {
        this.setImage();
    }
    setImage() {
        this.imageUrl = `assets/flags/${this.getFlag(this.getCode())}.svg`;
        this.style = {
            borderRadius: this.getFormat() == FORMAT.ROUND ? '9999px' : '0%',
            width: `10px`,
            height: '10px',
            marginRight: '5px',
            backgroundImage: `url("${this.imageUrl}")`,
        };
    }
    getSize() {
        return isNaN(+this.size) ? +SIZE[this.size.toUpperCase()] : this.size;
    }
    getFormat() {
        return this.format ? this.format.toLowerCase() : FORMAT.NONE;
    }
    getCode() {
        return this.country.toLowerCase();
    }
    getFlag(code) {
        return this.database[code.toLowerCase()];
    }
}
NgxFlagsComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgxFlagsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NgxFlagsComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: NgxFlagsComponent, selector: "flag", inputs: { country: "country", format: "format", size: "size", class: "class" }, usesOnChanges: true, ngImport: i0, template: `<div *ngIf="this.country" [style]="this.style" [ngClass]="['ngx-flag', this.class]"></div>`, isInline: true, styles: [".ngx-flag{display:inline-block;background-repeat:no-repeat;background-position:center;background-size:cover}\n"], dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NgxFlagsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'flag', template: `<div *ngIf="this.country" [style]="this.style" [ngClass]="['ngx-flag', this.class]"></div>`, styles: [".ngx-flag{display:inline-block;background-repeat:no-repeat;background-position:center;background-size:cover}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { country: [{
                type: Input
            }], format: [{
                type: Input
            }], size: [{
                type: Input
            }], class: [{
                type: Input
            }] } });
var FORMAT;
(function (FORMAT) {
    FORMAT["NONE"] = "none";
    FORMAT["ROUND"] = "round";
    FORMAT["SQUARE"] = "square";
})(FORMAT || (FORMAT = {}));
var SIZE;
(function (SIZE) {
    SIZE[SIZE["XXS"] = 8] = "XXS";
    SIZE[SIZE["XS"] = 16] = "XS";
    SIZE[SIZE["S"] = 24] = "S";
    SIZE[SIZE["M"] = 32] = "M";
    SIZE[SIZE["L"] = 48] = "L";
    SIZE[SIZE["XL"] = 64] = "XL";
    SIZE[SIZE["XXL"] = 96] = "XXL";
})(SIZE || (SIZE = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZsYWcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvbmd4LWZsYWcvbmd4LWZsYWcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEtBQUssUUFBUSxNQUFNLHNCQUFzQixDQUFDOzs7QUFnQmpELE1BQU0sT0FBTyxpQkFBaUI7SUFXNUI7UUFSUyxTQUFJLEdBQVEsRUFBRSxDQUFDO1FBQ2YsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUlyQixhQUFRLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUN2QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQUVqQixDQUFDO0lBRWhCLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLGdCQUFnQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7UUFDbkUsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJO1lBQ2hFLEtBQUssRUFBRSxNQUFNO1lBQ2IsTUFBTSxFQUFFLE1BQU07WUFDZCxXQUFXLEVBQUUsS0FBSztZQUNsQixlQUFlLEVBQUUsUUFBUSxJQUFJLENBQUMsUUFBUSxJQUFJO1NBQzNDLENBQUM7SUFDSixDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDeEUsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDL0QsQ0FBQztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQUVELE9BQU8sQ0FBQyxJQUFZO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUMzQyxDQUFDOzsrR0ExQ1UsaUJBQWlCO21HQUFqQixpQkFBaUIsaUpBWmxCLDRGQUE0Rjs0RkFZM0YsaUJBQWlCO2tCQWQ3QixTQUFTOytCQUNFLE1BQU0sWUFDTiw0RkFBNEY7MEVBYTdGLE9BQU87c0JBQWYsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSzs7QUF5Q1IsSUFBSyxNQUlKO0FBSkQsV0FBSyxNQUFNO0lBQ1QsdUJBQWEsQ0FBQTtJQUNiLHlCQUFlLENBQUE7SUFDZiwyQkFBaUIsQ0FBQTtBQUNuQixDQUFDLEVBSkksTUFBTSxLQUFOLE1BQU0sUUFJVjtBQUVELElBQUssSUFRSjtBQVJELFdBQUssSUFBSTtJQUNQLDZCQUFPLENBQUE7SUFDUCw0QkFBTyxDQUFBO0lBQ1AsMEJBQU0sQ0FBQTtJQUNOLDBCQUFNLENBQUE7SUFDTiwwQkFBTSxDQUFBO0lBQ04sNEJBQU8sQ0FBQTtJQUNQLDhCQUFRLENBQUE7QUFDVixDQUFDLEVBUkksSUFBSSxLQUFKLElBQUksUUFRUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZGF0YWJhc2UgZnJvbSAnLi9uZ3gtZmxhZ3MuZGF0YWJhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmbGFnJyxcbiAgdGVtcGxhdGU6IGA8ZGl2ICpuZ0lmPVwidGhpcy5jb3VudHJ5XCIgW3N0eWxlXT1cInRoaXMuc3R5bGVcIiBbbmdDbGFzc109XCJbJ25neC1mbGFnJywgdGhpcy5jbGFzc11cIj48L2Rpdj5gLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgICAubmd4LWZsYWcge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIH1cbiAgICBgLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hGbGFnc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGNvdW50cnk6IHN0cmluZztcbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpemU6IGFueSA9IDQ4O1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nID0gJyc7XG5cbiAgcHVibGljIGltYWdlVXJsOiBzdHJpbmc7XG4gIHB1YmxpYyBzdHlsZTtcbiAgcHVibGljIGRhdGFiYXNlID0gZGF0YWJhc2UuZGI7XG4gIHB1YmxpYyBjb3VudHJ5Q29kZTogc3RyaW5nID0gJyc7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnNldEltYWdlKCk7XG4gIH1cblxuICBzZXRJbWFnZSgpOiB2b2lkIHtcbiAgICB0aGlzLmltYWdlVXJsID0gYGFzc2V0cy9mbGFncy8ke3RoaXMuZ2V0RmxhZyh0aGlzLmdldENvZGUoKSl9LnN2Z2A7XG4gICAgdGhpcy5zdHlsZSA9IHtcbiAgICAgIGJvcmRlclJhZGl1czogdGhpcy5nZXRGb3JtYXQoKSA9PSBGT1JNQVQuUk9VTkQgPyAnOTk5OXB4JyA6ICcwJScsXG4gICAgICB3aWR0aDogYDEwcHhgLFxuICAgICAgaGVpZ2h0OiAnMTBweCcsXG4gICAgICBtYXJnaW5SaWdodDogJzVweCcsXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke3RoaXMuaW1hZ2VVcmx9XCIpYCxcbiAgICB9O1xuICB9XG5cbiAgZ2V0U2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiBpc05hTigrdGhpcy5zaXplKSA/ICtTSVpFW3RoaXMuc2l6ZS50b1VwcGVyQ2FzZSgpXSA6IHRoaXMuc2l6ZTtcbiAgfVxuXG4gIGdldEZvcm1hdCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmZvcm1hdCA/IHRoaXMuZm9ybWF0LnRvTG93ZXJDYXNlKCkgOiBGT1JNQVQuTk9ORTtcbiAgfVxuXG4gIGdldENvZGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb3VudHJ5LnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBnZXRGbGFnKGNvZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YWJhc2VbY29kZS50b0xvd2VyQ2FzZSgpXTtcbiAgfVxufVxuXG5lbnVtIEZPUk1BVCB7XG4gIE5PTkUgPSAnbm9uZScsXG4gIFJPVU5EID0gJ3JvdW5kJyxcbiAgU1FVQVJFID0gJ3NxdWFyZScsXG59XG5cbmVudW0gU0laRSB7XG4gIFhYUyA9IDgsXG4gIFhTID0gMTYsXG4gIFMgPSAyNCxcbiAgTSA9IDMyLFxuICBMID0gNDgsXG4gIFhMID0gNjQsXG4gIFhYTCA9IDk2LFxufSJdfQ==