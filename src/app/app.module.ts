import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { StudentsComponent } from './components/students/students.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListAlumnsComponent } from './components/list-alumns/list-alumns.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app.material.module';
import { AlumnsTablaComponent } from "./components/alumns-tabla/alumns-tabla.component";
import { EditarTableCourseComponent } from './components/editar-table-course/editar-table-course.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    StudentsComponent,
    NavbarComponent,
    ListAlumnsComponent,
    FormContactComponent,
    AlumnsTablaComponent,
    EditarTableCourseComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
