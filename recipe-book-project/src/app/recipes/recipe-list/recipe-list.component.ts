import { RecipeService } from './../recipes.service';
import { Recipe } from './../recipe.model';
import { Component } from "@angular/core";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})

export class RecipeListComponent {
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipeService) {

  }
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

}
