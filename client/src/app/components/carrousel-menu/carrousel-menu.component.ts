import { Component } from '@angular/core';
import { RecipeService } from '@app/services/recipe.service.ts/recipe.service';

@Component({
    selector: 'app-carrousel-menu',
    templateUrl: './carrousel-menu.component.html',
    styleUrls: ['./carrousel-menu.component.scss'],
})
export class CarrouselMenuComponent {
    constructor(private readonly recipeService: RecipeService) {}

    showBack2Recipes(): void {
        
    }
    showNext2Recipes(): void {}
}
