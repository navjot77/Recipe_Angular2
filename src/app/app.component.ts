import { Component } from '@angular/core'; 
import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes/';
import { ShoppingListComponent } from './shopping-list/';

@Component({
  moduleId: module.id,
  selector: 'rp-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [HeaderComponent, RecipesComponent, ShoppingListComponent]
})
export class AppComponent {
  title = 'My-first-app works!';
}
