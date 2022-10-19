import { Injectable } from '@angular/core';
import { DEFAULT_RECIPES } from '@app/contants/default-recipes';
import { Recipe } from '@app/interfaces/recipe';

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    private allRecipes: Recipe[];
    constructor() {
        this.allRecipes = DEFAULT_RECIPES;
    }
    addRecipe(recipe: Recipe): void {
        this.allRecipes.push(recipe);
    }
    getAllRecipes(): Recipe[] {
        return this.allRecipes;
    }
    getRecipeByIndex(index: number): Recipe | undefined {
        if (!this.isIndexOutOfRange(index)) {
            return this.allRecipes[index];
        }
        return;
    }
    isIndexOutOfRange(index: number): boolean {
        return index < 0 || index >= this.allRecipes.length;
    }
}
