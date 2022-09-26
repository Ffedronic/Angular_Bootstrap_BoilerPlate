import { RecipeServices } from './../../recipes.services';
import { Recipe } from './../../recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  
  @Input()
  recipe!: Recipe;
  
  constructor(private recipeServices:RecipeServices) {}

  onSelected(){
   this.recipeServices.selectedRecipe.emit(this.recipe)
  }

  ngOnInit(): void {}
}
