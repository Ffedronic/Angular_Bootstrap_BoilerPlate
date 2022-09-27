import { RecipeServices } from './../recipes.services';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes!: Recipe[];
  constructor(private recipeService: RecipeServices, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route});
  }
}
