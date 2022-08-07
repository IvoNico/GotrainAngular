import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {
  formContact: FormGroup //tambien se puede utilizar: formContact: FormGroup = new FormGroup
  //form gruop se utiliza para trabajar de forma dinamica

  constructor(
    private fb: FormBuilder
  ) { 
    this.formContact = fb.group({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      nacionalidad: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  sendInfo(){
    console.log(this.formContact)
  }

}
