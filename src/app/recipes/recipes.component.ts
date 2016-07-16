import { Component, OnInit } from '@angular/core';
import { RecipeClass } from './recipe-class';
import { RecipeListComponent } from './recipe-list';
import {RecipeDetailComponent} from './recipe-detail';



@Component({
  moduleId: module.id,
  selector: 'rp-recipes',
  templateUrl: 'recipes.component.html',
  directives: [ RecipeListComponent, RecipeDetailComponent ]
})
export class RecipesComponent implements OnInit {
selectedRecipe: RecipeClass;
  constructor() { }

  ngOnInit() {
  }



}
