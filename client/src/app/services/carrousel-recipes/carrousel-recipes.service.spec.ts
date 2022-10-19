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
        TestBed.configureTestingModule({
            providers: [{ provide: RecipeService, useValue: spyRecipeService }],
        });
        service = TestBed.inject(CarrouselRecipesService);
        // eslint-disable-next-line dot-notation
        service['recipeService']['allRecipes'] = BASIC_TESTING_RECIPES;

        // eslint-disable-next-line dot-notation
        spyRecipeService['allRecipes'] = BASIC_TESTING_RECIPES;
    });

    it('CarrouselRecipesService should be created', () => {
        expect(service).toBeTruthy();
    });

    it('showCurrentRecipes() should give the current recipes based on its index at the beginning', () => {
        service.showCurrentRecipes();
        expect(spyRecipeService.getRecipeByIndex).toHaveBeenCalledWith(0);
        expect(spyRecipeService.getRecipeByIndex).toHaveBeenCalledWith(1);
    });

    it("scrollNext2Recipes() should return true if it's possible to scroll the next 2 recipes", () => {
        service.scrollNext2Recipes();
        expect(spyRecipeService.isIndexOutOfRange).toHaveBeenCalled();
    });

    it("scrollBack2Recipes() should return true if it's possible to scroll back 2 recipes", () => {
        service.scrollBack2Recipes();
        expect(spyRecipeService.isIndexOutOfRange).toHaveBeenCalled();
    });
});
