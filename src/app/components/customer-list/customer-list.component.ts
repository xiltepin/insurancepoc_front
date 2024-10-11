import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { CustomerInfoService, CustomerInfo } from '../../services/customer-info.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
  standalone: true,
  imports: [CommonModule]  // Agrega CommonModule aquí
})
export class CustomerListComponent implements OnInit {
  customers: CustomerInfo[] = [];

  constructor(private customerInfoService: CustomerInfoService) {}

  ngOnInit(): void {
    this.customerInfoService.getCustomersInfo().subscribe((data: CustomerInfo[]) => {
      this.customers = data;
      //console.log(this.customers);
    });
  }
}
