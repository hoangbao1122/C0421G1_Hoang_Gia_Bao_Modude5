import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConEditComponent } from './con-edit.component';

describe('ConEditComponent', () => {
  let component: ConEditComponent;
  let fixture: ComponentFixture<ConEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
