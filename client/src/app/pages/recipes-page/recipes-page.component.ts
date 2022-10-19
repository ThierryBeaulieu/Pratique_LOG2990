import { Component, OnInit } from '@angular/core';
import { DEFAULT_RECIPES } from '@app/contants/default-recipes';
import { Recipe } from '@app/interfaces/recipe';

@Component({
    selector: 'app-recipes-page',
    templateUrl: './recipes-page.component.html',
    styleUrls: ['./recipes-page.component.scss'],
})
export class RecipesPageComponent implements OnInit {
    allRecipes: Recipe[];
    shownRecipes: Recipe[];

    ngOnInit(): void {
        this.allRecipes = DEFAULT_RECIPES;
        this.shownRecipes = [];
    }
}
