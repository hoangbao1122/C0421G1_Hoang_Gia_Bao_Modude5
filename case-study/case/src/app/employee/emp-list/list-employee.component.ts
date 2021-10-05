import {Component, OnInit} from '@angular/core';
import {IEmployee} from "../i-employee";

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  employee: IEmployee[] = [
    {
      idEmployee: 1,
      name: 'bao',
      position: 1,
      education: 1,
      division: 1,
      birthday: '1/1/2000',
      CMND: 1234565789,
      money: 123456789,
      phone: 123456789,
      email: 'hoang@gmail.com',
      address: 'da nang'
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
