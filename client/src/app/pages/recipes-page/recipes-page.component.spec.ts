import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DEFAULT_RECIPES } from '@app/contants/default-recipes';

import { RecipesPageComponent } from './recipes-page.component';

describe('RecipesPageComponent', () => {
    let component: RecipesPageComponent;
    let fixture: ComponentFixture<RecipesPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RecipesPageComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(RecipesPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('allRecipes should be initialized', () => {
        expect(component.allRecipes).toEqual(DEFAULT_RECIPES);
    });
});
