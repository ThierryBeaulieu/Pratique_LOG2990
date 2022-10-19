import { Component, OnInit } from '@angular/core';
import { DEFAULT_RECIPES } from '@app/contants/default-recipes';
import { Recipe } from '@app/interfaces/recipe';

@Component({
    selector: 'app-admin-page',
    templateUrl: './admin-page.component.html',
    styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
    allRecipes: Recipe[];
    shownRecipes: Recipe[];

    ngOnInit(): void {
        this.allRecipes = DEFAULT_RECIPES;
        this.shownRecipes = [];
    }
}
