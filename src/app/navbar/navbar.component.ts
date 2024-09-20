import { Component } from '@angular/core';
import { PostComponent } from '../post/post.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [PostComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
