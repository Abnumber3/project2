import { Component, computed,  } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { AuthComponent } from './auth/auth.component';
import { LearningResourcesComponent } from './learning-resources/learning-resources.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [AuthComponent, LearningResourcesComponent],
})
export class AppComponent {


constructor(private authService: AuthService) {}


isAdmin = computed(()=>{
  return this.authService.activePermission() === 'admin';
})



}

