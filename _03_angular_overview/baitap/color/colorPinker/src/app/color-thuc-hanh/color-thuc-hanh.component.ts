import {Component, OnInit} from '@angular/core';
// import {Color} from "../color";

@Component({
  selector: 'app-color-thuc-hanh',
  templateUrl: './color-thuc-hanh.component.html',
  styleUrls: ['./color-thuc-hanh.component.css']
})
export class ColorThucHanhComponent implements OnInit {
  color:string = 'red';

  constructor() {
  }

  ngOnInit(): void {
  }

}
