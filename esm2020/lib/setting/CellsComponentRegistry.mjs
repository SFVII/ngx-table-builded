/***********************************************************
 **  @project MS_Nowboard                              **
 **  @file ComponentRegistry                                         **
 **  @author Brice Daupiard <brice.daupiard@smartiiz.com>  **
 **  @Date 12/03/2021                                         **
 ***********************************************************/
export var CellsComponentList;
(function (CellsComponentList) {
    CellsComponentList["ButtonLink"] = "button-link";
    CellsComponentList["ButtonLinkText"] = "button-link-text";
    CellsComponentList["ButtonClick"] = "button-click";
    CellsComponentList["Priority"] = "priority";
    CellsComponentList["Origin"] = "origin";
    CellsComponentList["NameAvatar"] = "name-avatar";
    CellsComponentList["DateFormat"] = "date-format";
    CellsComponentList["CountRow"] = "count-row";
    CellsComponentList["Gender"] = "gender-avatar";
    CellsComponentList["Phone"] = "phone-display";
    CellsComponentList["YesNo"] = "yes-no-display";
    CellsComponentList["CustomerRank"] = "customer-rank";
    CellsComponentList["ItCategory"] = "it-category";
    CellsComponentList["ItStatus"] = "it-status";
    CellsComponentList["CustomIcon"] = "custom-icon";
    CellsComponentList["PngIcon"] = "png-icon";
    CellsComponentList["Menu"] = "menu";
    CellsComponentList["Status"] = "status";
    CellsComponentList["StatusIcon"] = "status-icon";
    CellsComponentList["DoubleLine"] = "double-line";
    CellsComponentList["CustomCell"] = "custom-cell";
    CellsComponentList["CustomButton"] = "custom-button";
    CellsComponentList["NoteCell"] = "note-cell";
})(CellsComponentList || (CellsComponentList = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2VsbHNDb21wb25lbnRSZWdpc3RyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3RhYmxlL3NyYy9saWIvc2V0dGluZy9DZWxsc0NvbXBvbmVudFJlZ2lzdHJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs2REFLNkQ7QUFFN0QsTUFBTSxDQUFOLElBQVksa0JBd0JYO0FBeEJELFdBQVksa0JBQWtCO0lBQzVCLGdEQUEwQixDQUFBO0lBQzFCLHlEQUFtQyxDQUFBO0lBQ25DLGtEQUE0QixDQUFBO0lBQzVCLDJDQUFxQixDQUFBO0lBQ3JCLHVDQUFpQixDQUFBO0lBQ2pCLGdEQUEwQixDQUFBO0lBQzFCLGdEQUEwQixDQUFBO0lBQzFCLDRDQUFzQixDQUFBO0lBQ3RCLDhDQUF3QixDQUFBO0lBQ3hCLDZDQUF1QixDQUFBO0lBQ3ZCLDhDQUF3QixDQUFBO0lBQ3hCLG9EQUE4QixDQUFBO0lBQzlCLGdEQUEwQixDQUFBO0lBQzFCLDRDQUFzQixDQUFBO0lBQ3RCLGdEQUEwQixDQUFBO0lBQzFCLDBDQUFvQixDQUFBO0lBQ3BCLG1DQUFhLENBQUE7SUFDYix1Q0FBaUIsQ0FBQTtJQUNqQixnREFBMEIsQ0FBQTtJQUMxQixnREFBMEIsQ0FBQTtJQUMxQixnREFBMEIsQ0FBQTtJQUMxQixvREFBOEIsQ0FBQTtJQUM5Qiw0Q0FBc0IsQ0FBQTtBQUN4QixDQUFDLEVBeEJXLGtCQUFrQixLQUFsQixrQkFBa0IsUUF3QjdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gKiogIEBwcm9qZWN0IE1TX05vd2JvYXJkICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcbiAqKiAgQGZpbGUgQ29tcG9uZW50UmVnaXN0cnkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXG4gKiogIEBhdXRob3IgQnJpY2UgRGF1cGlhcmQgPGJyaWNlLmRhdXBpYXJkQHNtYXJ0aWl6LmNvbT4gICoqXG4gKiogIEBEYXRlIDEyLzAzLzIwMjEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICoqXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmV4cG9ydCBlbnVtIENlbGxzQ29tcG9uZW50TGlzdCB7XG4gIEJ1dHRvbkxpbmsgPSBcImJ1dHRvbi1saW5rXCIsXG4gIEJ1dHRvbkxpbmtUZXh0ID0gXCJidXR0b24tbGluay10ZXh0XCIsXG4gIEJ1dHRvbkNsaWNrID0gXCJidXR0b24tY2xpY2tcIixcbiAgUHJpb3JpdHkgPSBcInByaW9yaXR5XCIsXG4gIE9yaWdpbiA9IFwib3JpZ2luXCIsXG4gIE5hbWVBdmF0YXIgPSBcIm5hbWUtYXZhdGFyXCIsXG4gIERhdGVGb3JtYXQgPSBcImRhdGUtZm9ybWF0XCIsXG4gIENvdW50Um93ID0gXCJjb3VudC1yb3dcIixcbiAgR2VuZGVyID0gJ2dlbmRlci1hdmF0YXInLFxuICBQaG9uZSA9ICdwaG9uZS1kaXNwbGF5JyxcbiAgWWVzTm8gPSAneWVzLW5vLWRpc3BsYXknLFxuICBDdXN0b21lclJhbmsgPSAnY3VzdG9tZXItcmFuaycsXG4gIEl0Q2F0ZWdvcnkgPSAnaXQtY2F0ZWdvcnknLFxuICBJdFN0YXR1cyA9ICdpdC1zdGF0dXMnLFxuICBDdXN0b21JY29uID0gJ2N1c3RvbS1pY29uJyxcbiAgUG5nSWNvbiA9ICdwbmctaWNvbicsXG4gIE1lbnUgPSAnbWVudScsXG4gIFN0YXR1cyA9ICdzdGF0dXMnLFxuICBTdGF0dXNJY29uID0gJ3N0YXR1cy1pY29uJyxcbiAgRG91YmxlTGluZSA9ICdkb3VibGUtbGluZScsXG4gIEN1c3RvbUNlbGwgPSAnY3VzdG9tLWNlbGwnLFxuICBDdXN0b21CdXR0b24gPSAnY3VzdG9tLWJ1dHRvbicsXG4gIE5vdGVDZWxsID0gJ25vdGUtY2VsbCdcbn1cbiJdfQ==