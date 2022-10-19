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
    });

    it('CarrouselRecipesService should be created', () => {
        expect(service).toBeTruthy();
    });

    it('showCurrentRecipes() should give the current recipes based on its index', () => {
        expect(spyRecipeService.getAllRecipes).toHaveBeenCalled();
    });

    it('showCurrentRecipes() should give the current recipes based on its index', () => {
        spyRecipeService.getAllRecipes.and.callFake(() => {
            return BASIC_TESTING_RECIPES;
        });
        const recipes = service.showCurrentRecipes();
        expect(recipes).toEqual([BASIC_TESTING_RECIPES[0], BASIC_TESTING_RECIPES[1]]);
    });

    it("scrollNext2Recipes() should return true if it's possible to scroll the next 2 recipes", () => {
        expect(service.scrollNext2Recipes()).toBeTruthy();
    });

    it("scrollNext2Recipes() should return false if it's impossible to scroll the next 2 recipes", () => {
        service.scrollNext2Recipes();
        expect(service.scrollNext2Recipes()).toBeFalsy();
    });

    it("scrollBack2Recipes() should return true if it's possible to scroll back 2 recipes", () => {
        service.scrollNext2Recipes();
        expect(service.scrollBack2Recipes()).toBeTruthy();
    });

    it("scrollBack2Recipes() should return false if it's impossible to scroll back 2 recipes", () => {
        service.scrollNext2Recipes();
        expect(service.scrollNext2Recipes()).toBeFalsy();
    });

    it('showCurrentRecipes() should show one available recipe after calling scrollNext2Recipes()', () => {
        service.scrollNext2Recipes();
        expect(service.showCurrentRecipes()).toEqual([BASIC_TESTING_RECIPES[2]]);
    });

    it('showCurrentRecipes() should show two recipe after calling scrollBack2Recipes()', () => {
        service.scrollNext2Recipes();
        service.scrollBack2Recipes();
        expect(service.showCurrentRecipes()).toEqual([BASIC_TESTING_RECIPES[0], BASIC_TESTING_RECIPES[1]]);
    });
});
