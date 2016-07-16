import { Component, OnInit, Input } from '@angular/core';

import { RecipeClass } from "../recipe-class";

@Component({
   moduleId: module.id,
  selector: 'rp-recipe-detail',
  templateUrl: 'recipe-detail.component.html'   
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe : RecipeClass;

  constructor() { }

  ngOnInit() {
  }

}
