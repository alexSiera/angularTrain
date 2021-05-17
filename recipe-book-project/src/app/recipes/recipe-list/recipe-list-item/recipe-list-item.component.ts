import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Recipe } from "../../recipe.model";
import { RecipeService } from "../../recipes.service";

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})

export class RecipeListItemСomponent {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) {

  }
  onItemClick() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
