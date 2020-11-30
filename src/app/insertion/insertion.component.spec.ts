import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertionComponent } from './insertion.component';

describe('InsertionComponent', () => {
  let component: InsertionComponent;
  let fixture: ComponentFixture<InsertionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
