import { Injectable } from '@angular/core';
import { DEFAULT_RECIPES } from '@app/contants/default-recipes';
import { Recipe } from '@app/interfaces/recipe';

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    allRecipes: Recipe[];
    constructor() {
        this.allRecipes = DEFAULT_RECIPES;
    }
}
