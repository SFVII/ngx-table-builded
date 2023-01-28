import { PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as i0 from "@angular/core";
export declare class DateFormatConstants {
    static readonly dateLocalFr = "fr-FR";
    static readonly dateLocalEn = "en-EN";
    static readonly timezone = "120";
    static readonly DATE_FMT_FR = "dd/MM/y";
    static readonly DATE_TIME_FMT_FR: string;
    static readonly DATE_FMT_EN = "MM/dd/y";
    static readonly DATE_TIME_FMT_EN: string;
}
export declare enum AppLanguages {
    Fr = "fr",
    En = "en"
}
export declare class AppDatePipe extends DatePipe implements PipeTransform {
    showTime?: boolean;
    transform(value: any, lang?: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<AppDatePipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<AppDatePipe, "appDate", false>;
}
