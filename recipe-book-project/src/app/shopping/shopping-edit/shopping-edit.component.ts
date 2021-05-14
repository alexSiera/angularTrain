import { Ingredient } from './../../shared/ingredient.model';
import { Component, ElementRef, ViewChild, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingListEditComponent {
  @ViewChild('nameInput') ingredientNameRef: ElementRef;
  @ViewChild('ammountInput') ingredientAmmRef: ElementRef;
  @Output() onIngredientAdded = new EventEmitter<Ingredient>();
  ingredients: Ingredient[] = [];
  addNewIngridient() {
    const ingName = this.ingredientNameRef.nativeElement.value;
    const ingAmmount = this.ingredientAmmRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmmount);
    this.onIngredientAdded.emit(newIngredient);
  }
}
