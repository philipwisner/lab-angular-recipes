import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule ,Routes } from "@angular/router";

import { DishesService } from './service/dishes.service';
import { IngredientsService } from './service/ingredients.service';

import { AppComponent } from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeInfoComponent } from './components/recipe-info/recipe-info.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: RecipesComponent },
  { path: 'home/:id', component: RecipeInfoComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeInfoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesService, IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
