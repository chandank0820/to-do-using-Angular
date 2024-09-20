import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from '../utils/dummy-data/dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { DUMMY_TASKS } from '../utils/dummy-data/dummy-tasks';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title='Angular_app';
  users=DUMMY_USERS;
 selectedUserId?:string;
 tasks=DUMMY_TASKS;
 

 get selectedUser(){
  return this.users.find(user=>user.id===this.selectedUserId) ;

 }
  onSelectUSer(id:string){
    this.selectedUserId=id;
    console.log("selected user with id"+id);
   

  }

}
