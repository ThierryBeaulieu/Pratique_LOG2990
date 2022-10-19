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

    it('showBack2Recipes() should send an event when called', () => {
        spyOn(component.notify, 'emit');
        component.showBack2Recipes();
        expect(component.notify.emit).toHaveBeenCalledWith('showBack2Recipes');
    });

    it('showNext2Recipes() should send an event when called', () => {
        spyOn(component.notify, 'emit');
        component.showNext2Recipes();
        expect(component.notify.emit).toHaveBeenCalledWith('showNext2Recipes');
    });
});
