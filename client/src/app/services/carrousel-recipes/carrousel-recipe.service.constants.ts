import { Recipe } from '@app/interfaces/recipe';

const firstRecipe: Recipe = {
    id: '0',
    name: 'firstRecipe',
    img: '',
    ingredients: [],
    steps: [],
    stars: 2,
};

const secondRecipe: Recipe = {
    id: '1',
    name: 'secondRecipe',
    img: '',
    ingredients: [],
    steps: [],
    stars: 3,
};

const thirdRecipe: Recipe = {
    id: '2',
    name: 'thirdRecipe',
    img: '',
    ingredients: [],
    steps: [],
    stars: 3,
};

export const BASIC_TESTING_RECIPES: Recipe[] = [firstRecipe, secondRecipe, thirdRecipe];
