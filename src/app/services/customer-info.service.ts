import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Vehicle {
  vehicleid: number;
  customerid: number;
  licenseplate: string;
  vin: string;
  make?: string;
  model?: string;
  year?: number;
  color?: string;
}

export interface CustomerInfo {
  customer_id: number;
  first_name: string;
  last_name: string;
  date_of_birth: Date; // Cambia a Date si necesitas manipular como objeto Date
  address?: string;
  phone_number?: string;
  email?: string;
  Vehicles?: Vehicle[];
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
