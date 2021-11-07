import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosManageComponent } from './todos-manage.component';

describe('TodosManageComponent', () => {
  let component: TodosManageComponent;
  let fixture: ComponentFixture<TodosManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
