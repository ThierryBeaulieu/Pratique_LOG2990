import { Component } from '@angular/core';

const DEFAULT_TITLE = 'Salade de légumes';
@Component({
    selector: 'app-recipe-card',
    templateUrl: './recipe-card.component.html',
    styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent {
    title: string = DEFAULT_TITLE;
}
