import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../table.service";
import * as i2 from "../../translate.service";
import * as i3 from "@angular/material/tooltip";
export class EquipementStatusComponent {
    // private params: any = {};
    constructor(changeDetectorRefs, service, translate) {
        this.changeDetectorRefs = changeDetectorRefs;
        this.service = service;
        this.translate = translate;
        this.css = {};
        this.status = '';
        this.css.maxWidth = String((this.size || 22)) + 'px';
        this.css.maxHeight = String((this.size || 22)) + 'px';
        //this.params = this.service.settingConfig.equipmentStatus;
    }
    ngOnInit() {
        this.css.maxWidth = String((this.size || 22)) + 'px';
        this.css.maxHeight = String((this.size || 22)) + 'px';
        const params = this.service.settingConfig.equipmentStatus; /*{
          "actif": "/assets/icons/status/actif.png",
          "oui": "/assets/icons/status/actif.png",
          "hs": "/assets/icons/status/HS.png",
          "inactif": "/assets/icons/status/inactif.png",
          "non": "/assets/icons/status/inactif.png",
          "spare": "/assets/icons/status/spare.png",
        }*/
        const clean = (this.type || "").toLocaleLowerCase().replace(/[^A-Z0-9]+/ig, "");
        switch (clean) {
            case 'actif':
                this.status = this.translate.translate(this.lang, 'ACTIVE');
                break;
            case 'spare':
                this.status = 'Spare';
                break;
            case '':
                this.status = '';
                break;
            default:
                this.status = this.translate.translate(this.lang, 'KO');
                break;
        }
        if (params[clean]) {
            this.icon = params[clean];
        }
        else {
            this.icon = params['default'];
        }
        this.changeDetectorRefs.detectChanges();
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
}
EquipementStatusComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: EquipementStatusComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1.TableService }, { token: i2.TranslateService }], target: i0.ɵɵFactoryTarget.Component });
EquipementStatusComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: EquipementStatusComponent, selector: "app-equipement-status", inputs: { type: "type", size: "size", lang: "lang" }, usesOnChanges: true, ngImport: i0, template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\" class=\"equipement-status\">\n    <!-- {{ status }} -->\n</span>", styles: [""], dependencies: [{ kind: "directive", type: i3.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: EquipementStatusComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-equipement-status', template: "<span [style]=\"css\" matTooltip=\"{{type}}\">\n    <img [src]=\"icon\" [style]=\"css\" class=\"equipement-status\">\n    <!-- {{ status }} -->\n</span>" }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.TableService }, { type: i2.TranslateService }]; }, propDecorators: { type: [{
                type: Input
            }], size: [{
                type: Input
            }], lang: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvZXF1aXBlbWVudC1zdGF0dXMvZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvZXF1aXBlbWVudC1zdGF0dXMvZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFvQixTQUFTLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFTcEcsTUFBTSxPQUFPLHlCQUF5QjtJQVNwQyw0QkFBNEI7SUFFNUIsWUFBb0Isa0JBQXFDLEVBQVUsT0FBcUIsRUFDOUUsU0FBMkI7UUFEakIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWM7UUFDOUUsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFSOUIsUUFBRyxHQUFRLEVBQUUsQ0FBQTtRQUdwQixXQUFNLEdBQUcsRUFBRSxDQUFDO1FBTVYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNyRCxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQ3RELDJEQUEyRDtJQUM3RCxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDckQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztRQUV0RCxNQUFNLE1BQU0sR0FBUSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7Ozs7OztXQU83RDtRQUNILE1BQU0sS0FBSyxHQUFXLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEYsUUFBUSxLQUFLLEVBQUU7WUFDYixLQUFLLE9BQU87Z0JBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM5RCxNQUFNO1lBQ04sS0FBSyxPQUFPO2dCQUNWLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO2dCQUN4QixNQUFNO1lBQ04sS0FBSyxFQUFFO2dCQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNuQixNQUFNO1lBQ047Z0JBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMxRCxNQUFNO1NBQ1A7UUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzQjthQUFNO1lBQ0wsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDL0I7UUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7dUhBdkRVLHlCQUF5QjsyR0FBekIseUJBQXlCLHdJQ1R0QywwSkFHTzs0RkRNTSx5QkFBeUI7a0JBTHJDLFNBQVM7K0JBQ0UsdUJBQXVCO2tLQUt4QixJQUFJO3NCQUFaLEtBQUs7Z0JBRUcsSUFBSTtzQkFBWixLQUFLO2dCQUVHLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGFibGVTZXJ2aWNlfSBmcm9tIFwiLi4vLi4vdGFibGUuc2VydmljZVwiO1xuaW1wb3J0IHsgVHJhbnNsYXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3RyYW5zbGF0ZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWVxdWlwZW1lbnQtc3RhdHVzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2VxdWlwZW1lbnQtc3RhdHVzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZXF1aXBlbWVudC1zdGF0dXMuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBFcXVpcGVtZW50U3RhdHVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG4gIHB1YmxpYyBpY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNpemU6IG51bWJlciB8IHN0cmluZztcbiAgcHVibGljIGNzczogYW55ID0ge31cbiAgQElucHV0KCkgbGFuZzogc3RyaW5nO1xuXG4gIHN0YXR1cyA9ICcnO1xuXG4gIC8vIHByaXZhdGUgcGFyYW1zOiBhbnkgPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmczogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgc2VydmljZTogVGFibGVTZXJ2aWNlLCBcbiAgICBwcml2YXRlIHRyYW5zbGF0ZTogVHJhbnNsYXRlU2VydmljZSkge1xuICAgIHRoaXMuY3NzLm1heFdpZHRoID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgMjIpKSArICdweCc7XG4gICAgdGhpcy5jc3MubWF4SGVpZ2h0ID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgMjIpKSArICdweCc7XG4gICAgLy90aGlzLnBhcmFtcyA9IHRoaXMuc2VydmljZS5zZXR0aW5nQ29uZmlnLmVxdWlwbWVudFN0YXR1cztcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY3NzLm1heFdpZHRoID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgMjIpKSArICdweCc7XG4gICAgdGhpcy5jc3MubWF4SGVpZ2h0ID0gU3RyaW5nKCh0aGlzLnNpemUgfHwgMjIpKSArICdweCc7XG5cbiAgICBjb25zdCBwYXJhbXM6IGFueSA9IHRoaXMuc2VydmljZS5zZXR0aW5nQ29uZmlnLmVxdWlwbWVudFN0YXR1czsgLyp7XG4gICAgICBcImFjdGlmXCI6IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvYWN0aWYucG5nXCIsXG4gICAgICBcIm91aVwiOiBcIi9hc3NldHMvaWNvbnMvc3RhdHVzL2FjdGlmLnBuZ1wiLFxuICAgICAgXCJoc1wiOiBcIi9hc3NldHMvaWNvbnMvc3RhdHVzL0hTLnBuZ1wiLFxuICAgICAgXCJpbmFjdGlmXCI6IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvaW5hY3RpZi5wbmdcIixcbiAgICAgIFwibm9uXCI6IFwiL2Fzc2V0cy9pY29ucy9zdGF0dXMvaW5hY3RpZi5wbmdcIixcbiAgICAgIFwic3BhcmVcIjogXCIvYXNzZXRzL2ljb25zL3N0YXR1cy9zcGFyZS5wbmdcIixcbiAgICB9Ki9cbiAgICBjb25zdCBjbGVhbjogc3RyaW5nID0gKHRoaXMudHlwZSB8fCBcIlwiKS50b0xvY2FsZUxvd2VyQ2FzZSgpLnJlcGxhY2UoL1teQS1aMC05XSsvaWcsIFwiXCIpO1xuICAgIHN3aXRjaCAoY2xlYW4pIHtcbiAgICAgIGNhc2UgJ2FjdGlmJzpcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB0aGlzLnRyYW5zbGF0ZS50cmFuc2xhdGUodGhpcy5sYW5nLCAnQUNUSVZFJyk7XG4gICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NwYXJlJzpcbiAgICAgICAgdGhpcy5zdGF0dXMgPSAnU3BhcmUnO1xuICAgICAgYnJlYWs7XG4gICAgICBjYXNlICcnOlxuICAgICAgICB0aGlzLnN0YXR1cyA9ICcnO1xuICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLnN0YXR1cyA9IHRoaXMudHJhbnNsYXRlLnRyYW5zbGF0ZSh0aGlzLmxhbmcsICdLTycpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChwYXJhbXNbY2xlYW5dKSB7XG4gICAgICB0aGlzLmljb24gPSBwYXJhbXNbY2xlYW5dO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmljb24gPSBwYXJhbXNbJ2RlZmF1bHQnXTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZnMuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIHRoaXMubmdPbkluaXQoKTtcbiAgfVxuXG59XG4iLCI8c3BhbiBbc3R5bGVdPVwiY3NzXCIgbWF0VG9vbHRpcD1cInt7dHlwZX19XCI+XG4gICAgPGltZyBbc3JjXT1cImljb25cIiBbc3R5bGVdPVwiY3NzXCIgY2xhc3M9XCJlcXVpcGVtZW50LXN0YXR1c1wiPlxuICAgIDwhLS0ge3sgc3RhdHVzIH19IC0tPlxuPC9zcGFuPiJdfQ==