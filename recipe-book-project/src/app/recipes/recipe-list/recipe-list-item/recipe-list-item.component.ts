import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})

export class RecipeListItemСomponent {
  @Input() recipe: Recipe;
  @Output() itemClicked = new EventEmitter();
  onItemClick() {
    this.itemClicked.emit()
  }
}
