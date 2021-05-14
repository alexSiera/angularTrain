import { Component } from '@angular/core';
import { RecipeService } from './recipes/recipes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RecipeService]

})
export class AppComponent {
  componentType = '';
  onNavbarLinkChange(type: string) {
    this.componentType = type;
  }
}
