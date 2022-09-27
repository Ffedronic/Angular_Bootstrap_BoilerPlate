import { RecipeServices } from './../recipes.services';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  selectedRecipe!: Recipe;
  id!: number;

  constructor(
    private recipeService: RecipeServices,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.selectedRecipe = this.recipeService.getOneRecipe(this.id)
    });
    console.log(this.selectedRecipe);
  }

  onAddToShoppingList() {
    this.recipeService.onAddIngredientsToShoppingList(
      this.selectedRecipe.ingredients
    );
  }
}
