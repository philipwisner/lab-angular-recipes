import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishesService } from '../../service/dishes.service';
import { IngredientsService } from '../../service/ingredients.service';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit {
  recipeId: string;
  recipe: any;
  ingredients: any;
  response: any;

  constructor(
     private newDishesService: DishesService,
     private newIngredientsService: IngredientsService,
     private route: ActivatedRoute
   ) { }

  ngOnInit() {
    this.getRecipe()
    this.getIngredients();
  }

  getRecipe() {
    this.route.params.subscribe((params) => {
    this.recipeId = params['id'];
    this.newDishesService.getRecipe(this.recipeId).subscribe((recipe) => this.recipe = recipe);
    });
  }

  getIngredients() {
    this.newIngredientsService.getIngredients().subscribe((newIngredientsService) => this.ingredients = newIngredientsService);
  }

  handleAddIngredient(recipeId, ingredientId, quantity) {
    this.newDishesService.postIngredient(recipeId, ingredientId, quantity)
    .subscribe((res) => {this.response = res});
  }


}
