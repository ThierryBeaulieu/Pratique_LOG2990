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

    onNotify(name: string): void {
        if (name === 'showNext2Recipes') {
            this.showNext2Recipes();
        }
        if (name === 'showBack2Recipes') {
            this.showNext2Recipes();
        }
    }

    showNext2Recipes(): void {
        console.log('showing next 2 recipes');
    }
    showBack2Recipes(): void {
        console.log('showing back 2 recipes');
    }
}
