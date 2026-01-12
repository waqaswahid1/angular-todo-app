import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, GreetingComponent, CounterComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  homeMessage = signal('Welcome to TaskFlow - Your personal task management solution');

  features = [
    {
      icon: 'clipboard',
      title: 'Organize Tasks',
      description: 'Keep all your tasks organized in one place with our intuitive interface.'
    },
    {
      icon: 'check',
      title: 'Track Progress',
      description: 'Mark tasks as complete and watch your productivity soar.'
    },
    {
      icon: 'search',
      title: 'Quick Search',
      description: 'Find any task instantly with powerful search and filters.'
    }
  ];
}
