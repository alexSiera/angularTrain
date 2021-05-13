import { Recipe } from './../recipe.model';
import { Component } from "@angular/core";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg')
  ];
}
