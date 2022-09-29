import { Subscription } from 'rxjs';
import { Recipe } from './../recipe.model';
import { RecipeServices } from './../recipes.services';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id!: number;
  editMode = false;
  recipeForm!: FormGroup;
  subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeServices,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];

      this.editMode = params['id'] != null;

      this.initForm();
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray<FormGroup>([]);

    if (this.editMode) {
      const recipe = this.recipeService.getOneRecipe(this.id);

      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;

      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      inputName: new FormControl(recipeName, Validators.required),
      inputImagePath: new FormControl(recipeImagePath, Validators.required),
      inputDescription: new FormControl(recipeDescription, Validators.required),
      ingredients: recipeIngredients,
    });
  }

  get controls() {
    // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }
  onSubmit() {
    const newRecipe = new Recipe(
      this.recipeForm.value['inputName'],
      this.recipeForm.value['inputDescription'],
      this.recipeForm.value['inputImagePath'],
      this.recipeForm.value['ingredients']
    );
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe);
    } else {
      console.log(this.recipeForm.value);
      this.recipeService.addRecipe(newRecipe);
    }
    this.onCancel();
  }

  onAddIngredients() {
    let ingredientsToAdd = this.recipeForm.get('ingredients') as FormArray;
    ingredientsToAdd.push(new FormGroup({
          name: new FormControl(),
          amount: new FormControl(),
        }))
    // (<FormArray>this.recipeForm.get('ingredients')).push(
    //   new FormGroup({
    //     name: new FormControl(),
    //     amount: new FormControl(),
    //   })
    // );
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDelete(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
