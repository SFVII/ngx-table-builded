import { Component, Input, ViewChild } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../../table.service";
import * as i2 from "@angular/common";
export class NameAvatarComponent {
    constructor(service) {
        this.service = service;
        this.fontSize = '44px';
        this.textSize = '14px';
        this._padding = '4px';
        this._display = 'flex';
        this._borderRadius = '50px';
        this._size = 'cover';
        this.afterInit = false;
        this.defaultFontSize = 12;
        this.defaultDimension = 24;
    }
    ngOnInit() {
        if (this.src && !this.src.includes('assets')) {
            let deg = Math.random() * (10 - 360) + 10;
            /*this.icon.nativeElement.style.backgroundImage = this.service.settingConfig.nameAvatarBackgroundColor; /*`linear-gradient(${deg}deg, #9d107d,
                                                             #8b3391, #7647a0, #5f56a8, #4862ab)`;*/
            // this.icon.nativeElement.style.background = '#C2C8D5 0% 0% no-repeat padding-box';
            this.icon.nativeElement.style.background = '#151616';
            this.icon.nativeElement.style.border = '1.33333px solid rgba(255, 255, 255, 0.15)';
            this.icon.nativeElement.style.borderRadius = this._borderRadius;
            this.icon.nativeElement.style.marginLeft = '16px';
            this.icon.nativeElement.style.display = this._display;
            this.icon.nativeElement.style.width = this.fontSize || '44px';
            this.icon.nativeElement.style.height = this.fontSize || '44px';
            this.icon.nativeElement.style.fontSize = (parseInt(this.fontSize, 0) / 2) + 'px';
            this.icon.nativeElement.style.padding = (parseInt(this.icon.nativeElement.style.fontSize, 0) / 3) + 'px';
            this.icon.nativeElement.style.fontWeight = '900';
            this.icon.nativeElement.style.font = "normal normal 900 " + this.textSize + "/20px 'proxima nova'";
            this.icon.nativeElement.style.color = '#FFFFFF';
            const tmp = this.src.split(' ');
            this.letter = (tmp[0][0] + (tmp[1] && tmp[1][0] ? tmp[1][0] : tmp[0][1])).toUpperCase();
        }
        else if (this.src && this.src.includes('assets')) {
            //this.icon.nativeElement.style.backgroundImage = this.src;
            /*this.icon.nativeElement.style.borderRadius = this._borderRadius;
            this.icon.nativeElement.style.marginLeft = '16px';
            this.icon.nativeElement.style.display = this._display;
            this.icon.nativeElement.style.width = this.fontSize;
            this.icon.nativeElement.style.height = this.fontSize;
            this.icon.nativeElement.style.padding = (parseInt(this.icon.nativeElement.style.fontSize, 0) / 3) + 'px';*/
        }
        else if (this.afterInit === false) {
            this.afterInit = true;
        }
    }
    ngAfterViewInit() {
        if (this.afterInit) {
            this.ngOnInit();
        }
    }
    getRatio() {
    }
}
NameAvatarComponent.??fac = i0.????ngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NameAvatarComponent, deps: [{ token: i1.TableService }], target: i0.????FactoryTarget.Component });
NameAvatarComponent.??cmp = i0.????ngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: NameAvatarComponent, selector: "name-avatar", inputs: { src: "src", fontSize: "fontSize", textSize: "textSize" }, viewQueries: [{ propertyName: "icon", first: true, predicate: ["avatar"], descendants: true, static: true }], ngImport: i0, template: "<div [ngStyle]=\"src && src.includes('assets') && {'display': 'none'}\" #avatar>\n    {{letter}}\n</div>\n\n<!-- <img [src]=\"src\" [ngStyle]=\"{'width': fontSize || '44px', 'height': fontSize || '44px',  'vertical-align': 'middle', 'border-radius': _borderRadius}\" *ngIf=\"src && src.includes('assets')\" /> -->\n<div *ngIf=\"src && src.includes('assets')\" [ngStyle]=\"{\n    'background-image': 'url('+src+')',\n    'width': fontSize || '44px', \n    'height': fontSize || '44px',  \n    'vertical-align': 'middle', \n    'border-radius': _borderRadius\n}\" class=\"social_profile_img\">\n  </div>", styles: ["div{align-items:center;justify-content:center;padding:0!important}.social_profile_img{text-align:center;height:44px;border-radius:50%;width:44px;background-position:center;background-size:cover}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.????ngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: NameAvatarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'name-avatar', template: "<div [ngStyle]=\"src && src.includes('assets') && {'display': 'none'}\" #avatar>\n    {{letter}}\n</div>\n\n<!-- <img [src]=\"src\" [ngStyle]=\"{'width': fontSize || '44px', 'height': fontSize || '44px',  'vertical-align': 'middle', 'border-radius': _borderRadius}\" *ngIf=\"src && src.includes('assets')\" /> -->\n<div *ngIf=\"src && src.includes('assets')\" [ngStyle]=\"{\n    'background-image': 'url('+src+')',\n    'width': fontSize || '44px', \n    'height': fontSize || '44px',  \n    'vertical-align': 'middle', \n    'border-radius': _borderRadius\n}\" class=\"social_profile_img\">\n  </div>", styles: ["div{align-items:center;justify-content:center;padding:0!important}.social_profile_img{text-align:center;height:44px;border-radius:50%;width:44px;background-position:center;background-size:cover}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.TableService }]; }, propDecorators: { src: [{
                type: Input
            }], fontSize: [{
                type: Input
            }], textSize: [{
                type: Input
            }], icon: [{
                type: ViewChild,
                args: ['avatar', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZS1hdmF0YXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvbmFtZS1hdmF0YXIvbmFtZS1hdmF0YXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvbmFtZS1hdmF0YXIvbmFtZS1hdmF0YXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixTQUFTLEVBQWMsS0FBSyxFQUFVLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQVE3RixNQUFNLE9BQU8sbUJBQW1CO0lBYzVCLFlBQW9CLE9BQXNCO1FBQXRCLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFaakMsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUNsQixhQUFRLEdBQUcsTUFBTSxDQUFDO1FBR25CLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsYUFBUSxHQUFHLE1BQU0sQ0FBQztRQUNuQixrQkFBYSxHQUFHLE1BQU0sQ0FBQztRQUN0QixVQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsb0JBQWUsR0FBRyxFQUFFLENBQUM7UUFDckIscUJBQWdCLEdBQUcsRUFBRSxDQUFDO0lBRzlCLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDMUMsSUFBSSxHQUFHLEdBQVcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNsRDtvR0FDd0Y7WUFDeEYsb0ZBQW9GO1lBQ3BGLElBQUksQ0FBQyxJQUFJLENBQUMs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UUFBUTtzQkFBaEIsS0FBSztnQkFDK0IsSUFBSTtzQkFBeEMsU0FBUzt1QkFBQyxRQUFRLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RhYmxlU2VydmljZX0gZnJvbSBcIi4uLy4uL3RhYmxlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduYW1lLWF2YXRhcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL25hbWUtYXZhdGFyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9uYW1lLWF2YXRhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5hbWVBdmF0YXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICAgIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICAgIEBJbnB1dCgpIGZvbnRTaXplID0gJzQ0cHgnO1xuICAgIEBJbnB1dCgpIHRleHRTaXplID0gJzE0cHgnO1xuICAgIEBWaWV3Q2hpbGQoJ2F2YXRhcicsIHtzdGF0aWM6IHRydWV9KSBpY29uOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcbiAgICBwdWJsaWMgbGV0dGVyOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBfcGFkZGluZyA9ICc0cHgnO1xuICAgIHByaXZhdGUgX2Rpc3BsYXkgPSAnZmxleCc7XG4gICAgcHVibGljIF9ib3JkZXJSYWRpdXMgPSAnNTBweCc7XG4gICAgcHJpdmF0ZSBfc2l6ZSA9ICdjb3Zlcic7XG4gICAgcHJpdmF0ZSBhZnRlckluaXQgPSBmYWxzZTtcbiAgICBwcml2YXRlIGRlZmF1bHRGb250U2l6ZSA9IDEyO1xuICAgIHByaXZhdGUgZGVmYXVsdERpbWVuc2lvbiA9IDI0O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlIDogVGFibGVTZXJ2aWNlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnNyYyAmJiAhdGhpcy5zcmMuaW5jbHVkZXMoJ2Fzc2V0cycpKSB7XG4gICAgICAgICAgICBsZXQgZGVnOiBudW1iZXIgPSBNYXRoLnJhbmRvbSgpICogKDEwIC0gMzYwKSArIDEwO1xuICAgICAgICAgICAgLyp0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSB0aGlzLnNlcnZpY2Uuc2V0dGluZ0NvbmZpZy5uYW1lQXZhdGFyQmFja2dyb3VuZENvbG9yOyAvKmBsaW5lYXItZ3JhZGllbnQoJHtkZWd9ZGVnLCAjOWQxMDdkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICM4YjMzOTEsICM3NjQ3YTAsICM1ZjU2YTgsICM0ODYyYWIpYDsqL1xuICAgICAgICAgICAgLy8gdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZCA9ICcjQzJDOEQ1IDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveCc7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gJyMxNTE2MTYnXG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5ib3JkZXIgPSAnMS4zMzMzM3B4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSknO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYm9yZGVyUmFkaXVzID0gdGhpcy5fYm9yZGVyUmFkaXVzO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9ICcxNnB4JztcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSB0aGlzLl9kaXNwbGF5O1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUud2lkdGggPSB0aGlzLmZvbnRTaXplIHx8ICc0NHB4JztcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuZm9udFNpemUgfHwgJzQ0cHgnO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSAocGFyc2VJbnQodGhpcy5mb250U2l6ZSwgMCkgLyAyKSArICdweCc7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5wYWRkaW5nID0gKHBhcnNlSW50KHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmZvbnRTaXplLCAwKSAvIDMpICsgJ3B4JztcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmZvbnRXZWlnaHQgPSAnOTAwJztcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmZvbnQgPSBcIm5vcm1hbCBub3JtYWwgOTAwIFwiK3RoaXMudGV4dFNpemUrXCIvMjBweCAncHJveGltYSBub3ZhJ1wiO1xuICAgICAgICAgICAgdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuY29sb3IgPSAnI0ZGRkZGRic7XG4gICAgICAgICAgICBjb25zdCB0bXA6IHN0cmluZ1tdID0gdGhpcy5zcmMuc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHRoaXMubGV0dGVyID0gKHRtcFswXVswXSArICh0bXBbMV0gJiYgdG1wWzFdWzBdID8gdG1wWzFdWzBdIDogdG1wWzBdWzFdKSkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNyYyAmJiB0aGlzLnNyYy5pbmNsdWRlcygnYXNzZXRzJykpIHtcbiAgICAgICAgICAgIC8vdGhpcy5pY29uLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gdGhpcy5zcmM7XG4gICAgICAgICAgICAvKnRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmJvcmRlclJhZGl1cyA9IHRoaXMuX2JvcmRlclJhZGl1cztcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLm1hcmdpbkxlZnQgPSAnMTZweCc7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gdGhpcy5fZGlzcGxheTtcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLndpZHRoID0gdGhpcy5mb250U2l6ZTtcbiAgICAgICAgICAgIHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMuZm9udFNpemU7XG4gICAgICAgICAgICB0aGlzLmljb24ubmF0aXZlRWxlbWVudC5zdHlsZS5wYWRkaW5nID0gKHBhcnNlSW50KHRoaXMuaWNvbi5uYXRpdmVFbGVtZW50LnN0eWxlLmZvbnRTaXplLCAwKSAvIDMpICsgJ3B4JzsqL1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWZ0ZXJJbml0ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5hZnRlckluaXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5hZnRlckluaXQpIHtcbiAgICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFJhdGlvKCkge1xuXG4gICAgfVxuXG59XG4iLCI8ZGl2IFtuZ1N0eWxlXT1cInNyYyAmJiBzcmMuaW5jbHVkZXMoJ2Fzc2V0cycpICYmIHsnZGlzcGxheSc6ICdub25lJ31cIiAjYXZhdGFyPlxuICAgIHt7bGV0dGVyfX1cbjwvZGl2PlxuXG48IS0tIDxpbWcgW3NyY109XCJzcmNcIiBbbmdTdHlsZV09XCJ7J3dpZHRoJzogZm9udFNpemUgfHwgJzQ0cHgnLCAnaGVpZ2h0JzogZm9udFNpemUgfHwgJzQ0cHgnLCAgJ3ZlcnRpY2FsLWFsaWduJzogJ21pZGRsZScsICdib3JkZXItcmFkaXVzJzogX2JvcmRlclJhZGl1c31cIiAqbmdJZj1cInNyYyAmJiBzcmMuaW5jbHVkZXMoJ2Fzc2V0cycpXCIgLz4gLS0+XG48ZGl2ICpuZ0lmPVwic3JjICYmIHNyYy5pbmNsdWRlcygnYXNzZXRzJylcIiBbbmdTdHlsZV09XCJ7XG4gICAgJ2JhY2tncm91bmQtaW1hZ2UnOiAndXJsKCcrc3JjKycpJyxcbiAgICAnd2lkdGgnOiBmb250U2l6ZSB8fCAnNDRweCcsIFxuICAgICdoZWlnaHQnOiBmb250U2l6ZSB8fCAnNDRweCcsICBcbiAgICAndmVydGljYWwtYWxpZ24nOiAnbWlkZGxlJywgXG4gICAgJ2JvcmRlci1yYWRpdXMnOiBfYm9yZGVyUmFkaXVzXG59XCIgY2xhc3M9XCJzb2NpYWxfcHJvZmlsZV9pbWdcIj5cbiAgPC9kaXY+Il19