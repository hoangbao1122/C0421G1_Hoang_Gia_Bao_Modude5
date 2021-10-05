import {Component, OnInit} from '@angular/core';
import {IFormLogin} from "../iform-login";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userLogin: FormGroup;

  constructor() {
    this.userLogin = new FormGroup({
      username: new FormControl("", [Validators.minLength(9)]),
      password: new FormControl("", [Validators.minLength(9)])
    })
  }

  ngOnInit(): void {
  }

  login() {
    console.log(this.userLogin.value);
    if (this.userLogin.valid){
      alert("ok login thanh cong")
    }
  }
}
