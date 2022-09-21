import { Ingredient } from './../../shared/ingredient.model';
import {
  Component,
  ElementRef,
  OnInit,
  Output,
  ViewChild,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput!: ElementRef;

  @ViewChild('amountInput') amountInput!: ElementRef;

  @Output() addedIngredient = new EventEmitter<Ingredient>();

  @Output() deleteAllIngredients = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onAdd() {
    const name = this.nameInput.nativeElement.value
    const amount = this.amountInput.nativeElement.value 
    this.addedIngredient.emit(new Ingredient(name, amount));
    this.amountInput.nativeElement.value = null;
    this.nameInput.nativeElement.value = '';
  }

  // onDelete() {
  //   this.deleteAllIngredients.emit();
  // }

  // onClear() {
  //   this.amountInput.nativeElement.value = null;
  //   this.nameInput.nativeElement.value = '';
  // }
}
