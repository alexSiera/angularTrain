import { RecipeService } from './../../recipes/recipes.service';
import { ShoppingService } from './../shopping.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, ElementRef, ViewChild, Output, EventEmitter, Input, OnInit } from "@angular/core";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') ingredientNameRef: ElementRef;
  @ViewChild('ammountInput') ingredientAmmRef: ElementRef;
  @Output() onIngredientAdded = new EventEmitter<Ingredient>();
  currentIngredient: Ingredient;
  // @Input() recipeId: number;
  constructor(private shoppingService: ShoppingService, private recipeService: RecipeService) {}
  addNewIngridient() {
    const ingName = this.ingredientNameRef.nativeElement.value;
    const ingAmmount = this.ingredientAmmRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmmount);
    // this.onIngredientAdded.emit(newIngredient);
    this.shoppingService.onNewIngredientAdded(newIngredient);
    // onNewINgredientAdded(newIngr: Ingredient) {
    //   this.shoppingService.onNewIngredientAdded(newIngr);
    // };
  }
  deleteIngridient() {
    const ingName = this.ingredientNameRef.nativeElement.value;
    this.shoppingService.onIngredientDeleted(ingName);
  }
  ngOnInit() {
    this.recipeService.recipeSelected.subscribe(
      (ing: Ingredient) => this.currentIngredient = ing
    )
  }
}
