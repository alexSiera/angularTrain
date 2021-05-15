import { RecipesComponent } from './recipes/recipes.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { ShoppingListEditComponent } from './shopping/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecipeListItemСomponent } from './recipes/recipe-list/recipe-list-item/recipe-list-item.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { FormsModule } from '@angular/forms';
import { ShoppingService } from './shopping/shopping.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeListItemСomponent,
    RecipeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
