import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class TranslateService {
    constructor() {
        this.lang = {
            'fr': {
                'SEARCH': `Recherche...`,
                'OPEN': 'Ouvrir',
                'CANCEL_SEARCH': 'Annuler la recherche',
                'NO_RESULT': 'Aucun résultat correspondant',
                'DETAILS': 'Détails',
                'FUNCTIONAL': 'Fonctionnel',
                'KO': 'HS',
                'ACTIVE': 'Actif',
                'NS': 'NR',
                'NOT_SPECIFIED': 'Non renseigné',
                'CONTRACT_TYPE': 'Contrat de type',
            },
            'en': {
                'SEARCH': `Search...`,
                'OPEN': 'Open',
                'CANCEL_SEARCH': 'Cancel search',
                'NO_RESULT': 'No corresponding result',
                'DETAILS': 'Details',
                'FUNCTIONAL': 'Functional',
                'KO': 'HS',
                'ACTIVE': 'Active',
                'NS': 'NS',
                'NOT_SPECIFIED': 'Not specified',
                'CONTRACT_TYPE': 'Contract type',
            }
        };
    }
    translate(l, word) {
        if (this.lang && this.lang[l]) {
            return this.lang[l][word];
        }
        else {
            return word;
        }
    }
}
TranslateService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TranslateService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
TranslateService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TranslateService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.12", ngImport: i0, type: TranslateService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy90YWJsZS9zcmMvbGliL3RyYW5zbGF0ZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBSzNDLE1BQU0sT0FBTyxnQkFBZ0I7SUE4QjNCO1FBN0JRLFNBQUksR0FBRztZQUNYLElBQUksRUFBRTtnQkFDRixRQUFRLEVBQUUsY0FBYztnQkFDeEIsTUFBTSxFQUFFLFFBQVE7Z0JBQ2hCLGVBQWUsRUFBRSxzQkFBc0I7Z0JBQ3ZDLFdBQVcsRUFBRSw4QkFBOEI7Z0JBQzNDLFNBQVMsRUFBRSxTQUFTO2dCQUNwQixZQUFZLEVBQUUsYUFBYTtnQkFDM0IsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLElBQUksRUFBRSxJQUFJO2dCQUNWLGVBQWUsRUFBRSxlQUFlO2dCQUNoQyxlQUFlLEVBQUUsaUJBQWlCO2FBQ3JDO1lBQ0QsSUFBSSxFQUFFO2dCQUNGLFFBQVEsRUFBRSxXQUFXO2dCQUNyQixNQUFNLEVBQUUsTUFBTTtnQkFDZCxlQUFlLEVBQUUsZUFBZTtnQkFDaEMsV0FBVyxFQUFFLHlCQUF5QjtnQkFDdEMsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLFlBQVksRUFBRSxZQUFZO2dCQUMxQixJQUFJLEVBQUUsSUFBSTtnQkFDVixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsZUFBZSxFQUFFLGVBQWU7Z0JBQ2hDLGVBQWUsRUFBRSxlQUFlO2FBQ25DO1NBQ0osQ0FBQTtJQUVlLENBQUM7SUFFVixTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUk7UUFDdEIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQztTQUNiO0lBQ0gsQ0FBQzs7OEdBdENVLGdCQUFnQjtrSEFBaEIsZ0JBQWdCLGNBRmYsTUFBTTs0RkFFUCxnQkFBZ0I7a0JBSDVCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBUcmFuc2xhdGVTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBsYW5nID0ge1xuICAgICAgJ2ZyJzoge1xuICAgICAgICAgICdTRUFSQ0gnOiBgUmVjaGVyY2hlLi4uYCxcbiAgICAgICAgICAnT1BFTic6ICdPdXZyaXInLFxuICAgICAgICAgICdDQU5DRUxfU0VBUkNIJzogJ0FubnVsZXIgbGEgcmVjaGVyY2hlJyxcbiAgICAgICAgICAnTk9fUkVTVUxUJzogJ0F1Y3VuIHLDqXN1bHRhdCBjb3JyZXNwb25kYW50JyxcbiAgICAgICAgICAnREVUQUlMUyc6ICdEw6l0YWlscycsXG4gICAgICAgICAgJ0ZVTkNUSU9OQUwnOiAnRm9uY3Rpb25uZWwnLFxuICAgICAgICAgICdLTyc6ICdIUycsXG4gICAgICAgICAgJ0FDVElWRSc6ICdBY3RpZicsXG4gICAgICAgICAgJ05TJzogJ05SJyxcbiAgICAgICAgICAnTk9UX1NQRUNJRklFRCc6ICdOb24gcmVuc2VpZ27DqScsXG4gICAgICAgICAgJ0NPTlRSQUNUX1RZUEUnOiAnQ29udHJhdCBkZSB0eXBlJyxcbiAgICAgIH0sXG4gICAgICAnZW4nOiB7XG4gICAgICAgICAgJ1NFQVJDSCc6IGBTZWFyY2guLi5gLFxuICAgICAgICAgICdPUEVOJzogJ09wZW4nLFxuICAgICAgICAgICdDQU5DRUxfU0VBUkNIJzogJ0NhbmNlbCBzZWFyY2gnLFxuICAgICAgICAgICdOT19SRVNVTFQnOiAnTm8gY29ycmVzcG9uZGluZyByZXN1bHQnLFxuICAgICAgICAgICdERVRBSUxTJzogJ0RldGFpbHMnLFxuICAgICAgICAgICdGVU5DVElPTkFMJzogJ0Z1bmN0aW9uYWwnLFxuICAgICAgICAgICdLTyc6ICdIUycsXG4gICAgICAgICAgJ0FDVElWRSc6ICdBY3RpdmUnLFxuICAgICAgICAgICdOUyc6ICdOUycsXG4gICAgICAgICAgJ05PVF9TUEVDSUZJRUQnOiAnTm90IHNwZWNpZmllZCcsXG4gICAgICAgICAgJ0NPTlRSQUNUX1RZUEUnOiAnQ29udHJhY3QgdHlwZScsXG4gICAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHB1YmxpYyB0cmFuc2xhdGUobCwgd29yZCkge1xuICAgIGlmICh0aGlzLmxhbmcgJiYgdGhpcy5sYW5nW2xdKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYW5nW2xdW3dvcmRdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gd29yZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==