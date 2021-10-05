import {Component, OnInit} from '@angular/core';
import {ITodo} from "../itodo";
import {FormControl} from "@angular/forms";

let _id = 1;
@Component({
  selector: 'app-todo-thuchanh',
  templateUrl: './todo-thuchanh.component.html',
  styleUrls: ['./todo-thuchanh.component.css']
})
export class TodoThuchanhComponent implements OnInit {

  todos: ITodo[] = [];
  content = new FormControl();

  constructor() {
  }

  ngOnInit(): void {
  }


  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: ITodo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.content.reset();
    }
  }
}

