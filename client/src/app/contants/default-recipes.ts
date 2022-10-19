import { Recipe } from '@app/interfaces/recipe';

export const DEFAULT_RECIPES: Recipe[] = [
    {
        title: 'Salade de légumes',
        img: '',
        ingredients: ['Feuilles vertes', 'concombre', 'amandes', 'tomates cerises'],
        steps: [
            'Placer les feuilles vertes dans un bol',
            'Épelucher le concombres',
            'Couper les tomates cerises',
            'Placer les tomates cerises dans le bol',
            'Griller les amandes',
            'Broyer les amandes',
            'Mélanger le tout',
        ],
    },
];
