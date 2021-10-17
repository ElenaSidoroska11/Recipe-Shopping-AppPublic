import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()

export class RecipeService{
  recipesChanged= new Subject<Recipe[]>();
   //recipeSelected= new Subject<Recipe>();
 //private recipes: Recipe[] =[
    //new Recipe('Tavce Gravce' ,
     // 'Makedonski Recept' ,
    //  'https://thefoodhog.com/wp-content/uploads/2020/04/tavce-gravce-768x595.jpg',
    //[
     // new Ingredient('meat',1),
       // new Ingredient('French Fries',10)
      //  ]),

    //new Recipe('Gjomleze' ,
     // 'Specijalitet na Ohrid' ,
     // 'https://upload.wikimedia.org/wikipedia/commons/6/68/%D0%83%D0%BE%D0%BC%D0%BB%D0%B5%D0%B7%D0%B5%281%29.jpg',
   // [
     //   new Ingredient('Buns',2),
      //    new Ingredient('French Fries',10)
      //  ])
 // ];
  private recipes: Recipe[] = [];
 constructor(private slService:ShoppingListService) {}

 setRecipes(recipes: Recipe[]){
   this.recipes= recipes;
   this.recipesChanged.next(this.recipes.slice());
 }

 getRecipes(){
   return this.recipes.slice();
 }

 getRecipe(index:number){
   return this.recipes[index];
 }

 addIngredientsToShoppingList(ingredients:Ingredient[]){
   this.slService.addIngredients(ingredients);

 }
 addRecipe(recipe: Recipe){
   this.recipes.push(recipe);
   this.recipesChanged.next(this.recipes.slice());
 }

 updateRecipe(index: number, newRecipe: Recipe){
   this.recipes[index] = newRecipe;
   this.recipesChanged.next(this.recipes.slice());
 }
 deleteRecipe(index: number){
   this.recipes.splice(index,1);
   this.recipesChanged.next(this.recipes.slice());
 }
}
