import {Component, OnDestroy, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit ,OnDestroy{
  //@Output() recipeWasSelected= new EventEmitter<Recipe>();
recipes: Recipe[];
subscription: Subscription;
// =[
//new Recipe('A Test Recipe' , 'This is a simply a test' ,
 // 'https://www.spendwithpennies.com/wp-content/uploads/2019/02/Easy-Homemade-CrepesEssy-Homemae-Crepes-SpendWithPennies-25.jpg'),
  //new Recipe('A Test2 Recipe' , 'This is a simply a test' ,
   // 'https://www.spendwithpennies.com/wp-content/uploads/2019/02/Easy-Homemade-CrepesEssy-Homemae-Crepes-SpendWithPennies-25.jpg')
// ];


  constructor(private recipeService:RecipeService,
             private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription=this.recipeService.recipesChanged
      .subscribe(
      (recipes: Recipe[]) => {
        this.recipes =recipes;
      }
      );
    this.recipes= this.recipeService.getRecipes();
  }
  //onRecipeSelected(recipe: Recipe){
   // this.recipeWasSelected.emit(recipe);
  //}
  onNewRecipe(){
this.router.navigate(['new'] ,{relativeTo:this.route});
  }
ngOnDestroy() {
    this.subscription.unsubscribe();
}

}
