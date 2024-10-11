import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Customer {
  customer_id: number;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  address: string;
  phone_number: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl = 'http://localhost:3000/CustomersInfo';

  constructor(private http: HttpClient) {}

  // Obtener todos los clientes
  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  } // Cierre correcto del método

  // Agregar un nuevo cliente
  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);
  } // Cierre correcto del método
}
