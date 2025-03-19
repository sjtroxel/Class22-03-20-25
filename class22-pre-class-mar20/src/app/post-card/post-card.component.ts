import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-post-card',
  standalone: true,
  imports: [],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {
  title = signal('Pre-Lesson Exercise 1');
  content = signal('Here is the content of the post.');

  changeContent() {
    this.content.set('Now the content has changed!');
  }
}
