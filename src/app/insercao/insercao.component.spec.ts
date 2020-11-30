import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsercaoComponent } from './insercao.component';

describe('InsercaoComponent', () => {
  let component: InsercaoComponent;
  let fixture: ComponentFixture<InsercaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsercaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsercaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
