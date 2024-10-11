import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CustomerInfo {
  customer_id: number;
  first_name: string;
  last_name: string;
  date_of_birth: string; // Cambia a Date si necesitas manipular como objeto Date
  address?: string;
  phone_number?: string;
  email?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CustomerInfoService {
  private apiUrl = 'http://localhost:3000/CustomersInfo'; // Cambia a la URL correcta

  constructor(private http: HttpClient) {}

  getCustomersInfo(): Observable<CustomerInfo[]> {
    return this.http.get<CustomerInfo[]>(this.apiUrl);
  }
}
