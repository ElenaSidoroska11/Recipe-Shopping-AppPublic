import {Component, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit ,OnDestroy{
  isAuthenticated=false;
  private userSub: Subscription;
  //@Output() featureSelected = new EventEmitter<string>();

  //onSelect(feature: string){
//this.featureSelected.emit(feature);
 //ova e za prethodno navigation }

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) { }

              ngOnInit(){
    this.userSub=this.authService.user.subscribe(user=>{
      this.isAuthenticated= !user ? false : true;
      console.log(!user);
      console.log(!!user);
    });
              }

 onSaveData(){
    this.dataStorageService.storeRecipes();
 }
 onFetchData(){
    this.dataStorageService.fetchRecipes().subscribe();
 }
 onLogout(){
    this.authService.logout();
 }

 ngOnDestroy() {
    this.userSub.unsubscribe();
 }

}
