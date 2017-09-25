import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'http://ichef.bbci.co.uk/food/ic/food_16x9_506/recipes/chicken_pasta_bake_25701_16x9.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
