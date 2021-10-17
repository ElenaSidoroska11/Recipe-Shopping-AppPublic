import {NgModule} from '@angular/core';
import {AuthCompoment} from './auth.compoment';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
@NgModule({
  declarations:[
AuthCompoment
  ],
  imports:[CommonModule, FormsModule, RouterModule.forChild([{
    path: '' , component: AuthCompoment}]),
    SharedModule
  ]
})

export class AuthModule{}
