import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent {
  tasks = signal([
    { title: 'Task 1', completed: true },
    { title: 'Task 2', completed: false },
    { title: 'Task 3', completed: true }
  ]);

  filter = signal('All');

  get filteredTasks() {
    const filterValue = this.filter();
    if (filterValue === 'Completed') {
      return this.tasks().filter(task => task.completed);
    } else if (filterValue === 'Pending') {
      return this.tasks().filter(task => !task.completed);
    }
    return this.tasks();
  }

  changeFilter(filterValue: string) {
    this.filter.set(filterValue);
  }
}
