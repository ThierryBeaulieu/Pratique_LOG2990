import { Component, OnInit } from '@angular/core';
import { DEFAULT_RECIPES } from '@app/contants/default-recipes';
@Component({
    selector: 'app-recipe-card',
    templateUrl: './recipe-card.component.html',
    styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
    title: string;
    img: string;
    ingredients: string[];
    steps: string[];

    ngOnInit(): void {
        this.title = DEFAULT_RECIPES[0].title;
        this.img = DEFAULT_RECIPES[0].img;
        this.ingredients = DEFAULT_RECIPES[0].ingredients;
        this.steps = DEFAULT_RECIPES[0].steps;
    }

}
