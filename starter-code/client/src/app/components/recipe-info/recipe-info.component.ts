import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishesService } from '../../service/dishes.service';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit {
  recipeId: string;

  constructor(private newDishesService: DishesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
    this.recipeId = params['id'];
    });
  }

}
