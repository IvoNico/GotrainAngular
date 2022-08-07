import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-alumns',
  templateUrl: './list-alumns.component.html',
  styleUrls: ['./list-alumns.component.css']
})
export class ListAlumnsComponent implements OnInit {
  alumnos = [
    {
      nombre:'Karla',
    apellido:'Gribaudo'
  },
    {
      nombre:'Sandra',
      apellido: 'Bertini'
    },
    {nombre:'Ivo',
    apellido:'Chapochnikoff'},
    {
      nombre:'Nicolas',
      apellido:'Mignolet'
    },
    {
      nombre:'Lucas',
      apellido:'Carrillo'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
