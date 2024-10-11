import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css'],
})
export class CustomerRegistrationComponent {
  customer = {
    name: '',
    email: '',
    date_of_birth: '',
    phone: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onSubmit() {
    // Make an HTTP POST request to your backend to register the customer
    this.http.post('http://localhost:3000/register', this.customer).subscribe(
      response => {
        console.log('Customer registered successfully', response);
        // Navigate back to the CustomersInfo page or another page after successful registration
        this.router.navigate(['/CustomersInfo']);
      },
      error => {
        console.error('Error registering customer', error);
      }
    );
  }
}
