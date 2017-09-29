import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class DishesService {

  constructor(private http: Http) { }

  getRecipes() {
    return this.http.get('localhost/recipe-app')
    .map((res) => res.json());
  }

}
