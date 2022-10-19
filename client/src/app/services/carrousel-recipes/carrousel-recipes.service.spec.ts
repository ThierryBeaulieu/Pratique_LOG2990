import { TestBed } from '@angular/core/testing';

import { CarrouselRecipesService } from './carrousel-recipes.service';

describe('CarrouselRecipesService', () => {
    let service: CarrouselRecipesService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CarrouselRecipesService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
