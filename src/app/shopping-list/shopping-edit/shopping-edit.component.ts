import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ShoppingListService } from './../shopping-list.services';
import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingListFormGroup') shoppingListForm!: NgForm;

  Subscription!: Subscription;

  editedIndexItem!: number;

  editMode: boolean = false;

  editedItem!: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.Subscription = this.shoppingListService.startEditing.subscribe(
      (index: number) => {
        this.editedIndexItem = index;

        this.editMode = true;

        this.editedItem = this.shoppingListService.getOneIngredient(index);

        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.Subscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    const values = form.value;

    const newIngredient = new Ingredient(values.name, values.amount);

    if (this.editMode) {
      this.shoppingListService.updateOneIngredient(
        this.editedIndexItem,
        newIngredient
      );
    } else {
      this.shoppingListService.addIngredients(newIngredient);
    }

    form.reset();

    this.editMode = false;
  }

  onClear() {
    this.shoppingListForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.onClear()
    this.shoppingListService.deleteIngredient(this.editedIndexItem);
  }
}
