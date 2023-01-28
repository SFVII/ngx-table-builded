import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../table.service";
import * as i2 from "../../translate.service";
import * as i3 from "@angular/material/tooltip";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/icon";
export class CustomerRankComponent {
    constructor(changeDetectorRefs, service, local) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.service = service;
        this.local = local;
        this.notSpecified = false;
        this.tooltip = '';
    }
    ngOnInit() {
        const config = this.service.settingConfig.customerRank || ['gold', 'silver', 'bronze', 'default', 'access'];
        if (this.type) {
            this._type = (this.type || '').replace(/[^A-Z0-9]+/ig, "");
            for (let c of config) {
                if (this._type.toLocaleLowerCase() === 'default') {
                    // this.type = 'Classic'.toUpperCase();
                    this.type = this.local.translate(this.lang, 'NS');
                    this.tooltip = this.local.translate(this.lang, 'CONTRACT_TYPE') + ' : ' + this.local.translate(this.lang, 'NOT_SPECIFIED');
                    this.notSpecified = true;
                    // this.typeClass = c.toLocaleLowerCase();
                }
                else if (this._type.toLocaleLowerCase() === c.toLocaleLowerCase()) {
                    this.typeClass = c.toLocaleLowerCase();
                    this.type = this.type.toUpperCase();
                    this.tooltip = this.local.translate(this.lang, 'CONTRACT_TYPE') + ' : ' + this.type;
                    this.notSpecified = false;
                }
            }
        }
        else {
            // this.type = 'Classic'.toUpperCase();
            // this.typeClass = 'default';
            this.type = this.local.translate(this.lang, 'NS');
            this.notSpecified = true;
            this.tooltip = this.local.translate(this.lang, 'CONTRACT_TYPE') + ' : ' + this.local.translate(this.lang, 'NOT_SPECIFIED');
        }
        /*  if (this._type.toLocaleLowerCase() === 'gold') {
            this.typeClass = 'gold'
            this.type = this.type.toUpperCase()
          } else if (this._type.toLocaleLowerCase() === 'silver') {
            this.typeClass = 'silver'
            this.type = this.type.toUpperCase()
          } else if (this._type.toLocaleLowerCase() === 'bronze') {
            this.typeClass = 'bronze'
            this.type = this.type.toUpperCase()
          } else {
            this.type = 'Classic'.toUpperCase();
            this.typeClass = 'default'
          }
          this.changeDetectorRefs.detectChanges();*/
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
CustomerRankComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CustomerRankComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.TableService }, { token: i2.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
CustomerRankComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: CustomerRankComponent, selector: "app-customer-rank", inputs: { type: "type", lang: "lang" }, usesOnChanges: true, ngImport: i0, template: "<span *ngIf=\"!notSpecified\" [class]=\"typeClass\" matTooltip=\"{{tooltip}} \">\n  <span>{{type}}</span><mat-icon *ngIf=\"type !== 'CLASSIC'\">star_rate</mat-icon>\n</span>\n\n<span *ngIf=\"notSpecified\" class=\"default\" matTooltip=\"{{tooltip}}\">\n  <span>{{type}}</span>\n</span>", styles: [".gold{font-size:12px;font-weight:700;color:gold}.silver{font-size:12px;font-weight:700;color:silver}.bronze{font-weight:700;font-size:12px;color:#cd7f32}.default{font-weight:700;font-size:12px;color:#000}\n"], dependencies: [{ kind: "directive", type: i3.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i5.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: CustomerRankComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-customer-rank', template: "<span *ngIf=\"!notSpecified\" [class]=\"typeClass\" matTooltip=\"{{tooltip}} \">\n  <span>{{type}}</span><mat-icon *ngIf=\"type !== 'CLASSIC'\">star_rate</mat-icon>\n</span>\n\n<span *ngIf=\"notSpecified\" class=\"default\" matTooltip=\"{{tooltip}}\">\n  <span>{{type}}</span>\n</span>", styles: [".gold{font-size:12px;font-weight:700;color:gold}.silver{font-size:12px;font-weight:700;color:silver}.bronze{font-weight:700;font-size:12px;color:#cd7f32}.default{font-weight:700;font-size:12px;color:#000}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.TableService }, { type: i2.TranslateService }]; }, propDecorators: { type: [{
                type: Input
            }], lang: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItcmFuay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL2NlbGxzLWNvbXBvbmVudC9jdXN0b21lci1yYW5rL2N1c3RvbWVyLXJhbmsuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvY3VzdG9tZXItcmFuay9jdXN0b21lci1yYW5rLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBb0IsU0FBUyxFQUFFLEtBQUssRUFBbUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7QUFTcEcsTUFBTSxPQUFPLHFCQUFxQjtJQVNoQyxZQUNVLGtCQUFxQyxFQUNyQyxPQUFxQixFQUNyQixLQUF1QjtRQUZ2Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFDckIsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFOakMsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsWUFBTyxHQUFHLEVBQUUsQ0FBQztJQU9iLENBQUM7SUFFRCxRQUFRO1FBQ04sTUFBTSxNQUFNLEdBQWEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RILElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDM0QsS0FBSyxJQUFJLENBQUMsSUFBSSxNQUFNLEVBQUU7Z0JBQ3BCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxLQUFLLFNBQVMsRUFBRTtvQkFDaEQsdUNBQXVDO29CQUN2QyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ2xELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztvQkFDM0gsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7b0JBQ3pCLDBDQUEwQztpQkFDM0M7cUJBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixFQUFFLEVBQUU7b0JBQ25FLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDcEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO29CQUNwRixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztpQkFDM0I7YUFDRjtTQUNGO2FBQU07WUFDTCx1Q0FBdUM7WUFDdkMsOEJBQThCO1lBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDLENBQUM7U0FDNUg7UUFHRDs7Ozs7Ozs7Ozs7OztvREFhNEM7SUFDOUMsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7bUhBN0RVLHFCQUFxQjt1R0FBckIscUJBQXFCLHNIQ1RsQywrUkFNTzs0RkRHTSxxQkFBcUI7a0JBTGpDLFNBQVM7K0JBQ0UsbUJBQW1CO2tLQUtwQixJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtUYWJsZVNlcnZpY2V9IGZyb20gXCIuLi8uLi90YWJsZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBUcmFuc2xhdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdHJhbnNsYXRlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtY3VzdG9tZXItcmFuaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b21lci1yYW5rLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY3VzdG9tZXItcmFuay5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyUmFua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuICBASW5wdXQoKSBsYW5nOiBzdHJpbmc7XG4gIHB1YmxpYyB0eXBlQ2xhc3M6IHN0cmluZztcbiAgcHJpdmF0ZSBfdHlwZTogc3RyaW5nO1xuXG4gIG5vdFNwZWNpZmllZCA9IGZhbHNlO1xuICB0b29sdGlwID0gJyc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZnM6IENoYW5nZURldGVjdG9yUmVmLCBcbiAgICBwcml2YXRlIHNlcnZpY2U6IFRhYmxlU2VydmljZSxcbiAgICBwcml2YXRlIGxvY2FsOiBUcmFuc2xhdGVTZXJ2aWNlXG4gICkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc3QgY29uZmlnOiBzdHJpbmdbXSA9IHRoaXMuc2VydmljZS5zZXR0aW5nQ29uZmlnLmN1c3RvbWVyUmFuayB8fCBbJ2dvbGQnLCAnc2lsdmVyJywgJ2Jyb256ZScsICdkZWZhdWx0JywgJ2FjY2VzcyddO1xuICAgIGlmICh0aGlzLnR5cGUpIHtcbiAgICAgIHRoaXMuX3R5cGUgPSAodGhpcy50eXBlIHx8ICcnKS5yZXBsYWNlKC9bXkEtWjAtOV0rL2lnLCBcIlwiKTtcbiAgICAgIGZvciAobGV0IGMgb2YgY29uZmlnKSB7XG4gICAgICAgIGlmICh0aGlzLl90eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICAgIC8vIHRoaXMudHlwZSA9ICdDbGFzc2ljJy50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgIHRoaXMudHlwZSA9IHRoaXMubG9jYWwudHJhbnNsYXRlKHRoaXMubGFuZywgJ05TJyk7XG4gICAgICAgICAgdGhpcy50b29sdGlwID0gdGhpcy5sb2NhbC50cmFuc2xhdGUodGhpcy5sYW5nLCAnQ09OVFJBQ1RfVFlQRScpICsgJyA6ICcgKyB0aGlzLmxvY2FsLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdOT1RfU1BFQ0lGSUVEJyk7XG4gICAgICAgICAgdGhpcy5ub3RTcGVjaWZpZWQgPSB0cnVlO1xuICAgICAgICAgIC8vIHRoaXMudHlwZUNsYXNzID0gYy50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX3R5cGUudG9Mb2NhbGVMb3dlckNhc2UoKSA9PT0gYy50b0xvY2FsZUxvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgdGhpcy50eXBlQ2xhc3MgPSBjLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgdGhpcy50b29sdGlwID0gdGhpcy5sb2NhbC50cmFuc2xhdGUodGhpcy5sYW5nLCAnQ09OVFJBQ1RfVFlQRScpICsgJyA6ICcgKyB0aGlzLnR5cGU7XG4gICAgICAgICAgdGhpcy5ub3RTcGVjaWZpZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyB0aGlzLnR5cGUgPSAnQ2xhc3NpYycudG9VcHBlckNhc2UoKTtcbiAgICAgIC8vIHRoaXMudHlwZUNsYXNzID0gJ2RlZmF1bHQnO1xuICAgICAgdGhpcy50eXBlID0gdGhpcy5sb2NhbC50cmFuc2xhdGUodGhpcy5sYW5nLCAnTlMnKTtcbiAgICAgIHRoaXMubm90U3BlY2lmaWVkID0gdHJ1ZTtcbiAgICAgIHRoaXMudG9vbHRpcCA9IHRoaXMubG9jYWwudHJhbnNsYXRlKHRoaXMubGFuZywgJ0NPTlRSQUNUX1RZUEUnKSArICcgOiAnICsgdGhpcy5sb2NhbC50cmFuc2xhdGUodGhpcy5sYW5nLCAnTk9UX1NQRUNJRklFRCcpO1xuICAgIH1cblxuXG4gICAgLyogIGlmICh0aGlzLl90eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09ICdnb2xkJykge1xuICAgICAgICB0aGlzLnR5cGVDbGFzcyA9ICdnb2xkJ1xuICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLnR5cGUudG9VcHBlckNhc2UoKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl90eXBlLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT09ICdzaWx2ZXInKSB7XG4gICAgICAgIHRoaXMudHlwZUNsYXNzID0gJ3NpbHZlcidcbiAgICAgICAgdGhpcy50eXBlID0gdGhpcy50eXBlLnRvVXBwZXJDYXNlKClcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fdHlwZS50b0xvY2FsZUxvd2VyQ2FzZSgpID09PSAnYnJvbnplJykge1xuICAgICAgICB0aGlzLnR5cGVDbGFzcyA9ICdicm9uemUnXG4gICAgICAgIHRoaXMudHlwZSA9IHRoaXMudHlwZS50b1VwcGVyQ2FzZSgpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnR5cGUgPSAnQ2xhc3NpYycudG9VcHBlckNhc2UoKTtcbiAgICAgICAgdGhpcy50eXBlQ2xhc3MgPSAnZGVmYXVsdCdcbiAgICAgIH1cbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWZzLmRldGVjdENoYW5nZXMoKTsqL1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMubmdPbkluaXQoKTtcbiAgfVxufVxuIiwiPHNwYW4gKm5nSWY9XCIhbm90U3BlY2lmaWVkXCIgW2NsYXNzXT1cInR5cGVDbGFzc1wiIG1hdFRvb2x0aXA9XCJ7e3Rvb2x0aXB9fSBcIj5cbiAgPHNwYW4+e3t0eXBlfX08L3NwYW4+PG1hdC1pY29uICpuZ0lmPVwidHlwZSAhPT0gJ0NMQVNTSUMnXCI+c3Rhcl9yYXRlPC9tYXQtaWNvbj5cbjwvc3Bhbj5cblxuPHNwYW4gKm5nSWY9XCJub3RTcGVjaWZpZWRcIiBjbGFzcz1cImRlZmF1bHRcIiBtYXRUb29sdGlwPVwie3t0b29sdGlwfX1cIj5cbiAgPHNwYW4+e3t0eXBlfX08L3NwYW4+XG48L3NwYW4+Il19