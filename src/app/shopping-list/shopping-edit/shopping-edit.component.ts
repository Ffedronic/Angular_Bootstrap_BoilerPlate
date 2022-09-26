import { ShoppingListService } from './../shopping-list.services';
import { Ingredient } from './../../shared/ingredient.model';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput!: ElementRef;

  @ViewChild('amountInput') amountInput!: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onAdd() {
    const name:string = this.nameInput.nativeElement.value;

    const amount:number = this.amountInput.nativeElement.value;
    
    const addedIngredient = new Ingredient(name, amount);
    
    this.shoppingListService.addIngredients(addedIngredient);
    
  }
}
