import { Component, OnInit } from '@angular/core';
import { DEFAULT_RECIPES } from '@app/contants/default-recipes';
import { Recipe } from '@app/interfaces/recipe';

@Component({
    selector: 'app-carrousel',
    templateUrl: './carrousel.component.html',
    styleUrls: ['./carrousel.component.scss'],
})
export class CarrouselComponent implements OnInit {
    shownRecipes: Recipe[];

    ngOnInit(): void {
        this.shownRecipes = DEFAULT_RECIPES;
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
