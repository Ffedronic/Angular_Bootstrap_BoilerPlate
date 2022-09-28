import { ShoppingListService } from './../shopping-list.services';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddItem(form: NgForm) {
    const values = form.value;

    console.log(values)
    
    const addedIngredient = new Ingredient(values.name, values.amount);

    this.shoppingListService.addIngredients(addedIngredient);

    form.reset()
  }
}
