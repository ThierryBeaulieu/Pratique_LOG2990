import { Injectable } from '@angular/core';
import { Recipe } from '@app/interfaces/recipe';
import { RecipeService } from '@app/services/recipe.service.ts/recipe.service';

@Injectable({
    providedIn: 'root',
})
export class CarrouselRecipesService {
    private currentIndex: number;
    constructor(private readonly recipeService: RecipeService) {
        this.currentIndex = 0;
    }

    showCurrentRecipes(): Recipe[] {
        const activeRecipes: Recipe[] = [];
        const firstRecipe = this.recipeService.getRecipeByIndex(this.currentIndex);
        if (firstRecipe !== undefined) {
            activeRecipes.push(firstRecipe);
        }
        const secondRecipe = this.recipeService.getRecipeByIndex(this.currentIndex + 1);
        if (secondRecipe !== undefined) {
            activeRecipes.push(secondRecipe);
        }
        return activeRecipes;
    }
    scrollNext2Recipes(): void {
        if (!this.recipeService.isIndexOutOfRange(this.currentIndex + 2)) {
            this.currentIndex = this.currentIndex + 2;
        }
    }
    scrollBack2Recipes(): void {
        if (!this.recipeService.isIndexOutOfRange(this.currentIndex - 2)) {
            this.currentIndex = this.currentIndex - 2;
        }
    }
}
