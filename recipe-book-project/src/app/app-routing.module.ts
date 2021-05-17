import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ShoppingListComponent } from './shopping/shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/recipes',
    pathMatch: 'full'
  },
  {
    path: 'recipes',
    component: RecipeListComponent
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
