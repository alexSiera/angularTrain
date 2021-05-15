import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is simply a test',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
      ),
    new Recipe(
      'Rice',
      'This is just rice',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojgsKeQxF_XpsTFYG1yjt8IUAqPndz6pCDQAmKU5oPpRaUrnT9Ym18jSLlTn-9cI7M34&usqp=CAU',
        [
          new Ingredient('Buns', 2),
          new Ingredient('Meat', 4)
        ]
      )
  ];
  recipeSelected = new EventEmitter<Recipe>();
  getRecipes() {
    return this.recipes.slice();
  }
}
