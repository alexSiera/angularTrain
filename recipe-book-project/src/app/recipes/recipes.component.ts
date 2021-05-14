import { Recipe } from './recipe.model';
import { Component } from "@angular/core";
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})

export class RecipesComponent {
  recipe: Recipe;
  constructor(private recipeService: RecipeService) {}
  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe(
        (newRecipe: Recipe) => this.recipe = newRecipe
      )
  }
}
