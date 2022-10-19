import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeCardComponent } from '@app/components/recipe-card/recipe-card.component';
import { Recipe } from '@app/interfaces/recipe';

const DEFAULT_RECIPE: Recipe = {
    id: '1',
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
        component.recipe = DEFAULT_RECIPE;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
