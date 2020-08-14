import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { NewMessageComponent } from 'src/app/new-message/new-message.component';
import { ListTaskComponent } from 'src/app/list-task/list-task.component';
import { NewTaskComponent } from './new-task/new-task.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'new',component:NewMessageComponent},
  {path:'newTask',component:NewTaskComponent},
  {path:'list',component:ListTaskComponent},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
