import { Recipe } from './recipe.model';
import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()

export class RecipeServices {
  
    selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'A simply test Recipe',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'
    ),
    new Recipe(
      'A test Recipe',
      'A simply test Recipe',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2015/11/shakshuka-11.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  selectRecipe(recipe: Recipe){
    this.selectedRecipe.emit(recipe)
  }
}
