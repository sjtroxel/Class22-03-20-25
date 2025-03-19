import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users = signal([
    { name: 'John Doe', avatar: 'https://via.placeholder.com/50', status: 'Active' },
    { name: 'Jane Smith', avatar: 'https://via.placeholder.com/50', status: 'Offline' },
    { name: 'Bob Johnson', avatar: 'https://via.placeholder.com/50', status: 'Active' }
  ]);
}
