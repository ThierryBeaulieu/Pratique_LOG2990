import { Component, Input } from '@angular/core';
import { Recipe } from '@app/interfaces/recipe';
@Component({
    selector: 'app-recipe-card',
    templateUrl: './recipe-card.component.html',
    styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent {
    @Input() recipe: Recipe;

    getRecipeName(): string {
        return this.recipe.name;
    }
    getImg(): string {
        return this.recipe.img;
    }
}
