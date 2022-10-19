import { Recipe } from '@app/interfaces/recipe';

export const DEFAULT_RECIPES: Recipe[] = [
    {
        name: 'Salade de légumes',
        img: './assets/salade-img.bmp',
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
        stars: 3,
    },
    {
        name: 'Brochettes de poulet',
        img: './assets/salade-img.bmp',
        ingredients: ['Feuilles vertes', 'poulet', 'piment rouge', 'tomates cerises'],
        steps: [
            'Mettre le poulet dans un bol',
            'Mettre la marinade sur le poulet',
            'Enfiler le poulet sur une brochette',
            'Placer les tomates cerises dans le bol',
            'Griller les amandes',
            'Broyer les amandes',
            'Mélanger le tout',
        ],
        stars: 4,
    },
    {
        name: 'Couscous royale',
        img: './assets/salade-img.bmp',
        ingredients: ['Couscous royale', 'poulet', 'piment rouge', 'tomates cerises'],
        steps: [
            'Mettre le poulet dans un bol',
            'Mettre le couscous dans le même bol',
            "Mettre de l'eau bouillante sur le couscous",
            'Placer les tomates cerises dans le bol',
            'Griller les amandes',
            'Broyer les amandes',
            'Mélanger le tout',
        ],
        stars: 5,
    },
];

export const DEFAULT_NB_STARS = 5;
