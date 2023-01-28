import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TableComponent } from './table.component';
import { CustomerRankComponent } from "./cells-component/customer-rank/customer-rank.component";
import { DateFormatComponent } from "./cells-component/date-format/date-format.component";
import { EquipementStatusComponent } from "./cells-component/equipement-status/equipement-status.component";
import { EquipementTypeComponent } from "./cells-component/equipement-type/equipement-type.component";
import { GenderComponent } from "./cells-component/gender/gender.component";
import { IsMatIconComponent } from "./cells-component/is-mat-icon/is-mat-icon.component";
import { NameAvatarComponent } from "./cells-component/name-avatar/name-avatar.component";
import { OriginComponent } from "./cells-component/origin/origin.component";
import { PhoneDisplayComponent } from "./cells-component/phone-display/phone-display.component";
import { PngIconModule } from "./cells-component/png-icon/png-icon.module";
import { PriorityComponent } from "./cells-component/priority/priority.component";
import { YesNoComponent } from "./cells-component/yes-no/yes-no.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatTooltipModule } from "@angular/material/tooltip";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { MatBadgeModule } from "@angular/material/badge";
import { TableService } from "./table.service";
import { NgxFlagsComponent } from './cells-component/ngx-flag/ngx-flag.component';
import { MenuComponent } from './cells-component/menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { NowboardIconModule, NowboardIconService } from "nowboard-icon";
import { Settings } from './settings';
import { StatusComponent } from './cells-component/status/status.component';
import { StatusIconComponent } from './cells-component/status-icon/status-icon.component';
import { DoubleLineComponent } from './cells-component/double-line/double-line.component';
import { AppDatePipe } from './core-data-table/app-date.pipe';
import { CustomCellComponent } from './cells-component/custom-cell/custom-cell.component';
import { CustomButtonComponent } from './cells-component/custom-button/custom-button.component';
import { WithNoteCellComponent } from './cells-component/with-note-cell/with-note-cell.component';
import * as i0 from "@angular/core";
import * as i1 from "nowboard-icon";
export class TableModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('TableModule is already loaded. Import it in the AppModule only');
        }
    }
    static forRoot(config) {
        return {
            ngModule: TableModule,
            providers: [
                { provide: '__NgxDesignTable__', useValue: config },
                TableService
            ]
        };
    }
}
TableModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TableModule, deps: [{ token: TableModule, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.NgModule });
TableModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.12", ngImport: i0, type: TableModule, declarations: [TableComponent,
        CustomerRankComponent,
        DateFormatComponent,
        EquipementStatusComponent,
        EquipementTypeComponent,
        GenderComponent,
        IsMatIconComponent,
        NameAvatarComponent,
        OriginComponent,
        PhoneDisplayComponent,
        PriorityComponent,
        YesNoComponent,
        NgxFlagsComponent,
        MenuComponent,
        StatusComponent,
        StatusIconComponent,
        DoubleLineComponent,
        AppDatePipe,
        CustomCellComponent,
        CustomButtonComponent,
        WithNoteCellComponent], imports: [PngIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        CommonModule,
        MatIconModule,
        RouterModule,
        MatBadgeModule,
        MatMenuModule, i1.NowboardIconModule], exports: [TableComponent,
        CustomerRankComponent,
        DateFormatComponent,
        EquipementStatusComponent,
        EquipementTypeComponent,
        GenderComponent,
        IsMatIconComponent,
        NameAvatarComponent,
        OriginComponent,
        PhoneDisplayComponent,
        PriorityComponent,
        YesNoComponent,
        PngIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        CommonModule,
        MatIconModule,
        RouterModule,
        MatBadgeModule,
        NgxFlagsComponent,
        MatMenuModule,
        NowboardIconModule,
        StatusComponent] });
TableModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TableModule, providers: [
        NowboardIconService
    ], imports: [PngIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        CommonModule,
        MatIconModule,
        RouterModule,
        MatBadgeModule,
        MatMenuModule,
        NowboardIconModule.forRoot(Settings.Icons_light), PngIconModule,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        CommonModule,
        MatIconModule,
        RouterModule,
        MatBadgeModule,
        MatMenuModule,
        NowboardIconModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TableModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        TableComponent,
                        CustomerRankComponent,
                        DateFormatComponent,
                        EquipementStatusComponent,
                        EquipementTypeComponent,
                        GenderComponent,
                        IsMatIconComponent,
                        NameAvatarComponent,
                        OriginComponent,
                        PhoneDisplayComponent,
                        PriorityComponent,
                        YesNoComponent,
                        NgxFlagsComponent,
                        MenuComponent,
                        StatusComponent,
                        StatusIconComponent,
                        DoubleLineComponent,
                        AppDatePipe,
                        CustomCellComponent,
                        CustomButtonComponent,
                        WithNoteCellComponent
                    ],
                    imports: [
                        PngIconModule,
                        MatPaginatorModule,
                        MatTableModule,
                        MatSortModule,
                        MatTooltipModule,
                        CommonModule,
                        MatIconModule,
                        RouterModule,
                        MatBadgeModule,
                        MatMenuModule,
                        NowboardIconModule.forRoot(Settings.Icons_light)
                    ],
                    exports: [
                        TableComponent,
                        CustomerRankComponent,
                        DateFormatComponent,
                        EquipementStatusComponent,
                        EquipementTypeComponent,
                        GenderComponent,
                        IsMatIconComponent,
                        NameAvatarComponent,
                        OriginComponent,
                        PhoneDisplayComponent,
                        PriorityComponent,
                        YesNoComponent,
                        PngIconModule,
                        MatPaginatorModule,
                        MatTableModule,
                        MatSortModule,
                        MatTooltipModule,
                        CommonModule,
                        MatIconModule,
                        RouterModule,
                        MatBadgeModule,
                        NgxFlagsComponent,
                        MatMenuModule,
                        NowboardIconModule,
                        StatusComponent
                    ],
                    providers: [
                        NowboardIconService
                    ]
                }]
        }], ctorParameters: function () { return [{ type: TableModule, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi90YWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDaEcsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDMUYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0saUVBQWlFLENBQUM7QUFDNUcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkRBQTZELENBQUM7QUFDdEcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sd0JB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QixtQkFBbUI7d0JBQ25CLGVBQWU7d0JBQ2YscUJBQXFCO3dCQUNyQixpQkFBaUI7d0JBQ2pCLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsYUFBYTt3QkFDYixnQkFBZ0I7d0JBQ2hCLFlBQVk7d0JBQ1osYUFBYTt3QkFDYixZQUFZO3dCQUNaLGNBQWM7d0JBQ2QsaUJBQWlCO3dCQUNqQixhQUFhO3dCQUNiLGtCQUFrQjt3QkFDbEIsZUFBZTtxQkFDaEI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULG1CQUFtQjtxQkFDcEI7aUJBQ0Y7OzBCQUVjLFFBQVE7OzBCQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4vdGFibGUuY29tcG9uZW50JztcbmltcG9ydCB7IEN1c3RvbWVyUmFua0NvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9jdXN0b21lci1yYW5rL2N1c3RvbWVyLXJhbmsuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEYXRlRm9ybWF0Q29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2RhdGUtZm9ybWF0L2RhdGUtZm9ybWF0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXF1aXBlbWVudFN0YXR1c0NvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9lcXVpcGVtZW50LXN0YXR1cy9lcXVpcGVtZW50LXN0YXR1cy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEVxdWlwZW1lbnRUeXBlQ29tcG9uZW50IH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L2VxdWlwZW1lbnQtdHlwZS9lcXVpcGVtZW50LXR5cGUuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBHZW5kZXJDb21wb25lbnQgfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvZ2VuZGVyL2dlbmRlci5jb21wb25lbnRcIjtcbmltcG9ydCB7IElzTWF0SWNvbkNvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9pcy1tYXQtaWNvbi9pcy1tYXQtaWNvbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5hbWVBdmF0YXJDb21wb25lbnQgfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvbmFtZS1hdmF0YXIvbmFtZS1hdmF0YXIuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBPcmlnaW5Db21wb25lbnQgfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvb3JpZ2luL29yaWdpbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IFBob25lRGlzcGxheUNvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC9waG9uZS1kaXNwbGF5L3Bob25lLWRpc3BsYXkuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBQbmdJY29uTW9kdWxlIH0gZnJvbSBcIi4vY2VsbHMtY29tcG9uZW50L3BuZy1pY29uL3BuZy1pY29uLm1vZHVsZVwiO1xuaW1wb3J0IHsgUHJpb3JpdHlDb21wb25lbnQgfSBmcm9tIFwiLi9jZWxscy1jb21wb25lbnQvcHJpb3JpdHkvcHJpb3JpdHkuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBZZXNOb0NvbXBvbmVudCB9IGZyb20gXCIuL2NlbGxzLWNvbXBvbmVudC95ZXMtbm8veWVzLW5vLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTWF0UGFnaW5hdG9yTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvclwiO1xuaW1wb3J0IHsgTWF0VGFibGVNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGVcIjtcbmltcG9ydCB7IE1hdFNvcnRNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydFwiO1xuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2ljb25cIjtcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE1hdEJhZGdlTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL2JhZGdlXCI7XG5pbXBvcnQgeyBUYWJsZVNlcnZpY2UgfSBmcm9tIFwiLi90YWJsZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBEZXNpZ25UYWJsZUludGVyZmFjZSB9IGZyb20gXCIuL3NldHRpbmcvQ29uZmlnLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgTmd4RmxhZ3NDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzLWNvbXBvbmVudC9uZ3gtZmxhZy9uZ3gtZmxhZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWVudUNvbXBvbmVudCB9IGZyb20gJy4vY2VsbHMtY29tcG9uZW50L21lbnUvbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTWF0TWVudU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xuaW1wb3J0IHsgTm93Ym9hcmRJY29uTW9kdWxlLCBOb3dib2FyZEljb25TZXJ2aWNlIH0gZnJvbSBcIm5vd2JvYXJkLWljb25cIjtcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi9zZXR0aW5ncyc7XG5pbXBvcnQgeyBTdGF0dXNDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzLWNvbXBvbmVudC9zdGF0dXMvc3RhdHVzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdGF0dXNJY29uQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy1jb21wb25lbnQvc3RhdHVzLWljb24vc3RhdHVzLWljb24uY29tcG9uZW50JztcbmltcG9ydCB7IERvdWJsZUxpbmVDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzLWNvbXBvbmVudC9kb3VibGUtbGluZS9kb3VibGUtbGluZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQXBwRGF0ZVBpcGUgfSBmcm9tICcuL2NvcmUtZGF0YS10YWJsZS9hcHAtZGF0ZS5waXBlJztcbmltcG9ydCB7IEN1c3RvbUNlbGxDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzLWNvbXBvbmVudC9jdXN0b20tY2VsbC9jdXN0b20tY2VsbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ3VzdG9tQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jZWxscy1jb21wb25lbnQvY3VzdG9tLWJ1dHRvbi9jdXN0b20tYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBXaXRoTm90ZUNlbGxDb21wb25lbnQgfSBmcm9tICcuL2NlbGxzLWNvbXBvbmVudC93aXRoLW5vdGUtY2VsbC93aXRoLW5vdGUtY2VsbC5jb21wb25lbnQnO1xuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGFibGVDb21wb25lbnQsXG4gICAgQ3VzdG9tZXJSYW5rQ29tcG9uZW50LFxuICAgIERhdGVGb3JtYXRDb21wb25lbnQsXG4gICAgRXF1aXBlbWVudFN0YXR1c0NvbXBvbmVudCxcbiAgICBFcXVpcGVtZW50VHlwZUNvbXBvbmVudCxcbiAgICBHZW5kZXJDb21wb25lbnQsXG4gICAgSXNNYXRJY29uQ29tcG9uZW50LFxuICAgIE5hbWVBdmF0YXJDb21wb25lbnQsXG4gICAgT3JpZ2luQ29tcG9uZW50LFxuICAgIFBob25lRGlzcGxheUNvbXBvbmVudCxcbiAgICBQcmlvcml0eUNvbXBvbmVudCxcbiAgICBZZXNOb0NvbXBvbmVudCxcbiAgICBOZ3hGbGFnc0NvbXBvbmVudCxcbiAgICBNZW51Q29tcG9uZW50LFxuICAgIFN0YXR1c0NvbXBvbmVudCxcbiAgICBTdGF0dXNJY29uQ29tcG9uZW50LFxuICAgIERvdWJsZUxpbmVDb21wb25lbnQsXG4gICAgQXBwRGF0ZVBpcGUsXG4gICAgQ3VzdG9tQ2VsbENvbXBvbmVudCxcbiAgICBDdXN0b21CdXR0b25Db21wb25lbnQsXG4gICAgV2l0aE5vdGVDZWxsQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBQbmdJY29uTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBNYXRUYWJsZU1vZHVsZSxcbiAgICBNYXRTb3J0TW9kdWxlLFxuICAgIE1hdFRvb2x0aXBNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIE1hdEJhZGdlTW9kdWxlLFxuICAgIE1hdE1lbnVNb2R1bGUsXG4gICAgTm93Ym9hcmRJY29uTW9kdWxlLmZvclJvb3QoU2V0dGluZ3MuSWNvbnNfbGlnaHQpXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUYWJsZUNvbXBvbmVudCxcbiAgICBDdXN0b21lclJhbmtDb21wb25lbnQsXG4gICAgRGF0ZUZvcm1hdENvbXBvbmVudCxcbiAgICBFcXVpcGVtZW50U3RhdHVzQ29tcG9uZW50LFxuICAgIEVxdWlwZW1lbnRUeXBlQ29tcG9uZW50LFxuICAgIEdlbmRlckNvbXBvbmVudCxcbiAgICBJc01hdEljb25Db21wb25lbnQsXG4gICAgTmFtZUF2YXRhckNvbXBvbmVudCxcbiAgICBPcmlnaW5Db21wb25lbnQsXG4gICAgUGhvbmVEaXNwbGF5Q29tcG9uZW50LFxuICAgIFByaW9yaXR5Q29tcG9uZW50LFxuICAgIFllc05vQ29tcG9uZW50LFxuICAgIFBuZ0ljb25Nb2R1bGUsXG4gICAgTWF0UGFnaW5hdG9yTW9kdWxlLFxuICAgIE1hdFRhYmxlTW9kdWxlLFxuICAgIE1hdFNvcnRNb2R1bGUsXG4gICAgTWF0VG9vbHRpcE1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgTWF0QmFkZ2VNb2R1bGUsXG4gICAgTmd4RmxhZ3NDb21wb25lbnQsXG4gICAgTWF0TWVudU1vZHVsZSxcbiAgICBOb3dib2FyZEljb25Nb2R1bGUsXG4gICAgU3RhdHVzQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIE5vd2JvYXJkSWNvblNlcnZpY2VcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZU1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZT86IFRhYmxlTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGFibGVNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoY29uZmlnOiBEZXNpZ25UYWJsZUludGVyZmFjZSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VGFibGVNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFRhYmxlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogJ19fTmd4RGVzaWduVGFibGVfXycsIHVzZVZhbHVlOiBjb25maWcgfSxcbiAgICAgICAgVGFibGVTZXJ2aWNlXG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG59XG4iXX0=