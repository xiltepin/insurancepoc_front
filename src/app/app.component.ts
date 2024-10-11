import { Component } from '@angular/core';
//import {CustomerListComponent} from './components/customer-list/customer-list.component';
import { RouterOutlet } from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Ensure this path is correct
  styleUrls: ['./app.component.css'], // Ensure this path is correct
  standalone: true, // Ensure this is set for standalone components
  imports: [CommonModule, RouterOutlet],
})
export class AppComponent {
  title = 'Insurance POC';
}
