import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeCardComponent } from '@app/components/recipe-card/recipe-card.component';
import { Recipe } from '@app/interfaces/recipe';

const DEFAULT_RECIPE: Recipe = {
    name: 'testName',
    ingredients: [],
    img: 'imgLink',
    steps: [],
    stars: 4,
};

describe('RecipeCardComponent', () => {
    let component: RecipeCardComponent;
    let fixture: ComponentFixture<RecipeCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RecipeCardComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(RecipeCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        component.recipe = DEFAULT_RECIPE;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('getRecipeName() should return the name of the recipe', () => {
        expect(component.getRecipeName()).toEqual('testName');
    });

    it('getImg() should return the img of the recipe', () => {
        expect(component.getImg()).toEqual('imgLink');
    });
});
