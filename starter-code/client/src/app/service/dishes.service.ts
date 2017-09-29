import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class DishesService {

  constructor(private http: Http) { }

  getRecipes() {
    return this.http.get('mongodb://localhost/recipe-app');
  }

}
