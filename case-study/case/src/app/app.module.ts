import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CusCreateComponent } from './customer/cus-create/cus-create.component';
import { CusEditComponent } from './customer/cus-edit/cus-edit.component';


import { CusListComponent } from './customer/cus-list/cus-list.component';
import { ListEmployeeComponent } from './employee/emp-list/list-employee.component';
import { EmpCreateComponent } from './employee/emp-create/emp-create.component';
import { EmpEditComponent } from './employee/emp-edit/emp-edit.component';
import { ConListComponent } from './contact/con-list/con-list.component';
import { ConCreateComponent } from './contact/con-create/con-create.component';
import { ConEditComponent } from './contact/con-edit/con-edit.component';

import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    AppComponent,
    CusCreateComponent,
    CusEditComponent,
    // EmpCreateComponent,
    CusListComponent,
    ListEmployeeComponent,
    EmpCreateComponent,
    EmpEditComponent,
    ConListComponent,
    ConCreateComponent,
    ConEditComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
