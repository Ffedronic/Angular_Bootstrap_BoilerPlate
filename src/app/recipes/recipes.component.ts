import { RecipeServices } from './recipes.services';
import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeServices]
})
export class RecipesComponent implements OnInit {

  selectedRecipe!: Recipe;

  constructor(private recipeServices:RecipeServices) { }

  ngOnInit() {
    this.recipeServices.selectedRecipe.subscribe((recipe:Recipe)=>{this.selectedRecipe = recipe})
  }
}
