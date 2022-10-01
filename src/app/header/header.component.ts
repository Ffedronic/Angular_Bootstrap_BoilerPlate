import { Component, OnInit } from '@angular/core';

import { RecipeServices } from './../recipes/recipes.services';
import { DataStorageService } from './../shared/dataStorage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeServices
  ) {}

  ngOnInit(): void {}

  onStore() {
    this.dataStorageService.storeRecipes();
  }

  onFetch() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
