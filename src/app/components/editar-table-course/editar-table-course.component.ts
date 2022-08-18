import { Curso } from './../alumns-tabla/alumns-tabla.component';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editar-table-course',
  templateUrl: './editar-table-course.component.html',
  styleUrls: ['./editar-table-course.component.css']
})
export class EditarTableCourseComponent implements OnInit {
  formulario: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private cursoRef: MatDialogRef<EditarTableCourseComponent>,
    @Inject(MAT_TABLE_EDIT_DATA) public data: Curso,
  ) { 
    this.formulario = fb.group({
      nombre: new FormControl(data.nombre),
      nivel:  new FormControl(data.nivel),
      duracion: new FormControl(data.duracion),
      alumnosInscriptos: new FormControl(data.alumnosInscriptos),
      inscripcionesAbiertas:new FormControl(data.inscripcionesAbiertas),
    })
  }

  ngOnInit(): void {
  }

}
function MAT_TABLE_EDIT_DATA(MAT_TABLE_EDIT_DATA: any) {
  throw new Error('Function not implemented.');
}

