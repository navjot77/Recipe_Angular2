import { Component, OnInit, Input } from '@angular/core';
import { RecipeClass } from '../recipe-class';

@Component({
  moduleId: module.id,
  selector: 'rp-recipe-item',
  templateUrl: 'recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {

@Input() recipe: RecipeClass;

  constructor() { }

  ngOnInit() {
  }

}
