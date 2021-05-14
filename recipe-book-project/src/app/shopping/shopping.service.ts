import { Ingredient } from './../shared/ingredient.model';

export class ShoppingService {
  public ingredients: Ingredient[] = [
    new Ingredient('Apples', 5)
  ];
  onNewIngredientAdded(newIng: Ingredient) {
    console.log(newIng);
    this.ingredients.push(newIng);
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
