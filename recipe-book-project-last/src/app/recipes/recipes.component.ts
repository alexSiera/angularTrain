import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: []
})
export class RecipesComponent implements OnInit, OnDestroy {
  selectedRecipe: Recipe;
  private newRecSubs: Subscription;
  constructor() { }

  ngOnInit() {

  }
  ngOnDestroy(): void {
    this.newRecSubs.unsubscribe();
  }
}
