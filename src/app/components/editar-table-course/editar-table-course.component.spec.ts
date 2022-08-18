import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTableCourseComponent } from './editar-table-course.component';

describe('EditarTableCourseComponent', () => {
  let component: EditarTableCourseComponent;
  let fixture: ComponentFixture<EditarTableCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTableCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTableCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
