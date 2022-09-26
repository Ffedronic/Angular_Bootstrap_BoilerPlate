import { RecipeServices } from './../recipes.services';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  @Input() selectedRecipe!: Recipe;
  
  constructor(private recipeService:RecipeServices) {
  }

  ngOnInit(): void {
    console.log(this.selectedRecipe)
  }

  onAddToShoppingList(){
    this.recipeService.onAddIngredientsToShoppingList(this.selectedRecipe.ingredients)
  }

}
