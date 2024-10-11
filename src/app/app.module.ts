import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Moved imports for clarity
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerRegistrationComponent } from './components/customer-registration/customer-registration.component'; // Ensure this component is created
import { AppComponent } from './app.component'; // Import your main app component
import { provideHttpClient } from '@angular/common/http';  // HttpClient import

const routes: Routes = [
  { path: 'CustomersInfo', component: CustomerListComponent },
  { path: 'customer-registration', component: CustomerRegistrationComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Adjust if you have a home component
  { path: '**', redirectTo: '/home' } // Redirect any unknown routes to home
];

@NgModule({
  declarations: [
    AppComponent,  // Include your main app component
    CustomerListComponent,
    CustomerRegistrationComponent // Declare the registration component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) // Correct usage of RouterModule
  ],
  providers: [
    provideHttpClient()  // Provide HttpClient in this way
  ],
  bootstrap: [AppComponent] // Bootstrap the main app component
})
export class AppModule { }
