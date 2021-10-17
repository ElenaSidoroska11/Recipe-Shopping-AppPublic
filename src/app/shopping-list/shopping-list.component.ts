import { Component, OnInit ,OnDestroy} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit ,OnDestroy {
ingredients: Ingredient[];
private igChangedSub: Subscription;
  //=[
 // new Ingredient('Apples', 5 ),
 // new Ingredient ('Tomatoes' ,10),
  //new Ingredient ('Tomatoes' ,20)
//];
  constructor(private slService: ShoppingListService) {}

  ngOnInit(){
    this.ingredients = this.slService.getIngredients();
    this.igChangedSub=this.slService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[]) =>{this.ingredients= ingredients;}
    );
  }

  onEditItem(index: number) {

this.slService.startedEditing.next(index);

  }
  ngOnDestroy() {
    this.igChangedSub.unsubscribe();
  }

// tslint:disable-next-line:typedef

  //onIngredientAdded(ingredient: Ingredient){
   // this.ingredients.push(ingredient);
//}
}
