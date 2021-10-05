import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../i-customer";

@Component({
  selector: 'app-cus-list',
  templateUrl: './cus-list.component.html',
  styleUrls: ['./cus-list.component.css']
})
export class CusListComponent implements OnInit {
  customer: ICustomer[] = [
    {
      id: 1,
      idTypeCustomer: 2,
      name: 'bao',
      birthday: '23/11/2000',
      CMND: 123456789,
      phoneNumber: 123456789,
      email: 'hoangbao@gmail.com',
      address: 'da nang'
    },

    {
      id: 2,
      idTypeCustomer: 1,
      name: 'hoang',
      birthday: '25/1/1995',
      CMND: 123456789,
      phoneNumber: 123456789,
      email: 'hoangbao@gmail.com',
      address: 'da nang'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }


  newCustomer(value: ICustomer) {
    this.customer.push(value);
  }

  deleteCustomer(id: number) {

    const index = this.customer.findIndex(i => i.id === id);
    this.customer.splice(index, 1);
  }

  customerEdit: ICustomer | undefined;

  showFormEdit(customers: ICustomer) {
    this.customerEdit = customers;
  }

  editCustomer(value: ICustomer) {
    this.customer.push(value);
  }

}
