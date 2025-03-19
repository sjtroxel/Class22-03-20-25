import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostCardComponent } from './post-card/post-card.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostCardComponent, TaskListComponent, UserListComponent
    
  ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'class22-pre-class-mar20';
}
