import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeClass } from '../recipe-class';
import { RecipeItemComponent } from './recipe-item.component';


@Component({
  moduleId: module.id,
  selector: 'rp-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {

recipe = new RecipeClass("dummy", "dummyDescription","http://yummyindiankitchen.com/wp-content/uploads/2015/05/rajma-masala.jpg" );

@Output() selectedRecipe = new EventEmitter<RecipeClass>();
  constructor() { }
  ngOnInit(){
  }

onclickedSelected(recipe: RecipeClass) {
  this.selectedRecipe.emit(recipe);     

}
}
