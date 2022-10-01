import { RecipeServices } from './recipes.services';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { DataStorageService } from './../shared/dataStorage.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeServices
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes();

    if ((recipes.length === 0)) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }
  }
}
