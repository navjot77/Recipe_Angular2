import { Component, OnInit } from '@angular/core';
import { RecipeItemComponent } from './recipe-item.component';
import{ RecipeClass } from '../recipe-class'

@Component({
  moduleId: module.id,
  selector: 'rp-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent ]
})
export class RecipeListComponent implements OnInit {


recipe = new RecipeClass("dummy", "dummyDescription","http://yummyindiankitchen.com/wp-content/uploads/2015/05/rajma-masala.jpg" );


  constructor() { }

  ngOnInit() {
  }

}
