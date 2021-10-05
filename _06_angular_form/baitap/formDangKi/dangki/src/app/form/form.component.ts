import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {IDangKi} from "../idang-ki";
import {min} from "rxjs/operators";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output("user")
  onCreate = new EventEmitter<IDangKi>();

  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      email: new FormControl("", [Validators.minLength(5)]),
      country: new FormControl("", [Validators.required]),
      age: new FormControl("", [Validators.min(18)]),
      gender: new FormControl("0", [Validators.required]),
      phone: new FormControl("", [Validators.pattern(/^\+84\d{9,10}$/)]),
      password: new FormControl("", [Validators.minLength(6)]),
      confirmPassword: new FormControl("", [Validators.minLength(6)])
    });
  }

  ngOnInit(): void {
  }


  createUser() {
    console.log(this.userForm);
    if (this.userForm.valid) {
      this.onCreate.emit(this.userForm.value);
    }
  }
}
