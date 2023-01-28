import { Input, Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as i0 from "@angular/core";
export class DateFormatConstants {
}
DateFormatConstants.dateLocalFr = 'fr-FR';
DateFormatConstants.dateLocalEn = 'en-EN';
DateFormatConstants.timezone = '120';
DateFormatConstants.DATE_FMT_FR = 'dd/MM/y';
DateFormatConstants.DATE_TIME_FMT_FR = `${DateFormatConstants.DATE_FMT_FR} - H:mm`;
DateFormatConstants.DATE_FMT_EN = 'MM/dd/y';
DateFormatConstants.DATE_TIME_FMT_EN = `${DateFormatConstants.DATE_FMT_EN} - h:mm a`;
export var AppLanguages;
(function (AppLanguages) {
    AppLanguages["Fr"] = "fr";
    AppLanguages["En"] = "en";
})(AppLanguages || (AppLanguages = {}));
export class AppDatePipe extends DatePipe {
    constructor() {
        super(...arguments);
        this.showTime = true;
    }
    transform(value, lang) {
        try {
            if (lang == AppLanguages.Fr) {
                const timeFormat = this.showTime ? DateFormatConstants.DATE_TIME_FMT_FR : DateFormatConstants.DATE_FMT_FR;
                return super.transform(value, timeFormat, DateFormatConstants.timezone, DateFormatConstants.dateLocalFr);
            }
            else {
                const timeFormat = this.showTime ? DateFormatConstants.DATE_TIME_FMT_EN : DateFormatConstants.DATE_FMT_EN;
                if (!lang) {
                    return super.transform(value, timeFormat, DateFormatConstants.timezone, DateFormatConstants.dateLocalFr);
                }
                else {
                    return super.transform(value, timeFormat, DateFormatConstants.timezone, DateFormatConstants.dateLocalEn);
                }
            }
        }
        catch (e) {
            console.log('Undefined error', e);
            return value;
        }
        /*
        if (lang && lang == AppLanguages.Fr) {
          return super.transform(value, this.showTime ? DateFormatConstants.DATE_TIME_FMT_FR : DateFormatConstants.DATE_FMT_FR, DateFormatConstants.timezone, DateFormatConstants.dateLocalFr);
        } else {
          return super.transform(value, this.showTime ? DateFormatConstants.DATE_TIME_FMT_EN : DateFormatConstants.DATE_FMT_EN, DateFormatConstants.timezone, DateFormatConstants.dateLocalEn);
        }*/
    }
}
AppDatePipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: AppDatePipe, deps: null, target: i0.ɵɵFactoryTarget.Pipe });
AppDatePipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: AppDatePipe, name: "appDate" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: AppDatePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'appDate'
                }]
        }], propDecorators: { showTime: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWRhdGUucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RhYmxlL3NyYy9saWIvY29yZS1kYXRhLXRhYmxlL2FwcC1kYXRlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQWdCLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7QUFDekMsTUFBTSxPQUFPLG1CQUFtQjs7QUFDZCwrQkFBVyxHQUFHLE9BQU8sQ0FBQztBQUN0QiwrQkFBVyxHQUFHLE9BQU8sQ0FBQztBQUV0Qiw0QkFBUSxHQUFHLEtBQUssQ0FBQztBQUVqQiwrQkFBVyxHQUFHLFNBQVMsQ0FBQztBQUN4QixvQ0FBZ0IsR0FBRyxHQUFHLG1CQUFtQixDQUFDLFdBQVcsU0FBUyxDQUFDO0FBRS9ELCtCQUFXLEdBQUcsU0FBUyxDQUFDO0FBQ3hCLG9DQUFnQixHQUFHLEdBQUcsbUJBQW1CLENBQUMsV0FBVyxXQUFXLENBQUM7QUFFbkYsTUFBTSxDQUFOLElBQVksWUFHWDtBQUhELFdBQVksWUFBWTtJQUN0Qix5QkFBUyxDQUFBO0lBQ1QseUJBQVMsQ0FBQTtBQUNYLENBQUMsRUFIVyxZQUFZLEtBQVosWUFBWSxRQUd2QjtBQUlELE1BQU0sT0FBTyxXQUFZLFNBQVEsUUFBUTtJQUh6Qzs7UUFJVyxhQUFRLEdBQWEsSUFBSSxDQUFDO0tBMEJwQztJQXpCQyxTQUFTLENBQUMsS0FBVSxFQUFFLElBQVU7UUFDOUIsSUFBSTtZQUNGLElBQUksSUFBSSxJQUFJLFlBQVksQ0FBQyxFQUFFLEVBQUU7Z0JBQzNCLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUM7Z0JBQzFHLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMxRztpQkFBTTtnQkFDTCxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDO2dCQUMxRyxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNULE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDMUc7cUJBQU07b0JBQ0wsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsbUJBQW1CLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUMxRzthQUNGO1NBQ0Y7UUFBQyxPQUFNLENBQUMsRUFBRTtZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEMsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVEOzs7OztXQUtHO0lBQ0wsQ0FBQzs7eUdBMUJVLFdBQVc7dUdBQVgsV0FBVzs0RkFBWCxXQUFXO2tCQUh2QixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxTQUFTO2lCQUNoQjs4QkFFVSxRQUFRO3NCQUFoQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbnB1dCwgUGlwZSwgUGlwZVRyYW5zZm9ybX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RhdGVQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuZXhwb3J0IGNsYXNzIERhdGVGb3JtYXRDb25zdGFudHMge1xuICBzdGF0aWMgcmVhZG9ubHkgZGF0ZUxvY2FsRnIgPSAnZnItRlInO1xuICBzdGF0aWMgcmVhZG9ubHkgZGF0ZUxvY2FsRW4gPSAnZW4tRU4nO1xuXG4gIHN0YXRpYyByZWFkb25seSB0aW1lem9uZSA9ICcxMjAnO1xuXG4gIHN0YXRpYyByZWFkb25seSBEQVRFX0ZNVF9GUiA9ICdkZC9NTS95JztcbiAgc3RhdGljIHJlYWRvbmx5IERBVEVfVElNRV9GTVRfRlIgPSBgJHtEYXRlRm9ybWF0Q29uc3RhbnRzLkRBVEVfRk1UX0ZSfSAtIEg6bW1gO1xuXG4gIHN0YXRpYyByZWFkb25seSBEQVRFX0ZNVF9FTiA9ICdNTS9kZC95JztcbiAgc3RhdGljIHJlYWRvbmx5IERBVEVfVElNRV9GTVRfRU4gPSBgJHtEYXRlRm9ybWF0Q29uc3RhbnRzLkRBVEVfRk1UX0VOfSAtIGg6bW0gYWA7XG59XG5leHBvcnQgZW51bSBBcHBMYW5ndWFnZXMge1xuICBGciA9ICdmcicsXG4gIEVuID0gJ2VuJ1xufVxuQFBpcGUoe1xuICBuYW1lOiAnYXBwRGF0ZSdcbn0pXG5leHBvcnQgY2xhc3MgQXBwRGF0ZVBpcGUgZXh0ZW5kcyBEYXRlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBASW5wdXQoKSBzaG93VGltZSA/OmJvb2xlYW4gPSB0cnVlO1xuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgbGFuZz86IGFueSk6IGFueSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChsYW5nID09IEFwcExhbmd1YWdlcy5Gcikge1xuICAgICAgICBjb25zdCB0aW1lRm9ybWF0ID0gdGhpcy5zaG93VGltZSA/IERhdGVGb3JtYXRDb25zdGFudHMuREFURV9USU1FX0ZNVF9GUiA6IERhdGVGb3JtYXRDb25zdGFudHMuREFURV9GTVRfRlI7XG4gICAgICAgIHJldHVybiBzdXBlci50cmFuc2Zvcm0odmFsdWUsIHRpbWVGb3JtYXQsIERhdGVGb3JtYXRDb25zdGFudHMudGltZXpvbmUsIERhdGVGb3JtYXRDb25zdGFudHMuZGF0ZUxvY2FsRnIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgdGltZUZvcm1hdCA9IHRoaXMuc2hvd1RpbWUgPyBEYXRlRm9ybWF0Q29uc3RhbnRzLkRBVEVfVElNRV9GTVRfRU4gOiBEYXRlRm9ybWF0Q29uc3RhbnRzLkRBVEVfRk1UX0VOO1xuICAgICAgICBpZiAoIWxhbmcpIHtcbiAgICAgICAgICByZXR1cm4gc3VwZXIudHJhbnNmb3JtKHZhbHVlLCB0aW1lRm9ybWF0LCBEYXRlRm9ybWF0Q29uc3RhbnRzLnRpbWV6b25lLCBEYXRlRm9ybWF0Q29uc3RhbnRzLmRhdGVMb2NhbEZyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gc3VwZXIudHJhbnNmb3JtKHZhbHVlLCB0aW1lRm9ybWF0LCBEYXRlRm9ybWF0Q29uc3RhbnRzLnRpbWV6b25lLCBEYXRlRm9ybWF0Q29uc3RhbnRzLmRhdGVMb2NhbEVuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgY29uc29sZS5sb2coJ1VuZGVmaW5lZCBlcnJvcicsIGUpO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIC8qXG4gICAgaWYgKGxhbmcgJiYgbGFuZyA9PSBBcHBMYW5ndWFnZXMuRnIpIHtcbiAgICAgIHJldHVybiBzdXBlci50cmFuc2Zvcm0odmFsdWUsIHRoaXMuc2hvd1RpbWUgPyBEYXRlRm9ybWF0Q29uc3RhbnRzLkRBVEVfVElNRV9GTVRfRlIgOiBEYXRlRm9ybWF0Q29uc3RhbnRzLkRBVEVfRk1UX0ZSLCBEYXRlRm9ybWF0Q29uc3RhbnRzLnRpbWV6b25lLCBEYXRlRm9ybWF0Q29uc3RhbnRzLmRhdGVMb2NhbEZyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN1cGVyLnRyYW5zZm9ybSh2YWx1ZSwgdGhpcy5zaG93VGltZSA/IERhdGVGb3JtYXRDb25zdGFudHMuREFURV9USU1FX0ZNVF9FTiA6IERhdGVGb3JtYXRDb25zdGFudHMuREFURV9GTVRfRU4sIERhdGVGb3JtYXRDb25zdGFudHMudGltZXpvbmUsIERhdGVGb3JtYXRDb25zdGFudHMuZGF0ZUxvY2FsRW4pO1xuICAgIH0qL1xuICB9XG59XG4iXX0=