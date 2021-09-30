import {Component, OnInit} from '@angular/core';
import {Pet} from "../pet";

@Component({
  selector: 'app-thu-nuoi',
  templateUrl: './thu-nuoi.component.html',
  styleUrls: ['./thu-nuoi.component.css']
})
export class ThuNuoiComponent implements OnInit {
  pet: Pet = {
    name: 'puppie',
    image: 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg'
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
