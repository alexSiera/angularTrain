import { Recipe } from './../recipe.model';
import { Component } from "@angular/core";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'),
    new Recipe('Rice', 'This is just rice', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQojgsKeQxF_XpsTFYG1yjt8IUAqPndz6pCDQAmKU5oPpRaUrnT9Ym18jSLlTn-9cI7M34&usqp=CAU')

  ];
}
