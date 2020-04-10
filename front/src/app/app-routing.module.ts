import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {DishComponent} from './dish/dish.component';
import {DishItemComponent} from './dish-item/dish-item.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'menu/:id', component: DishComponent},
  {path: 'dishes', component: DishComponent},
  {path: '', redirectTo: '/menu', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
