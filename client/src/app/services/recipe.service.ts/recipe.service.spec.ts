import { TestBed } from '@angular/core/testing';
import { DEFAULT_RECIPES } from '@app/contants/default-recipes';
import { Recipe } from '@app/interfaces/recipe';

import { RecipeService } from './recipe.service';
const TEST_RECIPES = DEFAULT_RECIPES;

describe('RecipeService', () => {
    let service: RecipeService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(RecipeService);
        // eslint-disable-next-line dot-notation
        service['allRecipes'] = TEST_RECIPES;
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
    it('getAllRecipes() should return all of the recipes', () => {
        expect(service.getAllRecipes()).toEqual(DEFAULT_RECIPES);
    });
    it('addRecipe() should add a recipe to the recipes', () => {
        const newRecipe: Recipe = {
            id: '-1',
            name: 'test',
            img: 'testimg',
            steps: [],
            ingredients: [],
            stars: 3,
        };
        service.addRecipe(newRecipe);
        const allRecipes: Recipe[] = service.getAllRecipes();
        expect(allRecipes[allRecipes.length - 1]).toEqual(newRecipe);
    });

    it('getRecipeByIndex(...) should return a recipe based on its index', () => {
        expect(service.getRecipeByIndex(0)).toEqual(TEST_RECIPES[0]);
    });

    it('getRecipeByIndex(...) should return undefined when given a negative index', () => {
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        expect(service.getRecipeByIndex(-1)).toEqual(undefined);
    });

    it('getRecipeByIndex(...) should return undefined when given an index out of range', () => {
        expect(service.getRecipeByIndex(service.getAllRecipes().length)).toEqual(undefined);
    });

    it('isOutOfRange(...) should return true when given an index out of range', () => {
        expect(service.isIndexOutOfRange(service.getAllRecipes().length)).toEqual(true);
    });

    it('isOutOfRange(...) should return true when given an index out of range', () => {
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        expect(service.isIndexOutOfRange(-1)).toEqual(true);
    });
});
