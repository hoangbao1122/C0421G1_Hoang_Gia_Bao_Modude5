import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ICustomer} from "../i-customer";



@Component({
  selector: 'app-cus-create',
  templateUrl: './cus-create.component.html',
  styleUrls: ['./cus-create.component.css']
})
export class CusCreateComponent implements OnInit {
  showFormCreate:boolean = false;
  @Output('customerCreate')
  onCreate = new EventEmitter<ICustomer>();

  customer!: ICustomer;

  constructor() {
  }

  ngOnInit(): void {
  }

  createCustomer(id: string, typeId: string, name: string, birthday: string, cmnd: string, phone: string, email: string, address: string) {
    this.customer = {
      id:parseInt(id),
      idTypeCustomer :parseInt(typeId),
      name:name,
      birthday:birthday,
      CMND:parseInt(cmnd),
      phoneNumber:parseInt(phone),
      email:email,
      address:address
    };
    console.log(this.customer);
    this.showFormCreate = false;
    this.onCreate.emit(this.customer);
  }

}
