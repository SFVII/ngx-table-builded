import { Component, Input } from '@angular/core';
import { parsePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "../ngx-flag/ngx-flag.component";
export class PhoneDisplayComponent {
    constructor(fb) {
        this.fb = fb;
        this.flag = '';
    }
    ngOnInit() {
        if (this.number) {
            this.display = this.normalize(this.number);
        }
        //this.flag = (this.number && this.number != '' && isValidPhoneNumber(this.number) ? parsePhoneNumber(''+this.number)?.country : 'FR');
        //this.flag = !this.number ? '': this.flag;
    }
    ngOnChanges(changes) {
        this.ngOnInit();
    }
    normalize(str) {
        if (str && isValidPhoneNumber(str)) {
            return parsePhoneNumber(str).formatNational();
        }
        else if (str) {
            /*const phone = parsePhoneNumber(str)
            if (phone) {
                console.log(phone.formatNational())
            }*/
            let p = str.split('+')[1];
            let newp = '';
            if (p) {
                for (let i = 0; i < p.length; i++) {
                    if (p.split('')[i]) {
                        if (i % 2 == 0 && i > 0) {
                            newp += ' ';
                        }
                        newp += p.split('')[i];
                    }
                }
            }
            return newp;
            /*if (phone.isValid()) {
                return phone.formatNational();
            } else {
                return '';
            }*/
        }
        else {
            return '';
        }
        str = (str || '').replace(/[^\d]/g, "");
        if (str.length == 10) {
            //reformat and return phone number
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+33) $1.$2.$3.$4.$5");
        }
        else if (str.length > 10 && str.length <= 13) {
            if (str.length === 11) {
                //str = '0'+str;
            }
            //if ( str.length === 13 && str.includes('+')) {
            let tmp = str.slice(2, 3);
            let end = str.slice(3, str.length);
            str = '0' + tmp + end;
            //}
            //return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "(+$1) $2.$3.$4.$5.$6");
            return str.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, "$1.$2.$3.$4.$5");
        }
        return null;
    }
}
PhoneDisplayComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: PhoneDisplayComponent, deps: [{ token: i1.UntypedFormBuilder }], target: i0.ɵɵFactoryTarget.Component });
PhoneDisplayComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: PhoneDisplayComponent, selector: "app-phone-display", inputs: { number: "number" }, usesOnChanges: true, ngImport: i0, template: "<flag [country]=\"flag\"></flag> <div>{{display || '-'}}</div>\n", styles: [""], dependencies: [{ kind: "component", type: i2.NgxFlagsComponent, selector: "flag", inputs: ["country", "format", "size", "class"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: PhoneDisplayComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-phone-display', template: "<flag [country]=\"flag\"></flag> <div>{{display || '-'}}</div>\n" }]
        }], ctorParameters: function () { return [{ type: i1.UntypedFormBuilder }]; }, propDecorators: { number: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL2NlbGxzLWNvbXBvbmVudC9waG9uZS1kaXNwbGF5L3Bob25lLWRpc3BsYXkuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvcGhvbmUtZGlzcGxheS9waG9uZS1kaXNwbGF5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFtQyxNQUFNLGVBQWUsQ0FBQztBQUVqRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQXFGLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFRNUosTUFBTSxPQUFPLHFCQUFxQjtJQUs5QixZQUNZLEVBQXNCO1FBQXRCLE9BQUUsR0FBRixFQUFFLENBQW9CO1FBSGxDLFNBQUksR0FBRyxFQUFFLENBQUM7SUFJVixDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDN0M7UUFFRCx1SUFBdUk7UUFDdkksMkNBQTJDO0lBQy9DLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDOUIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTyxTQUFTLENBQUMsR0FBVztRQUN6QixJQUFJLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNoQyxPQUFPLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ2pEO2FBQU0sSUFBSSxHQUFHLEVBQUU7WUFDWjs7O2VBR0c7WUFDSCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksSUFBSSxHQUFRLEVBQUUsQ0FBQztZQUVuQixJQUFJLENBQUMsRUFBRTtnQkFDSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDL0IsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7NEJBQ3JCLElBQUksSUFBSSxHQUFHLENBQUM7eUJBQ2Y7d0JBQ0QsSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQzFCO2lCQUNKO2FBQ0o7WUFDRCxPQUFPLElBQUksQ0FBQztZQUNaOzs7O2VBSUc7U0FDTjthQUFNO1lBQ0gsT0FBTyxFQUFFLENBQUM7U0FDYjtRQUNELEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxFQUFFLEVBQUU7WUFDbEIsa0NBQWtDO1lBQ2xDLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxxQ0FBcUMsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3JGO2FBQU0sSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLEVBQUUsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRTtZQUM1QyxJQUFJLEdBQUcsQ0FBQyxNQUFNLEtBQUssRUFBRSxFQUFFO2dCQUNuQixnQkFBZ0I7YUFDbkI7WUFDRCxnREFBZ0Q7WUFDNUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUMxQixHQUFHO1lBQ0gsMkZBQTJGO1lBQzNGLE9BQU8sR0FBRyxDQUFDLE9BQU8sQ0FBQyxxQ0FBcUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1NBQy9FO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQzs7bUhBdEVRLHFCQUFxQjt1R0FBckIscUJBQXFCLDRHQ1ZsQyxrRUFDQTs0RkRTYSxxQkFBcUI7a0JBTGpDLFNBQVM7K0JBQ0ksbUJBQW1CO3lHQUtwQixNQUFNO3NCQUFkLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvdW50cnlJU08gfSBmcm9tICduZ3gtaW50bC10ZWwtaW5wdXQnO1xuaW1wb3J0IHsgcGFyc2VQaG9uZU51bWJlciwgaXNWYWxpZFBob25lTnVtYmVyLCBwYXJzZSwgcGFyc2VQaG9uZU51bWJlcldpdGhFcnJvciwgZm9ybWF0SW5jb21wbGV0ZVBob25lTnVtYmVyLCBpc1N1cHBvcnRlZENvdW50cnkgfSBmcm9tICdsaWJwaG9uZW51bWJlci1qcyc7XG5pbXBvcnQgeyBVbnR5cGVkRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnYXBwLXBob25lLWRpc3BsYXknLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9waG9uZS1kaXNwbGF5LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9waG9uZS1kaXNwbGF5LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGhvbmVEaXNwbGF5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICAgIEBJbnB1dCgpIG51bWJlcjogc3RyaW5nO1xuICAgIHB1YmxpYyBkaXNwbGF5OiBzdHJpbmc7XG4gICAgZmxhZyA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgZmI6IFVudHlwZWRGb3JtQnVpbGRlcikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5udW1iZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheSA9IHRoaXMubm9ybWFsaXplKHRoaXMubnVtYmVyKVxuICAgICAgICB9XG5cbiAgICAgICAgLy90aGlzLmZsYWcgPSAodGhpcy5udW1iZXIgJiYgdGhpcy5udW1iZXIgIT0gJycgJiYgaXNWYWxpZFBob25lTnVtYmVyKHRoaXMubnVtYmVyKSA/IHBhcnNlUGhvbmVOdW1iZXIoJycrdGhpcy5udW1iZXIpPy5jb3VudHJ5IDogJ0ZSJyk7XG4gICAgICAgIC8vdGhpcy5mbGFnID0gIXRoaXMubnVtYmVyID8gJyc6IHRoaXMuZmxhZztcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMubmdPbkluaXQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG5vcm1hbGl6ZShzdHI6IHN0cmluZykge1xuICAgICAgICBpZiAoc3RyICYmIGlzVmFsaWRQaG9uZU51bWJlcihzdHIpKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VQaG9uZU51bWJlcihzdHIpLmZvcm1hdE5hdGlvbmFsKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RyKSB7XG4gICAgICAgICAgICAvKmNvbnN0IHBob25lID0gcGFyc2VQaG9uZU51bWJlcihzdHIpXG4gICAgICAgICAgICBpZiAocGhvbmUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwaG9uZS5mb3JtYXROYXRpb25hbCgpKVxuICAgICAgICAgICAgfSovXG4gICAgICAgICAgICBsZXQgcCA9IHN0ci5zcGxpdCgnKycpWzFdO1xuICAgICAgICAgICAgbGV0IG5ld3A6IGFueSA9ICcnO1xuXG4gICAgICAgICAgICBpZiAocCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocC5zcGxpdCgnJylbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpICUgMiA9PSAwICYmIGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3cCArPSAnICc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdwICs9IHAuc3BsaXQoJycpW2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ld3A7XG4gICAgICAgICAgICAvKmlmIChwaG9uZS5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGhvbmUuZm9ybWF0TmF0aW9uYWwoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfSovXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgc3RyID0gKHN0ciB8fCAnJykucmVwbGFjZSgvW15cXGRdL2csIFwiXCIpO1xuICAgICAgICBpZiAoc3RyLmxlbmd0aCA9PSAxMCkge1xuICAgICAgICAgICAgLy9yZWZvcm1hdCBhbmQgcmV0dXJuIHBob25lIG51bWJlclxuICAgICAgICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pLywgXCIoKzMzKSAkMS4kMi4kMy4kNC4kNVwiKTtcbiAgICAgICAgfSBlbHNlIGlmIChzdHIubGVuZ3RoID4gMTAgJiYgc3RyLmxlbmd0aCA8PSAxMykge1xuICAgICAgICAgICAgaWYgKHN0ci5sZW5ndGggPT09IDExKSB7XG4gICAgICAgICAgICAgICAgLy9zdHIgPSAnMCcrc3RyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiAoIHN0ci5sZW5ndGggPT09IDEzICYmIHN0ci5pbmNsdWRlcygnKycpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRtcCA9IHN0ci5zbGljZSgyLCAzKTtcbiAgICAgICAgICAgICAgICBsZXQgZW5kID0gc3RyLnNsaWNlKDMsIHN0ci5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIHN0ciA9ICcwJyArIHRtcCArIGVuZDtcbiAgICAgICAgICAgIC8vfVxuICAgICAgICAgICAgLy9yZXR1cm4gc3RyLnJlcGxhY2UoLyhcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KS8sIFwiKCskMSkgJDIuJDMuJDQuJDUuJDZcIik7XG4gICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhcXGR7Mn0pKFxcZHsyfSkoXFxkezJ9KShcXGR7Mn0pKFxcZHsyfSkvLCBcIiQxLiQyLiQzLiQ0LiQ1XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG59XG4iLCI8ZmxhZyBbY291bnRyeV09XCJmbGFnXCI+PC9mbGFnPiA8ZGl2Pnt7ZGlzcGxheSB8fCAnLSd9fTwvZGl2PlxuIl19