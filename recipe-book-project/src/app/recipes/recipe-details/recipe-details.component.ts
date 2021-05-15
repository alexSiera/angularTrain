import { ShoppingService } from './../../shopping/shopping.service';
import { Component, Input } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})

export class RecipeDetailsComponent {
  constructor(private shoppingService: ShoppingService) {}
  @Input() recipe: Recipe;
  onAddToShoppingList() {
    this.shoppingService.onAddIngrToShoppingList(this.recipe.ingredients);
  }
}
