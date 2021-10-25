import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatbarComponent } from './floatbar.component';

describe('FloatbarComponent', () => {
  let component: FloatbarComponent;
  let fixture: ComponentFixture<FloatbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatbarComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
