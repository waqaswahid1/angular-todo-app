import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <!-- Main App Container -->
    <div class="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-white to-primary-50/30">
      <!-- Header/Navbar -->
      <app-header />
      
      <!-- Main Content Area -->
      <main class="flex-1">
        <router-outlet />
      </main>
      
      <!-- Footer -->
      <footer class="bg-slate-900 text-slate-400 py-8">
        <div class="max-w-6xl mx-auto px-6 text-center">
          <p class="text-sm">
            &copy; 2026 TaskFlow. Built with 
            <span class="text-primary-400">Angular</span> & 
            <span class="text-accent-400">Tailwind CSS</span>
          </p>
        </div>
      </footer>
    </div>
  `,
})
export class AppComponent {
  title = 'TaskFlow';
}
