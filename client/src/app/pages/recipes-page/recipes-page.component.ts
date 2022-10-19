import { Component, OnInit } from '@angular/core';
import { DEFAULT_RECIPES } from '@app/contants/default-recipes';
import { Recipe } from '@app/interfaces/recipe';

@Component({
    selector: 'app-recipes-page',
    templateUrl: './recipes-page.component.html',
    styleUrls: ['./recipes-page.component.scss'],
})
export class RecipesPageComponent implements OnInit {
    recipes: Recipe[];

    ngOnInit(): void {
        this.recipes = DEFAULT_RECIPES;
    }
}
