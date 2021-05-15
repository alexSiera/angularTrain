import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';

export class ShoppingService {
  public ingredients: Ingredient[] = [
    new Ingredient('Apples', 5)
  ];
  ingridientsChanged = new EventEmitter<Ingredient[]>();
  getIngredients() {
    return this.ingredients.slice();
  }
  onNewIngredientAdded(newIng: Ingredient) {
    console.log(newIng);
    this.ingredients.push(newIng);
    this.ingridientsChanged.emit(this.ingredients.slice());
  }
  onAddIngrToShoppingList(newIngredients: Ingredient[]) {
    this.ingredients.push(...newIngredients);
  }
  onIngredientDeleted(ingredientName: string) {
    console.log(ingredientName);
    const currentElement = this.ingredients.findIndex((el) => el.name === ingredientName);
    console.log(currentElement);
    if (currentElement !== -1) {
      this.ingredients.splice(currentElement, 1);
    } else {
      console.log(`Sorry there is no ingredient elements with name: ${ingredientName}`)
    }
  }
}
