import { Component, OnInit } from '@angular/core';
import { DishesService } from '../../service/dishes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [DishesService]
})
export class RecipesComponent implements OnInit {

  recipe: any;
  constructor(private recipes: DishesService) { }

  ngOnInit() {
  }

  getRecipes() {
   this.recipes.getRecipes()
     .subscribe((recipe) => this.recipe = recipe);
 }

}
