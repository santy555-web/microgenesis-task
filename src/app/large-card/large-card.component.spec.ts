import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeCardComponent } from './large-card.component';

describe('LargeCardComponent', () => {
  let component: LargeCardComponent;
  let fixture: ComponentFixture<LargeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
