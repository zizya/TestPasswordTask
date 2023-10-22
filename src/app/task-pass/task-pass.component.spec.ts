import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPassComponent } from './task-pass.component';

describe('TaskPassComponent', () => {
  let component: TaskPassComponent;
  let fixture: ComponentFixture<TaskPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskPassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
