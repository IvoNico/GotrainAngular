import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnsTablaComponent } from './alumns-tabla.component';

describe('AlumnsTablaComponent', () => {
  let component: AlumnsTablaComponent;
  let fixture: ComponentFixture<AlumnsTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnsTablaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnsTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
