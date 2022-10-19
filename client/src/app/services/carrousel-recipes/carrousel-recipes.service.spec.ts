import { TestBed } from '@angular/core/testing';
import { BASIC_TESTING_RECIPES } from '@app/services/carrousel-recipes/carrousel-recipe.service.constants';
import { CarrouselRecipesService } from '@app/services/carrousel-recipes/carrousel-recipes.service';
import { RecipeService } from '@app/services/recipe.service.ts/recipe.service';

describe('CarrouselRecipesService', () => {
    let service: CarrouselRecipesService;
    let spyRecipeService: jasmine.SpyObj<RecipeService>;

    beforeEach(() => {
        spyRecipeService = jasmine.createSpyObj<RecipeService>('RecipeService', [
            'addRecipe',
            'getAllRecipes',
            'getRecipeByIndex',
            'isIndexOutOfRange',
        ]);
        spyRecipeService.getAllRecipes.and.callFake(() => {
            return BASIC_TESTING_RECIPES;
        });
        TestBed.configureTestingModule({});
        service = TestBed.inject(CarrouselRecipesService);
    });

    it('CarrouselRecipesService should be created', () => {
        expect(service).toBeTruthy();
    });

    it('showCurrentRecipes() should give the current recipes based on its index', () => {
        expect(service.showCurrentRecipes()).toEqual([]);
    });
});
