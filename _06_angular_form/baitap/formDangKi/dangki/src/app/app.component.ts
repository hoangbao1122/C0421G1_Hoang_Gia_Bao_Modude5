import {Component} from '@angular/core';
import {IDangKi} from "./idang-ki";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dangki';
  user: IDangKi[] =
    [{
      email: 'b@gmail.com',
      country: 'da nang',
      age: 30,
      gender: 'nam',
      phone: 123456789,
      password: 'hoang',
      confirmPassword: 'hoang'
    }];

  newUser(value: IDangKi) {
    this.user.push(value);
  }
}
