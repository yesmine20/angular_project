import { Component, signal } from '@angular/core';
import { Member } from './member/member';

@Component({
  selector: 'app-root',
  imports: [Member],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lab1');
}
