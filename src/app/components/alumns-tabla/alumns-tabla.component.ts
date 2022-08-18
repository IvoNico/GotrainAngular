import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource} from '@angular/material/table';
import { EditarTableCourseComponent } from '../editar-table-course/editar-table-course.component';


export interface Curso{
  nombre: string;
  nivel: string;
  duracion: string;
  alumnosInscriptos: number;
  inscripcionesAbiertas: boolean;
}

const ELEMENT_DATA: Curso[] = [
  {nombre: 'Hipertrofia', nivel: 'Principiante', duracion:'3 meses', alumnosInscriptos:58, inscripcionesAbiertas: true},
  {nombre: 'Hipertrofia II', nivel: 'Avanzados', duracion:'7 meses', alumnosInscriptos:15, inscripcionesAbiertas: false},
  {nombre: 'Fuerza', nivel: 'Principiante', duracion:'3 meses', alumnosInscriptos:158, inscripcionesAbiertas: true},
  {nombre: 'Fuerza II y III', nivel: 'Avanzado', duracion:'12 meses', alumnosInscriptos:236, inscripcionesAbiertas: false},
  {nombre: 'Resistencia', nivel: 'Principiante', duracion:'3 meses', alumnosInscriptos:78, inscripcionesAbiertas: true},
  {nombre: 'Ejercicios', nivel: 'Principiante', duracion:'2 meses', alumnosInscriptos:528, inscripcionesAbiertas: false}
]

@Component({
  selector: 'app-alumns-tabla',
  templateUrl: './alumns-tabla.component.html',
  styleUrls: ['./alumns-tabla.component.css']
})
export class AlumnsTablaComponent implements OnInit {
  columnas: string[] = ['nombre', 'nivel', 'duracion', 'alumnosInscriptos', 'inscripcionesAbiertas', 'acciones']; 
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource(ELEMENT_DATA);
  

  constructor(
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  eliminar(elemento: Curso){
    this.dataSource.data = this.dataSource.data.filter((curso: Curso)=> curso.nombre!= elemento.nombre);
  }

  editar(elemento: Curso){
    const cursoRef = this.dialog.open(EditarTableCourseComponent, {
      width: '400px',
      data: elemento
    })

  }
}
