import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorThucHanhComponent } from './color-thuc-hanh.component';

describe('ColorThucHanhComponent', () => {
  let component: ColorThucHanhComponent;
  let fixture: ComponentFixture<ColorThucHanhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorThucHanhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorThucHanhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
