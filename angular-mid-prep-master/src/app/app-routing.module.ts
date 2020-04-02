import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: 'faculty', component: MainComponent},
  { path: '', redirectTo: '/faculty', pathMatch: 'full'},
  { path: 'faculty/:id/students', component: StudentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
