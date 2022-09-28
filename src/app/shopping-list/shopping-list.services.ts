import { Injectable } from '@angular/core';
import { Subject } from "rxjs"

import { Ingredient } from '../shared/ingredient.model';

@Injectable()

export class ShoppingListService {
  private ingredients: Ingredient[] = [];

  ingredientsChanged = new Subject<Ingredient[]>();

  constructor() {}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient:Ingredient){
    this.ingredients.push(ingredient)
    this.ingredientsChanged.next(this.ingredients.slice())
  }

  addRecipesIngredients(ingredients:Ingredient[]){
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.next(this.ingredients.slice())
  }
}
