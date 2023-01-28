import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tooltip";
import * as i2 from "@angular/common";
export class WithNoteCellComponent {
    constructor() {
        this.callHandler = new EventEmitter();
        this.stars = [1, 2, 3, 4, 5];
        this.tempNote = 0;
    }
    ngOnInit() {
        // if (!this.emptyStarUrl) {
        //   this.stars = this.stars.slice(0, this.note)
        // }
    }
    handleVote(note, event) {
        if (!this.note) {
            if (event === 'enter') {
                this.tempNote = note;
            }
            else if (event === 'click') {
                if (Number(this.note) < 1) {
                    this.callHandler.emit({ _id: this.id, Type: 'note', note });
                }
            }
            else {
                this.tempNote = 0;
            }
        }
    }
    // handleVote(note: number) {
    //   if (Number(this.note) < 1) {
    //     this.callHandler.emit({ _id: this.id, Type: 'note', note })
    //   }
    // }
    tooltip(lang) {
        return lang === 'fr' ? 'Laissez une note' : 'Leave a note';
    }
    getNote(note) {
        return `Note ${note}`;
    }
}
WithNoteCellComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: WithNoteCellComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
WithNoteCellComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.12", type: WithNoteCellComponent, selector: "lib-with-note-cell", inputs: { title: "title", note: "note", class: "class", emptyStarUrl: "emptyStarUrl", starUrl: "starUrl", lang: "lang", id: "id" }, outputs: { callHandler: "callHandler" }, ngImport: i0, template: "<div class=\"star-container\" [class]=\"class\">\n    <span class=\"note-title\" *ngIf=\"!!title\">{{title}}</span>\n    <div *ngIf=\"note!==undefined\" class=\"star-content\" [matTooltip]=\"note===0 ? tooltip(lang) : getNote(note)\">\n        <ng-container *ngFor=\"let s of stars; let index = index;\">\n            <img class=\"star\" [src]=\"(tempNote || note) >= index + 1 ? starUrl : emptyStarUrl\"\n                (click)=\"handleVote(index+1, 'click')\" (mouseenter)=\"handleVote(index+1,'enter')\"\n                (mouseleave)=\"handleVote(0, 'leave')\">\n        </ng-container>\n    </div>\n</div>", styles: [".star-container{display:flex;flex-direction:column;align-items:flex-start}.star-content{display:flex;align-items:flex-start!important;justify-content:center;gap:3px}.star{cursor:pointer;height:15px;width:15px}\n"], dependencies: [{ kind: "directive", type: i1.MatTooltip, selector: "[matTooltip]", exportAs: ["matTooltip"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: WithNoteCellComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-with-note-cell', template: "<div class=\"star-container\" [class]=\"class\">\n    <span class=\"note-title\" *ngIf=\"!!title\">{{title}}</span>\n    <div *ngIf=\"note!==undefined\" class=\"star-content\" [matTooltip]=\"note===0 ? tooltip(lang) : getNote(note)\">\n        <ng-container *ngFor=\"let s of stars; let index = index;\">\n            <img class=\"star\" [src]=\"(tempNote || note) >= index + 1 ? starUrl : emptyStarUrl\"\n                (click)=\"handleVote(index+1, 'click')\" (mouseenter)=\"handleVote(index+1,'enter')\"\n                (mouseleave)=\"handleVote(0, 'leave')\">\n        </ng-container>\n    </div>\n</div>", styles: [".star-container{display:flex;flex-direction:column;align-items:flex-start}.star-content{display:flex;align-items:flex-start!important;justify-content:center;gap:3px}.star{cursor:pointer;height:15px;width:15px}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { title: [{
                type: Input
            }], note: [{
                type: Input
            }], class: [{
                type: Input
            }], emptyStarUrl: [{
                type: Input
            }], starUrl: [{
                type: Input
            }], lang: [{
                type: Input
            }], id: [{
                type: Input
            }], callHandler: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aC1ub3RlLWNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvd2l0aC1ub3RlLWNlbGwvd2l0aC1ub3RlLWNlbGwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdGFibGUvc3JjL2xpYi9jZWxscy1jb21wb25lbnQvd2l0aC1ub3RlLWNlbGwvd2l0aC1ub3RlLWNlbGwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQU8vRSxNQUFNLE9BQU8scUJBQXFCO0lBV2hDO1FBSFUsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNuRSxVQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEIsYUFBUSxHQUFHLENBQUMsQ0FBQztJQUNHLENBQUM7SUFFakIsUUFBUTtRQUNOLDRCQUE0QjtRQUM1QixnREFBZ0Q7UUFDaEQsSUFBSTtJQUNOLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBWSxFQUFFLEtBQWE7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxJQUFJLEtBQUssS0FBSyxPQUFPLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ3RCO2lCQUFNLElBQUksS0FBSyxLQUFLLE9BQU8sRUFBRTtnQkFDNUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUE7aUJBQzVEO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUE7YUFDbEI7U0FDRjtJQUNILENBQUM7SUFDRCw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBQ2pDLGtFQUFrRTtJQUNsRSxNQUFNO0lBQ04sSUFBSTtJQUVKLE9BQU8sQ0FBQyxJQUFZO1FBQ2xCLE9BQU8sSUFBSSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQTtJQUM1RCxDQUFDO0lBQ0QsT0FBTyxDQUFDLElBQVk7UUFDbEIsT0FBTyxRQUFRLElBQUksRUFBRSxDQUFBO0lBQ3ZCLENBQUM7O21IQTNDVSxxQkFBcUI7dUdBQXJCLHFCQUFxQix1T0NQbEMsb21CQVNNOzRGREZPLHFCQUFxQjtrQkFMakMsU0FBUzsrQkFDRSxvQkFBb0I7MEVBS3JCLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFDRyxFQUFFO3NCQUFWLEtBQUs7Z0JBQ0ksV0FBVztzQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXdpdGgtbm90ZS1jZWxsJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpdGgtbm90ZS1jZWxsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vd2l0aC1ub3RlLWNlbGwuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFdpdGhOb3RlQ2VsbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG5vdGU6IG51bWJlcjtcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgZW1wdHlTdGFyVXJsOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN0YXJVcmw6IHN0cmluZztcbiAgQElucHV0KCkgbGFuZzogc3RyaW5nO1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBAT3V0cHV0KCkgY2FsbEhhbmRsZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIHN0YXJzID0gWzEsIDIsIDMsIDQsIDVdO1xuICB0ZW1wTm90ZSA9IDA7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gaWYgKCF0aGlzLmVtcHR5U3RhclVybCkge1xuICAgIC8vICAgdGhpcy5zdGFycyA9IHRoaXMuc3RhcnMuc2xpY2UoMCwgdGhpcy5ub3RlKVxuICAgIC8vIH1cbiAgfVxuXG4gIGhhbmRsZVZvdGUobm90ZTogbnVtYmVyLCBldmVudDogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLm5vdGUpIHtcbiAgICAgIGlmIChldmVudCA9PT0gJ2VudGVyJykge1xuICAgICAgICB0aGlzLnRlbXBOb3RlID0gbm90ZTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQgPT09ICdjbGljaycpIHtcbiAgICAgICAgaWYgKE51bWJlcih0aGlzLm5vdGUpIDwgMSkge1xuICAgICAgICAgIHRoaXMuY2FsbEhhbmRsZXIuZW1pdCh7IF9pZDogdGhpcy5pZCwgVHlwZTogJ25vdGUnLCBub3RlIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudGVtcE5vdGUgPSAwXG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGhhbmRsZVZvdGUobm90ZTogbnVtYmVyKSB7XG4gIC8vICAgaWYgKE51bWJlcih0aGlzLm5vdGUpIDwgMSkge1xuICAvLyAgICAgdGhpcy5jYWxsSGFuZGxlci5lbWl0KHsgX2lkOiB0aGlzLmlkLCBUeXBlOiAnbm90ZScsIG5vdGUgfSlcbiAgLy8gICB9XG4gIC8vIH1cblxuICB0b29sdGlwKGxhbmc6IHN0cmluZykge1xuICAgIHJldHVybiBsYW5nID09PSAnZnInID8gJ0xhaXNzZXogdW5lIG5vdGUnIDogJ0xlYXZlIGEgbm90ZSdcbiAgfVxuICBnZXROb3RlKG5vdGU6IG51bWJlcikge1xuICAgIHJldHVybiBgTm90ZSAke25vdGV9YFxuICB9XG5cbn1cbiIsIjxkaXYgY2xhc3M9XCJzdGFyLWNvbnRhaW5lclwiIFtjbGFzc109XCJjbGFzc1wiPlxuICAgIDxzcGFuIGNsYXNzPVwibm90ZS10aXRsZVwiICpuZ0lmPVwiISF0aXRsZVwiPnt7dGl0bGV9fTwvc3Bhbj5cbiAgICA8ZGl2ICpuZ0lmPVwibm90ZSE9PXVuZGVmaW5lZFwiIGNsYXNzPVwic3Rhci1jb250ZW50XCIgW21hdFRvb2x0aXBdPVwibm90ZT09PTAgPyB0b29sdGlwKGxhbmcpIDogZ2V0Tm90ZShub3RlKVwiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBzIG9mIHN0YXJzOyBsZXQgaW5kZXggPSBpbmRleDtcIj5cbiAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJzdGFyXCIgW3NyY109XCIodGVtcE5vdGUgfHwgbm90ZSkgPj0gaW5kZXggKyAxID8gc3RhclVybCA6IGVtcHR5U3RhclVybFwiXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cImhhbmRsZVZvdGUoaW5kZXgrMSwgJ2NsaWNrJylcIiAobW91c2VlbnRlcik9XCJoYW5kbGVWb3RlKGluZGV4KzEsJ2VudGVyJylcIlxuICAgICAgICAgICAgICAgIChtb3VzZWxlYXZlKT1cImhhbmRsZVZvdGUoMCwgJ2xlYXZlJylcIj5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgPC9kaXY+XG48L2Rpdj4iXX0=