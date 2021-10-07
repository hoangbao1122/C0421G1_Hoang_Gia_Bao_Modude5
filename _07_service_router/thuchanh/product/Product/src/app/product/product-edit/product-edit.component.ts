import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, ActivationEnd, Router, Routes} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  constructor(private productService: ProductService, private route: Router, private active: ActivatedRoute) {
  }

  ngOnInit(): void {
    let index = this.active.snapshot.params.id;

    // @ts-ignore
    this.productForm.setValue(this.productService.findById(index));
  }

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  })

  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product);
    this.route.navigateByUrl("product/list");
  }

}
