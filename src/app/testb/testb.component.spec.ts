import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbComponent } from './testb.component';

describe('TestbComponent', () => {
  let component: TestbComponent;
  let fixture: ComponentFixture<TestbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
