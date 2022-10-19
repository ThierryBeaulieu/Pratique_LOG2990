import { Component, OnInit } from '@angular/core';
import { Recipe } from '@app/interfaces/recipe';
import { CarrouselRecipesService } from '@app/services/carrousel-recipes/carrousel-recipes.service';

@Component({
    selector: 'app-carrousel',
    templateUrl: './carrousel.component.html',
    styleUrls: ['./carrousel.component.scss'],
})
export class CarrouselComponent implements OnInit {
    shownRecipes: Recipe[];

    constructor(private readonly carrouselRecipeService: CarrouselRecipesService) {}

    ngOnInit(): void {
        this.shownRecipes = this.carrouselRecipeService.showCurrentRecipes();
    }

    onNotify(name: string): void {
        if (name === 'showNext2Recipes') {
            this.showNext2Recipes();
        }
        if (name === 'showBack2Recipes') {
            this.showBack2Recipes();
        }
    }

    showNext2Recipes(): void {
        this.carrouselRecipeService.scrollNext2Recipes();
        this.shownRecipes = this.carrouselRecipeService.showCurrentRecipes();
    }
    showBack2Recipes(): void {
        this.carrouselRecipeService.scrollBack2Recipes();
        this.shownRecipes = this.carrouselRecipeService.showCurrentRecipes();
    }
}
