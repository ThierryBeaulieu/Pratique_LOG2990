import { Injectable } from '@angular/core';
import { RecipeService } from '@app/services/recipe.service.ts/recipe.service';

@Injectable({
    providedIn: 'root',
})
export class CarrouselRecipesService {
    private currentIndex: number;
    constructor(private readonly recipeService: RecipeService) {
        this.currentIndex = 0;
    }

}
