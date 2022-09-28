import { ShoppingListService } from './../shopping-list/shopping-list.services';
import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeServices {

  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'A simply test Recipe',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg',
      [new Ingredient('Eggs', 10), new Ingredient('Tomatoes', 3)]
    ),
    new Recipe(
      'A test Recipe',
      'A simply test Recipe',
      'https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
      [new Ingredient('Eggs', 10), new Ingredient('Tomatoes', 3)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getOneRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  onAddIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addRecipesIngredients(ingredients);
  }
}
