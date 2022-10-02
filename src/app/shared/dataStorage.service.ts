import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { RecipeServices } from './../recipes/recipes.services';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class DataStorageService {
  constructor(
    private recipeService: RecipeServices,
    private http: HttpClient
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http
      .put(
        'https://realtime-database-test-project-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://realtime-database-test-project-default-rtdb.europe-west1.firebasedatabase.app/recipes.json'
      )
      .pipe(
        /**
         * ! If a recipe doesn't contain ingredients when we fetch the data, add a empty array to its ingredients property
         */
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
