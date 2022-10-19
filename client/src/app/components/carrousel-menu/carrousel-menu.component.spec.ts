import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrouselMenuComponent } from './carrousel-menu.component';

describe('CarrouselMenuComponent', () => {
    let component: CarrouselMenuComponent;
    let fixture: ComponentFixture<CarrouselMenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({}).compileComponents();

        fixture = TestBed.createComponent(CarrouselMenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
