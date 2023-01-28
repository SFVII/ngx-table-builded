import { EventEmitter, OnInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class WithNoteCellComponent implements OnInit {
    title: string;
    note: number;
    class: string;
    emptyStarUrl: string;
    starUrl: string;
    lang: string;
    id: string;
    callHandler: EventEmitter<any>;
    stars: number[];
    tempNote: number;
    constructor();
    ngOnInit(): void;
    handleVote(note: number, event: string): void;
    tooltip(lang: string): "Laissez une note" | "Leave a note";
    getNote(note: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<WithNoteCellComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WithNoteCellComponent, "lib-with-note-cell", never, { "title": "title"; "note": "note"; "class": "class"; "emptyStarUrl": "emptyStarUrl"; "starUrl": "starUrl"; "lang": "lang"; "id": "id"; }, { "callHandler": "callHandler"; }, never, never, false>;
}
