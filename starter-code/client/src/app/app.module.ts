import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule ,Routes } from "@angular/router";

import { DishesService } from './service/dishes.service';

import { AppComponent } from './app.component';
import { RecipesComponent } from './components/recipes/recipes.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: RecipesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DishesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
