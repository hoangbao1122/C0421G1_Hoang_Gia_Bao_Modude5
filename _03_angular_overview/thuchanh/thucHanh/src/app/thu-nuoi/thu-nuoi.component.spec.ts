import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuNuoiComponent } from './thu-nuoi.component';

describe('ThuNuoiComponent', () => {
  let component: ThuNuoiComponent;
  let fixture: ComponentFixture<ThuNuoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThuNuoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuNuoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
