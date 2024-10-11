import { Component, OnInit } from '@angular/core';
import { CustomerInfoService, CustomerInfo } from '../../services/customer-info.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-list.component.html', // Ensure this path is correct
  styleUrls: ['./customer-list.component.css'], // Ensure this path is correct
})
export class CustomerListComponent implements OnInit {
  customers: CustomerInfo[] = [];

  constructor(private customerInfoService: CustomerInfoService) {}

  ngOnInit(): void {
    this.customerInfoService.getCustomersInfo().subscribe((data: CustomerInfo[]) => {
      this.customers = data;
      console.log(this.customers);
    });
  }
}
