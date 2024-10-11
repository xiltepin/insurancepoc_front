import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';  // Import Routes type
import { CustomerListComponent } from './app/components/customer-list/customer-list.component';
import { CustomerRegistrationComponent } from './app/components/customer-registration/customer-registration.component';
import { HomeComponent } from './app/components/home/home.component';
// Explicitly declare routes as type Routes
const routes: Routes = [
  { path: 'CustomersInfo', component: CustomerListComponent },
  { path: 'customer-registration', component: CustomerRegistrationComponent },
  { path: '', component: HomeComponent }, // Correct redirect
  { path: '**', redirectTo: ''} // Redirect unknown routes
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes) // Correctly using provideRouter
  ]
});
