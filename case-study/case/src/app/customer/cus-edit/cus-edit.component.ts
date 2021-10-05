import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICustomer} from "../i-customer";

@Component({
  selector: 'app-cus-edit',
  templateUrl: './cus-edit.component.html',
  styleUrls: ['./cus-edit.component.css']
})
export class CusEditComponent implements OnInit {

  @Input("customer") customerEdit: ICustomer | undefined;

  @Output("customer-edit")
  onEdit = new EventEmitter<ICustomer>();
  constructor() {
  }

  ngOnInit(): void {
  }

  editCustomer(id: string, typeId: string, name: string, birthday: string, cmnd: string, phone: string, email: string, address: string) {
    this.customerEdit = {
      id:parseInt(id),
      idTypeCustomer :parseInt(typeId),
      name:name,
      birthday:birthday,
      CMND:parseInt(cmnd),
      phoneNumber:parseInt(phone),
      email:email,
      address:address
    };
    console.log(this.customerEdit);
    this.onEdit.emit(this.customerEdit);
  }
}
