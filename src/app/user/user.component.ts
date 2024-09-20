import { Component, Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { type User } from './user.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  @Input({required:true}) user!:User;
  @Input({required:true}) selected!:boolean;
  @Output() select=new EventEmitter<string>();
    get imagePath(){
      return '.././assests/users/'+this.user.avatar;
    }
    

    onSelectUser(){
      this.select.emit(this.user.id);
    }
      
}
