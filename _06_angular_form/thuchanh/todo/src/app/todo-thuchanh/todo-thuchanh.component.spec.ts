import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoThuchanhComponent } from './todo-thuchanh.component';

describe('TodoThuchanhComponent', () => {
  let component: TodoThuchanhComponent;
  let fixture: ComponentFixture<TodoThuchanhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoThuchanhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoThuchanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
